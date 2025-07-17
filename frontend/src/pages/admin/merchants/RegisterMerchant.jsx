import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { useMutate } from "../../../hooks/useMutate";
import { useTranslation } from "react-i18next";

import {
  validateEmail,
  validateName,
  validatePassword,
} from "../../../utils/formater";

const RegisterMerchant = () => {
  const [error, setError] = useState("");
  const [firstnameError, setFirstnameError] = useState("");
  const [lastnameError, setLastnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const navigate = useNavigate();
  const { t } = useTranslation();
  const loginMutation = useMutate("/auth/register/merchant");

  const registerHandler = (e) => {
    e.preventDefault();

    setError("");
    setFirstnameError("");
    setLastnameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    if (!validateEmail(e.target.email.value)) {
      setEmailError(t("REGISTER/ERROR/EMAIL"));
      return;
    }

    if (!validateName(e.target.firstname.value)) {
      setFirstnameError(t("REGISTER/ERROR/FIRSTNAME"));
      return;
    }

    if (!validateName(e.target.lastname.value)) {
      setLastnameError(t("REGISTER/ERROR/LASTNAME"));
      return;
    }

    if (!validatePassword(e.target.password.value)) {
      setPasswordError(t("REGISTER/ERROR/PASSWORD"));
      return;
    }

    if (e.target.password.value != e.target.confirmPassword.value) {
      setConfirmPasswordError(t("REGISTER/ERROR/PASSWORD2"));
      return;
    }

    const data = {
      firstName: e.target.firstname.value,
      lastName: e.target.lastname.value,
      email: e.target.email.value,
      password: e.target.password.value,
      role: "merchant",
    };

    const body = JSON.stringify(data);

    loginMutation.mutate(body, {
      onError: () => {
        const message = t("REGISTER/ERROR/GENERAL");
        setError(message);
      },
      onSuccess: () => {
        navigate("/admin");
      },
    });
  };
  return (
    <div className="bg-white w-screen h-[calc(100vh-80px)] flex flex-col items-center justify-center">
      <div className="p-10 bg-gray-50 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Ajouter un nouveau commerçant
        </h2>

        <form onSubmit={(e) => registerHandler(e)}>
          <div className="mb-4 flex space-x-4">
            <div className="w-1/2">
              <label
                htmlFor="firstname"
                className="block text-sm font-medium text-gray-700"
              >
                Entreprise
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="Votre prénom"
              />
              {firstnameError && (
                <div className="mb-4 text-red-600 text-sm font-medium">
                  {firstnameError}
                </div>
              )}
            </div>

            <div className="w-1/2">
              <label
                htmlFor="lastname"
                className="block text-sm font-medium text-gray-700"
              >
                Ville
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="Votre nom"
              />
              {lastnameError && (
                <div className="mb-4 text-red-600 text-sm font-medium">
                  {lastnameError}
                </div>
              )}
            </div>
          </div>
          <div className="mb-4 flex space-x-4">
            <div className="w-full">
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
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="Votre mot de passe"
              />
              {passwordError && (
                <div className="mb-4 text-red-600 text-sm font-medium">
                  {passwordError}
                </div>
              )}
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
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="Confirmez votre mot de passe"
              />
              {confirmPasswordError && (
                <div className="mb-4 text-red-600 text-sm font-medium">
                  {confirmPasswordError}
                </div>
              )}
            </div>
          </div>
          {error && (
            <div className="mb-4 text-red-600 text-sm font-medium">{error}</div>
          )}

          <button
            type="submit"
            className="w-full bg-yellow-600 text-white py-2 rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 cursor-pointer"
          >
            Ajouter
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterMerchant;
