import React from 'react';

const CreerAnnonce = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center w-screen py-10 px-4 justify-center">
      <h1 className="text-3xl font-bold mb-2">Créer une annonce</h1>

      <div className="w-full max-w-2xl bg-gray-50 p-8 rounded-xl shadow-md">
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Titre de l'annonce"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          <textarea
            placeholder="Description"
            className="w-full border border-gray-300 rounded-lg p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          <input
            type="number"
            placeholder="Prix (€)"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
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

          <input
            type="number"
            placeholder="Poids du colis (kg)"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          <div className="flex gap-4">
            <input
              type="number"
              placeholder="Longueur (cm)"
              className="w-1/3 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="number"
              placeholder="Largeur (cm)"
              className="w-1/3 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="number"
              placeholder="Hauteur (cm)"
              className="w-1/3 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Image</label>
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

export default CreerAnnonce;
