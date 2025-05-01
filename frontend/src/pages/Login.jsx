import React from 'react'

const Login = () => {
  return (
    <div className='bg-white w-screen h-[calc(100vh-80px)] flex flex-col items-center justify-center'>
      <div className='p-10 bg-gray-100 rounded-lg shadow-xl mb-10'>
        <h2 class="text-2xl font-bold text-center mb-6 text-gray-800">Se Connecter</h2>

        <form action="#" method="POST"/>
            <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="Votre email"/>
            </div>

            <div class="mb-6">
                <label for="password" class="block text-sm font-medium text-gray-700">Mot de passe</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="Votre mot de passe"/>
            </div>

            <div class="flex items-center justify-between mb-6">
                <div class="flex items-center mr-2">
                    <input 
                      type="checkbox" 
                      id="remember" 
                      name="remember" 
                      class="h-4 w-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"/>
                    <label for="remember" class="ml-2 text-sm text-gray-700">Se souvenir de moi</label>
                </div>
                <a href="/forgot-password" class="text-sm text-yellow-500 hover:text-yellow-700 ml-2">Mot de passe oublié ?</a>
            </div>

            <button type="submit" class="w-full bg-yellow-600 text-white py-2 rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 cursor-pointer">
                Se connecter
            </button>

      </div>
    </div>
  )
}

export default Login