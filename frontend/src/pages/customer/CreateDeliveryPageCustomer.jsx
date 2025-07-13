import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";

const CreateDeliveryCustomer = ({ userId }) => {
  const [formData, setFormData] = useState({
    type: "demande",
    title: "",
    description: "",
    price: "",
    weight: "",
    length: "",
    width: "",
    depth: "",
    date: "",
    cityDeparture: "",
    addressDeparture: "",
    preciseAddressDeparture: "",     // Ajouté
    cityDestination: "",
    addressDestination: "",
    preciseAddressDestination: "",   // Ajouté
    photoDelivery: null,
  });

  const http = useAuth();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null && value !== "") data.append(key, value);
    });
    data.append("userId", userId);

    try {
      await http.post("/announcement/create", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Annonce créée avec succès !");
      setFormData({
        type: "demande",
        title: "",
        description: "",
        price: "",
        weight: "",
        length: "",
        width: "",
        depth: "",
        date: "",
        cityDeparture: "",
        addressDeparture: "",
        preciseAddressDeparture: "",       // Reset aussi
        cityDestination: "",
        addressDestination: "",
        preciseAddressDestination: "",     // Reset aussi
        photoDelivery: null,
      });
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Erreur lors de la création de l'annonce"
      );
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center w-screen py-10 px-4 justify-center">
      <h1 className="text-3xl font-bold mb-6">Créer une annonce de livraison</h1>

      <div className="w-full max-w-2xl bg-gray-50 p-8 rounded-xl shadow-md">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Type d'annonce */}
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Type d'annonce</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            >
              <option value="demande">Je cherche un livreur</option>
            </select>
          </div>

          {/* Titre */}
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Titre de l'annonce"
            className="w-full border border-gray-300 rounded-lg p-3"
            required
          />

          {/* Description */}
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full border border-gray-300 rounded-lg p-3 h-28 resize-none"
            required
          />

          {/* Date */}
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3"
            required
          />

          {/* Adresse de départ */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="cityDeparture"
              value={formData.cityDeparture}
              onChange={handleChange}
              placeholder="Ville de départ"
              className="border border-gray-300 rounded-lg p-3"
              required
            />
            <input
              type="text"
              name="preciseAddressDeparture"
              value={formData.preciseAddressDeparture}
              onChange={handleChange}
              placeholder="Adresse précise de départ"
              className="border border-gray-300 rounded-lg p-3"
            />
          </div>

          {/* Adresse de destination */}
          <div className="grid grid-cols-2 gap-4 mt-2">
            <input
              type="text"
              name="cityDestination"
              value={formData.cityDestination}
              onChange={handleChange}
              placeholder="Ville d’arrivée"
              className="border border-gray-300 rounded-lg p-3"
              required
            />
            <input
              type="text"
              name="preciseAddressDestination"
              value={formData.preciseAddressDestination}
              onChange={handleChange}
              placeholder="Adresse précise d’arrivée"
              className="border border-gray-300 rounded-lg p-3"
            />
          </div>

          {/* Poids */}
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            placeholder="Poids (kg)"
            className="w-full border border-gray-300 rounded-lg p-3"
          />

          {/* Dimensions */}
          <div className="flex gap-4">
            <input
              type="number"
              name="length"
              value={formData.length}
              onChange={handleChange}
              placeholder="Longueur (cm)"
              className="w-1/3 border border-gray-300 rounded-lg p-3"
            />
            <input
              type="number"
              name="width"
              value={formData.width}
              onChange={handleChange}
              placeholder="Largeur (cm)"
              className="w-1/3 border border-gray-300 rounded-lg p-3"
            />
            <input
              type="number"
              name="depth"
              value={formData.depth}
              onChange={handleChange}
              placeholder="Hauteur (cm)"
              className="w-1/3 border border-gray-300 rounded-lg p-3"
            />
          </div>

          {/* Photo */}
          <div>
            <label className="block mb-2 font-semibold">Photo (optionnel)</label>
            <input
              type="file"
              name="photoDelivery"
              accept="image/*"
              onChange={handleChange}
              className="w-full"
            />
          </div>

          {/* Bouton */}
          <button
            type="submit"
            className="w-full bg-yellow-600 text-white font-semibold py-3 rounded-lg hover:bg-yellow-700"
          >
            Publier l'annonce
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateDeliveryCustomer;
