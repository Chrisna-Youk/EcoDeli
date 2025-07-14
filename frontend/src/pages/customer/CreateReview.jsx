import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const CreateReview = () => {
  const { userId } = useParams();
  const http = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState("");

  const mutationCreateReview = useMutation({
    mutationKey: ["createReview"],
    mutationFn: async (formData) => {
      const response = await http.post("/review/create", formData);
      return response.data;
    },
  });

  const onSubmit = (data) => {
    setError("");

    const formData = new FormData();
    formData.append("userId", userId);
    formData.append("grade", data.grade);

    mutationCreateReview.mutate(formData, {
      onError: (err) => {
        const message = err?.response?.data?.message || "Erreur inconnue";
        setError(message);
      },
      onSuccess: () => {
        alert("Avis créé avec succès !");
      },
    });
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">Créer un avis</h1>
      <form
        className="w-full max-w-sm bg-gray-50 p-6 rounded-lg shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="block mb-2 font-semibold">
          Note :
          <input
            {...register("grade", {
              required: "La note est requise",
            })}
            type="number"
            placeholder="1 - 5"
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
          />
        </label>
        {errors.grade && (
          <p className="text-red-500 text-sm mb-4">{errors.grade.message}</p>
        )}

        {error && <p className="text-red-600 mb-4">{error}</p>}

        <button
          type="submit"
          className="w-full bg-yellow-600 text-white font-semibold py-3 rounded-lg hover:bg-yellow-700 disabled:opacity-50"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default CreateReview;
