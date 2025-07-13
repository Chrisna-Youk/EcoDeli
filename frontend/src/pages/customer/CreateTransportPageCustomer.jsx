import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { useMutation, useQuery } from "@tanstack/react-query";

const CreateTransportCustomer = ({ userId }) => {
  const [formData, setFormData] = useState({
    type: "offre",
    title: "",
    description: "",
    addressDeparture: "",
    addressDestination: "",
    date: "",
    time: "",
    price: "",
    photoTransport: null,
    active: 1,
  });

  const http = useAuth();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("type", formData.type);
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("addressDeparture", formData.addressDeparture);
    data.append("addressDestination", formData.addressDestination);
    data.append("date", formData.date);
    data.append("time", formData.time);
    data.append("price", formData.price);
    data.append("userId", userId);
    data.append("active", 1);

    if (formData.photoTransport) {
      data.append("photoTransport", formData.photoTransport);
    }

    try {
      await http.post("/transport/create", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Annonce créée avec succès !");
      setFormData({
        type: "offre",
        title: "",
        description: "",
        addressDeparture: "",
        addressDestination: "",
        date: "",
        time: "",
        price: "",
        photoTransport: null,
        active: 1,
      });
    } catch (error) {
      alert(
        error.response?.data?.message || "Erreur lors de la création de l'annonce"
      );
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center w-screen py-10 px-4 justify-center">
      <h1 className="text-3xl font-bold mb-2">Créer une annonce de covoiturage</h1>

      <div className="w-full max-w-2xl bg-gray-50 p-8 rounded-xl shadow-md">
        <form className="space-y-6" onSubmit={handleSubmit}>

          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Type d'annonce</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            >
              <option value="offre">Je propose un trajet</option>
              <option value="demande">Je cherche un trajet</option>
            </select>
          </div>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Titre de l'annonce"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description (ex: ambiance, pause prévue, bagages, etc.)"
            className="w-full border border-gray-300 rounded-lg p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />

          <div className="flex gap-4">
            <input
              type="text"
              name="addressDeparture"
              value={formData.addressDeparture}
              onChange={handleChange}
              placeholder="Ville de départ"
              className="w-1/2 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <input
              type="text"
              name="addressDestination"
              value={formData.addressDestination}
              onChange={handleChange}
              placeholder="Ville d’arrivée"
              className="w-1/2 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <div className="flex gap-4">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-1/2 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-1/2 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Prix par passager (€)"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
            min="0"
          />

          <div>
            <label className="block mb-2 font-semibold">Image du véhicule (optionnel)</label>
            <input
              type="file"
              name="photoTransport"
              accept="image/*"
              onChange={handleChange}
              className="w-full"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-600 text-white font-semibold py-3 rounded-lg hover:bg-yellow-700 transition duration-300 cursor-pointer"
          >
            Publier l'annonce
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTransportCustomer;
