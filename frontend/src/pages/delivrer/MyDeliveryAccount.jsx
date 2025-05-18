import React from 'react';

const MyDeliverAccount = () => {
  return (
    <div className="bg-white pt-0 min-h-screen flex flex-col items-center w-screen py-10 px-4 justify-center">
      <div className='p-10 bg-white w-screen mb-8 shadow-md'></div>
      <h1 className="text-3xl font-bold mb-2">Mon compte - Livreur</h1>

      <div className="w-full max-w-3xl bg-gray-50 p-8 rounded-xl shadow-md space-y-10">
        {/* Infos perso */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Informations personnelles</h2>
          <form className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Nom"
                className="w-1/2 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="text"
                placeholder="Prénom"
                className="w-1/2 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <input
              type="date"
              placeholder="Date de naissance"
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-500 focus:text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />

            <input
              type="text"
              placeholder="Adresse"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />

            <input
              type="email"
              placeholder="Adresse email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />

            <input
              type="tel"
              placeholder="Numéro de téléphone"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </form>
        </section>

        {/* Pièces justificatives */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Pièces justificatives</h2>
          <form className="space-y-4">
            <input
                type="text"
                placeholder="Numéro SIRET"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />

            <div className="space-y-1">
                <p className="text-sm text-gray-600">Pièce d'identité (format image ou PDF)</p>
                <div className="flex items-center gap-3 bg-white border border-gray-300 rounded-lg p-3 cursor-pointer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-yellow-600"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                    />
                </svg>
                <input
                    type="file"
                    accept="image/*,.pdf"
                    className="w-full text-gray-600"
                />
                </div>
            </div>

            <div className="space-y-1">
                <p className="text-sm text-gray-600">Permis de conduire (format image ou PDF)</p>
                <div className="flex items-center gap-3 bg-white border border-gray-300 rounded-lg p-3 cursor-pointer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-yellow-600"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                    />
                </svg>
                <input
                    type="file"
                    accept="image/*,.pdf"
                    className="w-full text-gray-600"
                />
                </div>
            </div>

            <div className="space-y-1">
                <p className="text-sm text-gray-600">Photo de profil (format image uniquement)</p>
                <div className="flex items-center gap-3 bg-white border border-gray-300 rounded-lg p-3 cursor-pointer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-yellow-600"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                    />
                </svg>
                <input
                    type="file"
                    accept="image/*"
                    className="w-full text-gray-600"
                />
                </div>
            </div>
            </form>

        </section>

        {/* Pièces affichées avec possibilité de suppression*/}
        <section>
            <h2 className="text-xl font-semibold mb-4">Vos documents</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm flex justify-between items-center">
                <div>
                    <p className="font-medium">Pièce d'identité</p>
                    <p className="text-sm text-gray-500 mt-1">Aperçu indisponible</p>
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

                <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm flex justify-between items-center">
                <div>
                    <p className="font-medium">Permis de conduire</p>
                    <p className="text-sm text-gray-500 mt-1">Aperçu indisponible</p>
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

                <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm flex justify-between items-center">
                <div>
                    <p className="font-medium">Photo de profil</p>
                    <p className="text-sm text-gray-500 mt-1">Aperçu indisponible</p>
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

            </div>
            </section>


        <button
          type="submit"
          className="w-full bg-yellow-600 text-white font-semibold py-3 rounded-lg hover:bg-yellow-700 transition duration-300 cursor-pointer"
        >
          Enregistrer les modifications
        </button>
      </div>
    </div>
  );
};

export default MyDeliverAccount;