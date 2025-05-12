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
          <a href='' className="text-red-400 hover:text-red-800 cursor-pointer">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                    </svg>
                </a>
        </div>
        </a>

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
          <a href='' className="text-red-400 hover:text-red-800 cursor-pointer">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                    </svg>
                </a>
        </div>
        </a>


        <a href=""><div className="bg-white rounded-xl shadow-md flex overflow-hidden mt-8 hover:bg-zinc-100 hover:shadow-xl">
          <img
            src="https://cdn.vectorstock.com/i/500p/33/47/no-photo-available-icon-default-image-symbol-vector-40343347.jpg"
            alt="Annonce"
            className="w-60 object-cover"
          />
          <div className="p-5 flex flex-col justify-between w-full">
            <div>
              <p className="text-green-600 font-semibold text-xl">1 €</p>
              <h2 className="text-lg font-bold mt-2">Livraison de test</h2>
              <p className="text-sm text-gray-600 mt-3">Paris - Montpellier</p>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Par <span className="font-semibold text-yellow-500">GOAT</span>
              </div>
            </div>
          </div>
          <a href='' className="text-red-400 hover:text-red-800 cursor-pointer">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                    </svg>
                </a>
        </div>
        </a>

      </div>
      
    </div>
  );
};

export default TemplateAd;
