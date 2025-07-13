import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAuthContext from "../../contexts/auth/useAuthContext";
import { jwtDecode } from "jwt-decode";

const CreateTransportCustomer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const http = useAuth();
  const context = useAuthContext();
  const userId = jwtDecode(context.auth).id;
  const [error, setError] = useState("");

  const mutationCreateTransport = useMutation({
    mutationKey: ["CreateTransportCustomer"],
    mutationFn: async (formData) => {
      const response = await http.post(`/transport/create`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;
    },
  });

  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append("type", "demande");
    formData.append("userId", userId);
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("cityDeparture", data.cityDeparture);
    formData.append("cityDestination", data.cityDestination);
    formData.append("date", data.date || "");
    formData.append("time", data.time || "");

    if (data.photoDelivery?.[0]) {
      formData.append("photoTransport", data.photoDelivery[0]);
    }

    mutationCreateTransport.mutate(formData, {
      onError: (err) => {
        const msg = err?.response?.data?.message || "Erreur inconnue";
        setError(msg);
      },
      onSuccess: () => {
        alert("Annonce de covoiturage créée avec succès !");
      },
    });
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center w-screen py-10 px-4 justify-center">
      <h1 className="text-3xl font-bold mb-2">Créer une annonce de covoiturage</h1>

      <div className="w-full max-w-2xl bg-gray-50 p-8 rounded-xl shadow-md">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Type d'annonce</label>
            <select
              className="w-full border border-gray-300 rounded-lg p-3 bg-white"
              {...register("type")}
              disabled
            >
              <option value="demande">Je cherche un trajet</option>
            </select>
          </div>

          <input
            {...register("title", { required: "Le titre est requis" })}
            type="text"
            placeholder="Titre de l'annonce"
            className="w-full border border-gray-300 rounded-lg p-3"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}

          <textarea
            {...register("description", {
              required: "La description est requise",
              minLength: { value: 10, message: "Minimum 10 caractères" },
            })}
            placeholder="Description (ex: ambiance, pause prévue, bagages, etc.)"
            className="w-full border border-gray-300 rounded-lg p-3 h-32 resize-none"
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}

          <div className="flex gap-4">
            <input
              {...register("cityDeparture", { required: "Ville de départ requise" })}
              type="text"
              placeholder="Ville de départ"
              className="w-1/2 border border-gray-300 rounded-lg p-3"
            />
            <input
              {...register("cityDestination", { required: "Ville d’arrivée requise" })}
              type="text"
              placeholder="Ville d’arrivée"
              className="w-1/2 border border-gray-300 rounded-lg p-3"
            />
          </div>

          <div className="flex gap-4">
            <input
              {...register("date", { required: "Date requise" })}
              type="date"
              className="w-1/2 border border-gray-300 rounded-lg p-3"
            />
            <input
              {...register("time")}
              type="time"
              className="w-1/2 border border-gray-300 rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Image du véhicule (optionnel)</label>
            <input
              {...register("photoTransport")}
              type="file"
              accept="image/*"
              className="w-full"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-600 text-white font-semibold py-3 rounded-lg hover:bg-yellow-700 transition duration-300 cursor-pointer"
          >
            Publier l'annonce
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTransportCustomer;
