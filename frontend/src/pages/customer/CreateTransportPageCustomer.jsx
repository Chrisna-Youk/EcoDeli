import React from 'react';

const CreateTransportCustomer = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center w-screen py-10 px-4 justify-center">
      <h1 className="text-3xl font-bold mb-2">Créer une annonce de covoiturage</h1>

      <div className="w-full max-w-2xl bg-gray-50 p-8 rounded-xl shadow-md">
        <form className="space-y-6">

          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Type d'annonce</label>
            <select
              className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="offre">Je propose un trajet</option>
              <option value="demande">Je cherche un trajet</option>
            </select>
          </div>

          <input
            type="text"
            placeholder="Titre de l'annonce"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          <textarea
            placeholder="Description (ex: ambiance, pause prévue, bagages, etc.)"
            className="w-full border border-gray-300 rounded-lg p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Ville de départ"
              className="w-1/2 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="text"
              placeholder="Ville d’arrivée"
              className="w-1/2 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div className="flex gap-4">
            <input
              type="date"
              placeholder="Date de départ"
              className="w-1/2 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="time"
              placeholder="Heure de départ"
              className="w-1/2 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <input
            type="number"
            placeholder="Prix par passager (€)"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          <input
            type="number"
            placeholder="Nombre de places disponibles"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          <div>
            <label className="block mb-2 font-semibold">Image du véhicule (optionnel)</label>
            <input
              type="file"
              accept="image/*"
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
