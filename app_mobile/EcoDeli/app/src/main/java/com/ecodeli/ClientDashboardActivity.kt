    package com.ecodeli

    import android.app.AlertDialog
    import android.content.Intent
    import android.content.SharedPreferences
    import android.os.Bundle
    import android.view.LayoutInflater
    import android.widget.*
    import androidx.appcompat.app.AppCompatActivity
    import androidx.recyclerview.widget.LinearLayoutManager
    import androidx.recyclerview.widget.RecyclerView
    import com.ecodeli.adapters.CommandeAdapter
    import com.ecodeli.models.Delivery
    import com.ecodeli.services.Service

    //NFC
    import android.app.PendingIntent
    import android.nfc.NfcAdapter
    import android.nfc.Tag
    import android.widget.TextView


    class ClientDashboardActivity : AppCompatActivity() {

        private lateinit var prefs: SharedPreferences
        private lateinit var service: Service

        // Views principales
        private lateinit var tvTotal: TextView
        private lateinit var tvTotalDepense: TextView
        private lateinit var btnNouvelleCommande: Button
        private lateinit var btnMesCommandes: Button

        // RecyclerView pour activités récentes
        private lateinit var rvActivitesRecentes: RecyclerView
        private lateinit var activiteAdapter: CommandeAdapter

        private val commandesList = mutableListOf<Delivery>()
        private lateinit var btnProfile: Button


        // Données utilisateur
        private var userId: String = ""
        private var userEmail: String = ""

        // NFC
        private lateinit var nfcAdapter: NfcAdapter
        private lateinit var pendingIntent: PendingIntent
        private lateinit var tvNfcContent: TextView

        override fun onCreate(savedInstanceState: Bundle?) {
            super.onCreate(savedInstanceState)
            setContentView(R.layout.activity_client_dashboard)

            // 1) Init de toutes les vues, y compris le TextView NFC
            initViews()

            // 2) Configuration NFC
            nfcAdapter = NfcAdapter.getDefaultAdapter(this)
            pendingIntent = PendingIntent.getActivity(
                this, 0,
                Intent(this, javaClass).addFlags(Intent.FLAG_ACTIVITY_SINGLE_TOP),
                PendingIntent.FLAG_MUTABLE or PendingIntent.FLAG_UPDATE_CURRENT
            )

            // 3) Services et prefs
            prefs = getSharedPreferences("ecodeli_prefs", MODE_PRIVATE)
            service = Service()

            // 4) Infos utilisateur
            userId = prefs.getString("user_id", "") ?: ""
            userEmail = prefs.getString("user_email", "") ?: ""

            // 5) Listeners, RecyclerView
            setupClickListeners()
            setupRecyclerView()

            // 6) Chargement initial des données
            loadRecentActivities()
        }

        override fun onPause() {
            super.onPause()
            // Désactive le dispatch NFC
            nfcAdapter.disableForegroundDispatch(this)
        }


        override fun onNewIntent(intent: Intent) {
            super.onNewIntent(intent)
            // Gère l'intent NFC
            handleNfcIntent(intent)
        }

        private fun initViews() {
            tvTotal    = findViewById(R.id.tvTotal)
            tvTotalDepense      = findViewById(R.id.tvTotalDepense)
            btnNouvelleCommande = findViewById(R.id.btnNouvelleCommande)
            btnMesCommandes     = findViewById(R.id.btnMesCommandes)
            btnProfile          = findViewById(R.id.btnProfile)
            rvActivitesRecentes = findViewById(R.id.rvActivitesRecentes)
            tvNfcContent        = findViewById(R.id.nfc_content)
        }

        private fun setupClickListeners() {
            btnNouvelleCommande.setOnClickListener {
                showCreateCommandeDialog()
            }

            btnMesCommandes.setOnClickListener {
                val intent = Intent(this, ListActivity::class.java)
                startActivity(intent)
            }

            val btnProfile = findViewById<Button>(R.id.btnProfile)
            btnProfile.setOnClickListener {
                val intent = Intent(this, ProfileActivity::class.java)
                startActivity(intent)
            }
        }

        private fun setupRecyclerView() {
            activiteAdapter = CommandeAdapter(commandesList) { commande ->
                showCommandeDetails(commande)
            }

            rvActivitesRecentes.apply {
                layoutManager = LinearLayoutManager(this@ClientDashboardActivity)
                adapter = activiteAdapter
            }
        }


        private fun loadRecentActivities() {
            service.getClientCommandes(userId) { commandes ->
                runOnUiThread {
                    commandesList.clear()
                    commandesList.addAll(commandes.take(3))
                    activiteAdapter.notifyDataSetChanged()
                }
            }
        }

        private fun showCreateCommandeDialog() {
            val builder = AlertDialog.Builder(this)
            val view = LayoutInflater.from(this).inflate(R.layout.create_delivery, null)
            builder.setView(view)

            val etTitle = view.findViewById<EditText>(R.id.etTitle)
            val etDescription = view.findViewById<EditText>(R.id.etDescription)
            val etMontant = view.findViewById<EditText>(R.id.etMontant)
            val startAdresse = view.findViewById<EditText>(R.id.startAdresse)
            val endAdresse = view.findViewById<EditText>(R.id.endAdresse)
            val btnCreer = view.findViewById<Button>(R.id.btnCreer)
            val btnAnnuler = view.findViewById<Button>(R.id.btnAnnuler)
            val priorityCheckBox = view.findViewById<CheckBox>(R.id.priority)


            val dialog = builder.create()

            btnCreer.setOnClickListener {
                val title = etTitle.text.toString().trim()
                val description = etDescription.text.toString().trim()
                val montantStr = etMontant.text.toString().trim()
                val startAdresse = startAdresse.text.toString().trim()
                val endAdresse = endAdresse.text.toString().trim()


                if (title.isEmpty() || description.isEmpty() || montantStr.isEmpty() || endAdresse.isEmpty() || startAdresse.isEmpty()) {
                    Toast.makeText(this, "Veuillez remplir tous les champs", Toast.LENGTH_SHORT).show()
                    return@setOnClickListener
                }

                val montant = try {
                    montantStr.toDouble()
                } catch (e: NumberFormatException) {
                    Toast.makeText(this, "Montant invalide", Toast.LENGTH_SHORT).show()
                    return@setOnClickListener
                }

                val newDelivery = Delivery(
                    id = "",
                    clientId = userId,
                    title = title,
                    description = description,
                    montant = montant,
                    status = "en_attente",
                    startAdresseLivraison = startAdresse,
                    endAdresseLivraison = endAdresse,
                    priority = priorityCheckBox.isChecked
                )

                btnCreer.isEnabled = false
                btnCreer.text = "Création..."

                service.createCommande(newDelivery) { success, message ->
                    runOnUiThread {
                        btnCreer.isEnabled = true
                        btnCreer.text = "Créer"

                        if (success) {
                            Toast.makeText(this, "Delivery créée avec succès !", Toast.LENGTH_SHORT).show()
                            dialog.dismiss()
                            loadRecentActivities()
                        } else {
                            Toast.makeText(this, message ?: "Erreur de création", Toast.LENGTH_SHORT).show()
                        }
                    }
                }
            }
            btnAnnuler.setOnClickListener {
                dialog.dismiss()
            }
            dialog.show()
        }

        private fun showCommandeDetails(delivery: Delivery) {
            val builder = AlertDialog.Builder(this)
            builder.setTitle("Détails de la livraison")

            val message = """
                Title: ${delivery.title}
                Description: ${delivery.description}
                Montant: ${delivery.montant}€
                Statut: ${delivery.status}
                Départ: ${delivery.startAdresseLivraison}
                Arrivée: ${delivery.endAdresseLivraison}
                Priorité: ${delivery.priority}
            """.trimIndent()

            builder.setMessage(message)
            builder.setNegativeButton("Fermer", null)
            builder.show()
        }

        private fun handleNfcIntent(intent: Intent) {
            val tag: Tag? = intent.getParcelableExtra(NfcAdapter.EXTRA_TAG)
            tag?.let {
                val idBytes: ByteArray = it.id
                val idString = idBytes.joinToString(separator = ":") { byte ->
                    String.format("%02X", byte)
                }

                tvNfcContent.text = idString
                // Notre tag NFC est "1D:0A:E0:DD:08:10:80"
                if (idString == "1D:0A:E0:DD:08:10:80") {
                    val commandeId = "1"
                    service.updateCommandeStatus(commandeId, "livree") { success, message ->
                        runOnUiThread {
                            Toast.makeText(this, message, Toast.LENGTH_SHORT).show()
                            if (success) loadRecentActivities()
                        }
                    }
                }
            }
        }

        override fun onResume() {
            super.onResume()
            nfcAdapter.enableForegroundDispatch(this, pendingIntent, null, null)
            loadRecentActivities()
        }
    }