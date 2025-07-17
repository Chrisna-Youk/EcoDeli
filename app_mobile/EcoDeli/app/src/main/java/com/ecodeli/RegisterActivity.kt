package com.ecodeli

import android.content.Intent
import android.content.SharedPreferences
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import androidx.appcompat.app.AppCompatActivity
import com.ecodeli.services.Service

class RegisterActivity : AppCompatActivity() {

    private lateinit var btnConnexion: Button
    private lateinit var btnInscription: Button
    private lateinit var btnRegister: Button

    private lateinit var etLname: EditText
    private lateinit var etFname: EditText
    private lateinit var etEmail: EditText
    private lateinit var etPassword: EditText
    private lateinit var etConfirmPassword: EditText
    private lateinit var etBirthDate: EditText

    private lateinit var prefs: SharedPreferences
    private lateinit var service: Service

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_register)

        prefs = getSharedPreferences("ecodeli_prefs", MODE_PRIVATE)
        service = Service()

        initViews()
        setupClickListeners()
    }

    private fun initViews() {
        btnConnexion = findViewById(R.id.btnConnexion)
        btnInscription = findViewById(R.id.btnInscription)
        btnRegister = findViewById(R.id.btnRegister)

        etLname = findViewById(R.id.etLname)
        etFname = findViewById(R.id.etFname)
        etEmail = findViewById(R.id.etEmail)
        etPassword = findViewById(R.id.etPassword)
        etConfirmPassword = findViewById(R.id.etConfirmPassword)
        etBirthDate = findViewById(R.id.etBirthDate)
    }

    private fun setupClickListeners() {
        btnConnexion.setOnClickListener {
            val intent = Intent(this, LoginActivity::class.java)
            startActivity(intent)
            finish()
        }

        btnRegister.setOnClickListener {
            performRegistration()
        }
    }

    private fun performRegistration() {
        val lname = etLname.text.toString().trim()
        val fname = etFname.text.toString().trim()
        val email = etEmail.text.toString().trim()
        val password = etPassword.text.toString().trim()
        val confirmPassword = etConfirmPassword.text.toString().trim()
        val birthDate = etBirthDate.text.toString().trim()

        // Form
        if (lname.isEmpty()) {
            etLname.error = "Nom requis"
            return
        }
        if (fname.isEmpty()) {
            etFname.error = "Prénom requis"
            return
        }
        if (email.isEmpty()) {
            etEmail.error = "Email requis"
            return
        }
        if (!android.util.Patterns.EMAIL_ADDRESS.matcher(email).matches()) {
            etEmail.error = "Email invalide"
            return
        }
        if (password.isEmpty()) {
            etPassword.error = "Mot de passe requis"
            return
        }

        //val PASSWORD_REGEX =
        //    Regex("""^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).+$""")
        if (password.length < 14) {
            etPassword.error = "Mot de passe trop court (min 14 caractères)"
            return
        }

        if (confirmPassword.isEmpty()) {
            etConfirmPassword.error = "Confirmation requise"
            return
        }
        if (password != confirmPassword) {
            etConfirmPassword.error = "Les mots de passe ne correspondent pas"
            return
        }
        if (birthDate.isEmpty()) {
            etBirthDate.error = "Date de naissance requise"
            return
        }
        if (!isValidDate(birthDate)) {
            etBirthDate.error = "Format de date invalide (jj/mm/aaaa)"
            return
        }

        btnRegister.isEnabled = false
        btnRegister.text = "Inscription..."

        val userData = mapOf(
            "lname" to lname,
            "fname" to fname,
            "email" to email,
            "password" to password,
            "birthDate" to birthDate
        )
    }

    private fun isValidDate(date: String): Boolean {
        return try {
            val parts = date.split("/")
            if (parts.size != 3) return false

            val day = parts[0].toInt()
            val month = parts[1].toInt()
            val year = parts[2].toInt()

            day in 1..31 && month in 1..12 && year in 1900..2024
        } catch (e: Exception) {
            false
        }
    }
}