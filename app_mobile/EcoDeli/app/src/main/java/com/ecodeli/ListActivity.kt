package com.ecodeli

import android.app.AlertDialog
import android.content.SharedPreferences
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.ecodeli.adapters.CommandeAdapter
import com.ecodeli.models.Delivery
import com.ecodeli.services.Service

class ListActivity : AppCompatActivity () {

    private lateinit var prefs: SharedPreferences
    private lateinit var service: Service
    private lateinit var commandeAdapter: CommandeAdapter

    private val commandesList = mutableListOf<Delivery>()
    private var userId: String = ""

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_delivery_list)

        prefs = getSharedPreferences("ecodeli_prefs", MODE_PRIVATE)
        service = Service()
        userId = prefs.getString("user_id", "") ?: ""

        initViews()
        setupRecyclerView()
        loadCommandes()
    }

    private fun initViews() {
        supportActionBar?.setDisplayHomeAsUpEnabled(true)
        supportActionBar?.title = "Mes Livraisons"
    }

    private fun setupRecyclerView() {
        commandeAdapter = CommandeAdapter(commandesList) { commande ->
            showCommandeDetails(commande)
        }
    }

    private fun loadCommandes() {
        service.getClientCommandes(userId) { commandes ->
            runOnUiThread {
                commandesList.clear()
                commandesList.addAll(commandes)
                commandeAdapter.notifyDataSetChanged()
            }
        }
    }

    private fun showCommandeDetails(delivery: Delivery) {
        val builder = AlertDialog.Builder(this)
        builder.setTitle("Détails de la commande")

        val message = """
            Title: ${delivery.title}
            Description: ${delivery.description}
            Montant: ${delivery.montant}€
            Statut: ${getStatusLabel(delivery.status)}
            Adresse: ${delivery.endAdresseLivraison}
        """.trimIndent()

        builder.setMessage(message)
        builder.setNegativeButton("Fermer", null)
        builder.show()
    }



    private fun getStatusLabel(status: String): String {
        return when (status) {
            "en_attente" -> "En attente"
            "en_livraison" -> "En livraison"
            "livree" -> "Livrée"
            "validee" -> "Validée"
            "annulee" -> "Annulée"
            else -> status
        }
    }

    override fun onSupportNavigateUp(): Boolean {
        return true
    }
}