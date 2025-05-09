import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useMutate } from "../../hooks/useMutate";
import { validateEmail } from "../../utils/formater";
import { useTranslation } from "react-i18next";

// Au fait c'est une 2fa donc faut rediriger vers un

// endpoint : /api/v1/auth/login
// body : email, password

const Login = () => {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { t } = useTranslation();
  const loginMutation = useMutate("/auth/login");

  const loginHandler = (e) => {
    e.preventDefault();

    setError("");
    setEmailError("");
    setPasswordError("");

    if (!validateEmail(e.target.email.value)) {
      setEmailError(t("LOGIN/ERROR/EMAIL"));
      return;
    }

    if (!e.target.password.value) {
      setPasswordError(t("LOGIN/ERROR/PASSWORD"));
      return;
    }

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    const body = JSON.stringify(data);

    loginMutation.mutate(body, {
      onError: (error) => {
        const message = error?.response?.data?.message;
        setError(message);
      },
      onSuccess: (data) => {
        navigate(`/access/${String(data?.verifyToken)}`);
      },
    });
  };
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
            {emailError && (
              <div className="mb-4 text-red-600 text-sm font-medium">
                {emailError}
              </div>
            )}
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
            {passwordError && (
              <div className="mb-4 text-red-600 text-sm font-medium">
                {passwordError}
              </div>
            )}
          </div>
          {error && (
            <div className="mb-4 text-red-600 text-sm font-medium">{error}</div>
          )}

          <div className="flex items-center justify-between mb-6">
            {/* <div className="flex items-center mr-2">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="h-4 w-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                Se souvenir de moi
              </label>
            </div> */}
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
            disabled={loginMutation.isPending}
          >
            {loginMutation.isPending ? "Connexion en cours..." : "Se connecter"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
