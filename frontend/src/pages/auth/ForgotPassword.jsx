import React from "react";

const ForgotPassword = () => {
  return (
    <div className="bg-white w-screen h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="p-6 bg-gray-50 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-xl font-semibold text-center mb-4 text-gray-800">
          Mot de passe oublié
        </h2>

        <form action="#" method="POST">
          <label htmlFor="email" className="block text-sm text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mb-4 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
            placeholder="Votre email"
          />

          <button
            type="submit"
            className="w-full bg-yellow-600 text-white py-2 rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 cursor-pointer"
          >
            Réinitialiser
          </button>

          <div className="mt-4 text-center">
            <a
              href="/login"
              className="text-sm text-yellow-500 hover:text-yellow-700"
            >
              Retour
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
