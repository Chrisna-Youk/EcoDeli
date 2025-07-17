package com.ecodeli.adapters

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.ecodeli.R
import com.ecodeli.models.Delivery
import java.text.SimpleDateFormat
import java.util.*

class CommandeAdapter(
    private val deliveries: List<Delivery>,
    private val onItemClick: (Delivery) -> Unit
) : RecyclerView.Adapter<CommandeAdapter.CommandeViewHolder>() {

    class CommandeViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        val tvCommercant: TextView = itemView.findViewById(R.id.tvCommercant)
        val tvDescription: TextView = itemView.findViewById(R.id.tvDescription)
        val tvMontant: TextView = itemView.findViewById(R.id.tvMontant)
        val tvStatus: TextView = itemView.findViewById(R.id.tvStatus)
        val tvDate: TextView = itemView.findViewById(R.id.tvDate)
        val tvTypeService: TextView = itemView.findViewById(R.id.tvTypeService)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): CommandeViewHolder {
        val view = LayoutInflater.from(parent.context)
            .inflate(R.layout.item_commande, parent, false)
        return CommandeViewHolder(view)
    }

    override fun onBindViewHolder(holder: CommandeViewHolder, position: Int) {
        val commande = deliveries[position]

        holder.tvCommercant.text = commande.title
        holder.tvDescription.text = commande.description
        holder.tvMontant.text = "${commande.montant}€"
        holder.tvStatus.text = getStatusLabel(commande.status)
        holder.tvDate.text = formatDate(commande.dateCommande)
        holder.tvTypeService.text = "📦 Livraison"

        holder.tvStatus.setTextColor(getStatusColor(holder.itemView.context, commande.status))

        if (commande.status == "livree") {
            holder.itemView.setOnLongClickListener {
                onItemClick(commande)
                true
            }
        }

        holder.itemView.setOnClickListener {
            onItemClick(commande)
        }
    }

    override fun getItemCount() = deliveries.size

    private fun getStatusLabel(status: String): String {
        return when (status) {
            "en_attente" -> "En attente"
            "en_livraison" -> "En livraison"
            "livree" -> "Livrée"
            "annulee" -> "Annulée"
            else -> status
        }
    }

    private fun getStatusColor(context: android.content.Context, status: String): Int {
        return when (status) {
            "en_attente" -> context.getColor(android.R.color.holo_orange_dark)
            "en_livraison" -> context.getColor(android.R.color.holo_blue_dark)
            "livree" -> context.getColor(android.R.color.holo_green_dark)
            "annulee" -> context.getColor(android.R.color.holo_red_dark)
            else -> context.getColor(android.R.color.black)
        }
    }

    private fun formatDate(timestamp: Long): String {
        val sdf = SimpleDateFormat("dd/MM/yyyy HH:mm", Locale.getDefault())
        return sdf.format(Date(timestamp))
    }
}