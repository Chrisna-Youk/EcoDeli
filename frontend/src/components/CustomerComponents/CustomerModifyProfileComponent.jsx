import React from 'react';

const CustomerModifyProfileComponent = ({
  avatarUrl,
  firstname,
  lastname,
  onFirstnameChange,
  onLastnameChange,
  onSave,
  onLogout,
  deliveryLink,
  merchantLink,
  providerLink,
}) => {
  return (
    <div className="bg-white min-h-screen py-12 px-6 flex flex-col items-center">
      <div className="w-full max-w-2xl space-y-10">
        <h1 className="text-3xl font-bold text-gray-900">Profil</h1>

        <section className="flex items-center gap-6">
          <div className="relative">
            <img
              src={avatarUrl}
              alt="Avatar utilisateur"
              className="w-30 h-30 rounded-full object-cover shadow"
            />
            <a
              type="button"
              aria-label="Modifier l'avatar"
              className="absolute bottom-0 right-0 bg-white border border-gray-300 rounded-full p-1 hover:bg-gray-100 transition cursor-pointer hover:scale-105"
            >
              ✏️
            </a>
          </div>

          <div className="flex-1 space-y-4">
            <div>
              <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">
                Prénom *
              </label>
              <input
                id="firstname"
                type="text"
                value={firstname}
                onChange={onFirstnameChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Entrez votre prénom"
              />
            </div>

            <div>
              <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">
                Nom *
              </label>
              <input
                id="lastname"
                type="text"
                value={lastname}
                onChange={onLastnameChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Entrez votre nom"
              />
            </div>
          </div>
        </section>

        <button
          onClick={onSave}
          className="w-full sm:w-auto bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 px-6 rounded-lg transition cursor-pointer"
        >
          Enregistrer les modifications
        </button>

        <section className="border-t border-gray-200 pt-6 space-y-4 text-gray-800">
          <div className="flex justify-between items-center">
            <span className="font-medium">Espace Livreur</span>
            <a href='/customer/profile/request/delivrer' className="text-yellow-600 hover:underline text-sm font-normal">
              Devenir Livreur
            </a>
          </div>

          <div className="flex justify-between items-center">
            <span className="font-medium">Espace Prestataire</span>
            <a href='/customer/profile/request/provider' className="text-yellow-600 hover:underline text-sm font-normal">
              Devenir Prestataire
            </a>
          </div>
        </section>

        <div className="pt-4">
          <button
            onClick={onLogout}
            className="w-full sm:w-auto border rounded-md py-2 px-4 text-white bg-red-600 hover:bg-red-400 transition cursor-pointer"
          >
            Me déconnecter
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerModifyProfileComponent;
