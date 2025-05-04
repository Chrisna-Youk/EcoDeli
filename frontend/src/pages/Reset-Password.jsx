import React from 'react'

const ResetPassword = () => {
  return (
    <div className="bg-white w-screen h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="p-6 bg-gray-50 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-xl font-semibold text-center mb-4 text-gray-800">Nouveau mot de passe</h2>

        <form action="#" method="POST">
          <label for="password" className="block text-sm text-gray-700 mb-1">Nouveau mot de passe</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="mb-4 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
            placeholder="Entrez un nouveau mot de passe"
          />

          <label for="confirmPassword" className="block text-sm text-gray-700 mb-1">Confirmer le mot de passe</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
            className="mb-4 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
            placeholder="Confirmez le mot de passe"
          />

          <button
            type="submit"
            className="w-full bg-yellow-600 text-white py-2 rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 cursor-pointer"
          >
            Enregistrer le nouveau mot de passe
          </button>

          <div className="mt-4 text-center">
            <a href="/login" className="text-sm text-yellow-500 hover:text-yellow-700">Retour à la connexion</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword