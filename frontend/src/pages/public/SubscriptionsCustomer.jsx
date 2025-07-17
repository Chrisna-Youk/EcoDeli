import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom'; // ou 'next/link' si tu es sur Next.js


const SubscriptionPlans = () => {

  const [isConnected, setIsConnected] = useState (false)
  useEffect(() => {
    const connected = localStorage.getItem("connected") === "true";
    setIsConnected(connected);
  }, []);

  return (
    <div className="bg-white min-h-screen py-12 px-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Mon abonnement</h1>

      <div className="bg-gray-100 w-full max-w-2xl p-6 rounded-2xl shadow-lg mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Offre actuelle : <span className="text-yellow-600">Free</span></h2>
        <p className="text-gray-700 mb-6">Vous êtes actuellement sur l’offre gratuite. Voici ce que vous offre cette formule :</p>

        <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
          <li>Pas d’assurance sur les colis endommagés ou perdus</li>
          <li>Pas de réduction sur l’envoi de colis</li>
          <li>Envoi prioritaire disponible avec un supplément de 15%</li>
          <li>Aucune réduction permanente</li>
        </ul>

        <div className="mt-6">
          <p className="text-sm text-gray-600 italic">Vous pouvez changer d'abonnement à tout moment.</p>
        </div>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="bg-white border rounded-xl p-6 shadow-md flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Passer à <span className="text-yellow-600">Starter</span></h3>
            <p className="text-gray-700 mb-4">9,90€/mois</p>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li>• Assurance jusqu’à 115€/envoi</li>
              <li>• 5% de réduction sur les envois</li>
              <li>• Envoi prioritaire à +5%</li>
              <li>• 5% de réduction sur les petits colis</li>
            </ul>
          </div>
          <Link to={isConnected ? "/stripe" : "/register"} className="mt-auto block w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg transition text-center cursor-pointer">
              Passer à Starter
          </Link>

        </div>

        <div className="bg-yellow-50 border-2 border-yellow-500 rounded-xl p-6 shadow-md flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Passer à <span className="text-yellow-600">Premium</span></h3>
            <p className="text-gray-700 mb-4">19,99€/mois</p>
            <ul className="text-sm text-gray-800 space-y-1 mb-4">
              <li>• Assurance jusqu’à 3000€ (75€ sup. au-delà)</li>
              <li>• 9% de réduction sur les envois</li>
              <li>• Premier envoi offert (si &lt; 150€)</li>
              <li>• 3 envois prioritaires gratuits par mois</li>
              <li>• 5% de réduction sur tous les colis</li>
            </ul>
          </div>
          <Link to="/test" className="mt-auto block w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg transition text-center cursor-pointer">
            Passer à Premium
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
