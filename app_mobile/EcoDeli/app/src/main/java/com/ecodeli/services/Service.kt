package com.ecodeli.services

import android.os.Handler
import android.os.Looper
import com.ecodeli.models.*

class Service {

    private val handler = Handler(Looper.getMainLooper())
    private val users = mutableListOf<User>()
    private val deliveries = mutableListOf<Delivery>()

    init {
        DumpData()
    }

    private fun DumpData() {
        users.add(User("1", "customer@test.fr", "123456", "client", "Jean", "Tifrice", "01/01/1990"))
    }

    fun login(email: String, password: String, callback: (Boolean, String?, String?) -> Unit) {
        handler.postDelayed({
            val user = users.find { it.email == email && it.password == password }

            if (user != null) {
                callback(true, "client", "Connexion réussie")
            } else {
                callback(false, null, "Email ou mot de passe incorrect")
            }
        }, 1500)
    }

    fun getClientCommandes(clientId: String, callback: (List<Delivery>) -> Unit) {
        handler.postDelayed({
            val clientCommandes = deliveries.filter { it.clientId == clientId }
                .sortedByDescending { it.dateCommande }
            callback(clientCommandes)
        }, 1000)
    }

    fun createCommande(delivery: Delivery, callback: (Boolean, String?) -> Unit) {
        handler.postDelayed({
            val newCommande = delivery.copy(
                id = (deliveries.size + 1).toString(),
                dateCommande = System.currentTimeMillis()
            )
            deliveries.add(newCommande)
            callback(true, "Delivery créée avec succès")
        }, 1500)
    }

    fun updateCommandeStatus(commandeId: String, newStatus: String, callback: (Boolean, String?) -> Unit) {
        handler.postDelayed({
            val index = deliveries.indexOfFirst { it.id == commandeId }
            if (index != -1) {
                val updated = deliveries[index].copy(status = newStatus)
                deliveries[index] = updated
                callback(true, "Statut mis à jour avec succès")
            } else {
                callback(false, "Commande introuvable")
            }
        }, 1000)
    }
}