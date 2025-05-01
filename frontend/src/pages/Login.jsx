import React from "react";

const Login = () => {
  const handleLogin = (e) => {
    e.prevenDefault();
    console.log(e);
  };
  return (
    <div className="bg-white w-screen h-[calc(100vh-80px)] flex flex-col items-center justify-center">
      <div className="p-10 bg-gray-100 rounded-lg shadow-xl mb-10">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Se Connecter
        </h2>

        <form action="#" method="POST" />
        <div className="mb-4">
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

        <div className="mb-6">
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

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center mr-2">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="h-4 w-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
              Se souvenir de moi
            </label>
          </div>
          <a
            href="/forgot-password"
            className="text-sm text-yellow-500 hover:text-yellow-700 ml-2"
          >
            Mot de passe oublié ?
          </a>
        </div>

        <button
          onSubmit={(e) => handleLogin(e)}
          type="submit"
          className="w-full bg-yellow-600 text-white py-2 rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 cursor-pointer"
        >
          Se connecter
        </button>
        <form action="#" method="POST" />
      </div>
    </div>
  );
};

export default Login;
