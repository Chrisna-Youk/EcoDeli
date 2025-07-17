package com.ecodeli.models

data class User(
    val id: String,
    val email: String,
    val password: String,
    val type: String, // "client", "livreur", "commercant", "prestataire"
    val lname: String,
    val fname: String,
    val birthDate: String,
    val phone: String = "",
    val address: String = "",
    val profilePicture: String = "",
    val isActive: Boolean = true,
)

data class Delivery(
    val id: String,
    val clientId: String,
    val title: String,
    val description: String,
    val montant: Double,
    val status: String,
    val endAdresseLivraison: String = "",
    val startAdresseLivraison: String = "",
    val priority: Boolean = false,
    val dateCommande: Long = System.currentTimeMillis(),
)

