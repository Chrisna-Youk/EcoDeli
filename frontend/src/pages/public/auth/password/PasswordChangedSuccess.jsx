import React from 'react'

const PasswordChangedSuccess = () => {
  return (
    <div className="bg-white w-screen h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="p-6 bg-gray-50 rounded-lg shadow-md w-full max-w-sm text-center">
        <h2 className="text-xl font-semibold mb-4 text-green-600">Mot de passe modifié !</h2>
        <p className="text-gray-700 mb-6">
          Votre mot de passe a été mis à jour avec succès. Vous pouvez maintenant vous connecter avec vos nouvelles informations.
        </p>

        <a
          href="/login"
          className="inline-block bg-yellow-600 text-white px-6 py-2 rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          Se connecter
        </a>
      </div>
    </div>
  )
}

export default PasswordChangedSuccess
