import React from "react";
import axios from "axios";

import { useQuery } from "@tanstack/react-query";

const Login = () => {
  const loginHandler = async (e) => {
    e.preventDefault();

    // Collect data from the form
    const formData = new FormData(e.target);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
      remember: formData.get("remember") === "on", // checkbox handling
    };

    console.log("Sending JSON:", data, typeof data);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/auth/login`,
        data,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("Success:", response.data);
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };
  const { data } = useQuery({
    queryKey: ["data1"],
    queryFn: loginHandler,
  });
  return (
    <div className="bg-white w-screen h-[calc(100vh-80px)] flex flex-col items-center justify-center">
      <div className="p-10 bg-gray-100 rounded-lg shadow-xl mb-10">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Se Connecter
        </h2>

        <form onSubmit={(e) => loginHandler(e)}>
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
            type="submit"
            className="w-full bg-yellow-600 text-white py-2 rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 cursor-pointer"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
