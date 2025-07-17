package com.ecodeli

import android.content.Intent
import android.content.SharedPreferences
import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.EditText
import android.widget.ImageView
import android.widget.LinearLayout
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.ecodeli.services.Service

class LoginActivity : AppCompatActivity() {

    private lateinit var btnConnexion: Button
    private lateinit var btnInscription: Button
    private lateinit var btnLogin: Button
    private lateinit var loginEmail: EditText
    private lateinit var loginPassword: EditText
    private lateinit var layoutConnexion: LinearLayout
    private lateinit var layoutInscription: LinearLayout
    private lateinit var prefs: SharedPreferences
    private lateinit var service: Service

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)

        prefs = getSharedPreferences("ecodeli_prefs", MODE_PRIVATE)
        service = Service()

        if (prefs.getBoolean("is_logged_in", false)) {
            redirectToMainActivity()
            return
        }

        initViews()
        setupClickListeners()
        showLoginForm()
    }

    private fun initViews() {
        btnConnexion = findViewById(R.id.btnConnexion)
        btnInscription = findViewById(R.id.btnInscription)
        btnLogin = findViewById(R.id.btnLogin)
        loginEmail = findViewById(R.id.loginEmail)
        loginPassword = findViewById(R.id.loginPassword)
        layoutConnexion = findViewById(R.id.layoutConnexion)
        layoutInscription = findViewById(R.id.layoutInscription)
    }

    private fun setupClickListeners() {
        btnInscription.setOnClickListener {
            val intent = Intent(this, RegisterActivity::class.java)
            startActivity(intent)
        }

        btnConnexion.setOnClickListener {
            showLoginForm()
        }

        btnLogin.setOnClickListener {
            performLogin()
        }
    }

    private fun showLoginForm() {
        layoutConnexion.visibility = View.VISIBLE
        layoutInscription.visibility = View.GONE

        btnConnexion.setBackgroundResource(R.drawable.btn_tournesol_border)
        btnConnexion.setTextColor(getColor(android.R.color.white))
        btnInscription.setBackgroundResource(R.drawable.btn_tournesol)
        btnInscription.setTextColor(getColor(android.R.color.black))
    }

    private fun performLogin() {
        val email = loginEmail.text.toString().trim()
        val password = loginPassword.text.toString().trim()

        if (email.isEmpty()) {
            loginEmail.error = "Email requis"
            return
        }
        if (password.isEmpty()) {
            loginPassword.error = "Mot de passe requis"
            return
        }
        if (!android.util.Patterns.EMAIL_ADDRESS.matcher(email).matches()) {
            loginEmail.error = "Email invalide"
            return
        }

        btnLogin.isEnabled = false
        btnLogin.text = "Connexion..."

        service.login(email, password) { success, userType, message ->
            runOnUiThread {
                btnLogin.isEnabled = true
                btnLogin.text = "Se connecter"

                if (success) {
                    prefs.edit().apply {
                        putBoolean("is_logged_in", true)
                        putString("user_email", email)
                        putString("user_type", "client")
                        putString("user_id", "user_${System.currentTimeMillis()}")
                        apply()
                    }
                    Toast.makeText(this, "Connexion réussie !", Toast.LENGTH_SHORT).show()
                    redirectToMainActivity()
                } else {
                    Toast.makeText(this, message ?: "Erreur de connexion", Toast.LENGTH_SHORT).show()
                }
            }
        }
    }

    private fun redirectToMainActivity() {
        val intent = Intent(this, ClientDashboardActivity::class.java)
        startActivity(intent)
        finish()
    }
}