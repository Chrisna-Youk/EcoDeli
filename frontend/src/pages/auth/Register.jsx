import React from "react";

const Register = () => {
  return (
    <div className="bg-white w-screen h-[calc(100vh-80px)] flex flex-col items-center justify-center">
      <div className="p-10 bg-gray-50 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          S'inscrire
        </h2>

        <form action="#" method="POST">
          <div className="mb-4 flex space-x-4">
            <div className="w-1/2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="Votre email"
              />
            </div>

            <div className="w-1/2">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Nom d'utilisateur
              </label>
              <input
                type="text"
                id="username"
                name="username"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="Votre nom d'utilisateur"
              />
            </div>
          </div>

          <div className="mb-6 flex space-x-4">
            <div className="w-1/2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="Votre mot de passe"
              />
            </div>

            <div className="w-1/2">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirmer le mot de passe
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="Confirmez votre mot de passe"
              />
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                required
                className="h-4 w-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                Accepter les conditions d'utilisation
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-600 text-white py-2 rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 cursor-pointer"
          >
            S'inscrire
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Déjà un compte ?{" "}
            <a href="/login" className="text-yellow-600 hover:text-yellow-800">
              Se connecter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
