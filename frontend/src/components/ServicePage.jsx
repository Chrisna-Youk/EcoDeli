import React from 'react';

const ServiceAdCard = ({
  type,
  title,
  description,
  price,
  date,
  city,
  postalCode,
  serviceType,
  image,
}) => {
  return (
    <div className="w-full max-w-3xl bg-gray-50 p-8 rounded-xl shadow-md flex flex-col">
      <span
        className={`text-sm font-semibold px-3 py-1 rounded-full self-start ${
          type === 'offre' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
        }`}
      >
        {type === 'offre' ? 'Offre de service' : 'Demande de service'}
      </span>

      <h1 className="text-3xl font-bold mt-4 mb-2">{title}</h1>
      <p className="text-gray-500 text-sm mb-6">
        {type === 'offre' ? 'Disponible le' : 'Souhaité le'} {new Date(date).toLocaleDateString()}
      </p>

      {image ? (
        <img
          src={image}
          alt="Illustration service"
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
          <span><strong>Localisation :</strong> {city} ({postalCode})</span>
          <span><strong>Type de service :</strong> {serviceType}</span>
        </div>
        <div className="flex justify-between">
          <span><strong>Date :</strong> {new Date(date).toLocaleDateString()}</span>
          <span><strong>Tarif :</strong> {price} €</span>
        </div>
      </div>

      <button className="w-full bg-yellow-600 text-white font-semibold py-3 rounded-lg hover:bg-yellow-700 transition duration-300">
        Contacter le {type === 'offre' ? 'prestataire' : 'demandeur'}
      </button>
    </div>
  );
};

export default ServiceAdCard;
