import React from 'react';

const TemplateAd = () => {
  return (
    <div className="bg-white w-screen flex flex-col items-center min-h-screen">
      <h1 className="text-3xl font-bold mt-10 mb-6">Mes annonces</h1>

      <div className="w-full max-w-5xl px-4">

        <a href=""><div className="bg-white rounded-xl shadow-md flex overflow-hidden mt-8 hover:bg-zinc-100 hover:shadow-xl">
          <img
            src="https://blog-media.but.fr/wp-content/uploads/2023/06/01-rangement-frigo-1.jpg"
            alt="Annonce"
            className="w-60 object-cover"
          />
          <div className="p-5 flex flex-col justify-between w-full">
            <div>
              <p className="text-green-600 font-semibold text-xl">100 €</p>
              <h2 className="text-lg font-bold mt-2">Livraison de frigo</h2>
              <p className="text-sm text-gray-600 mt-3">Paris - Lyon</p>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Par <span className="font-semibold text-yellow-500">CALO ENTREPRISE</span> {/* Récupérer l'entreprise du livreur pro ou son nom */}
              </div>
            </div>
          </div>
        </div></a>

        <a href=""><div className="bg-white rounded-xl shadow-md flex overflow-hidden mt-8 hover:bg-zinc-100 hover:shadow-xl">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Yamaha_MT-07.jpg/960px-Yamaha_MT-07.jpg"
            alt="Annonce"
            className="w-60 object-cover"
          />
          <div className="p-5 flex flex-col justify-between w-full">
            <div>
              <p className="text-green-600 font-semibold text-xl">5000 €</p>
              <h2 className="text-lg font-bold mt-2">Livraison de moto</h2>
              <p className="text-sm text-gray-600 mt-3">Lille - Montpellier</p>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Par <span className="font-semibold text-yellow-500">GOAT</span>
              </div>
            </div>
          </div>
        </div></a>

      </div>
      
    </div>
  );
};

export default TemplateAd;
