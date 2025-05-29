import React from 'react';

const DeliveryAdCard = ({
  type,
  title,
  description,
  price,
  date,
  departure,
  arrival,
  weight,
  dimensions,
  image,
}) => {
  return (
    <div className="w-full max-w-3xl bg-gray-50 p-8 rounded-xl shadow-md flex flex-col">
      <span
        className={`text-sm font-semibold px-3 py-1 rounded-full self-start ${
          type === 'offre' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
        }`}
      >
        {type === 'offre' ? 'Offre de livraison' : 'Demande de livraison'}
      </span>

      <h1 className="text-3xl font-bold mt-4 mb-2">{title}</h1>
      <p className="text-gray-500 text-sm mb-6">
        Publiée pour le {new Date(date).toLocaleDateString()}
      </p>

      {image ? (
        <img
          src={image}
          alt="Colis"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
      ) : (
        <div className="w-full h-64 bg-gray-200 rounded-lg mb-6 flex items-center justify-center text-gray-500">
          Pas de photo
        </div>
      )}

      <p className="text-gray-700 text-lg mb-6">{description}</p>

      <div className="flex flex-col gap-4 text-gray-700 text-sm mb-6">
        <div className="flex justify-between">
          <span><strong>Ville de départ :</strong> {departure}</span>
          <span><strong>Ville d’arrivée :</strong> {arrival}</span>
        </div>
        <div className="flex justify-between">
          <span><strong>Poids du colis :</strong> {weight} kg</span>
          <span><strong>Dimensions :</strong> {dimensions.length} x {dimensions.width} x {dimensions.height} cm</span>
        </div>
        <div className="flex justify-between">
          <span><strong>Date de livraison :</strong> {new Date(date).toLocaleDateString()}</span>
          <span><strong>Prix proposé :</strong> {price} €</span>
        </div>
      </div>

      <button className="w-full bg-yellow-600 text-white font-semibold py-3 rounded-lg hover:bg-yellow-700 transition duration-300">
        Contacter le {type === 'offre' ? 'proposeur' : 'demandeur'}
      </button>
    </div>
  );
};

export default DeliveryAdCard;
