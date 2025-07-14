import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import useAuthContext from "../../contexts/auth/useAuthContext"
import { jwtDecode } from "jwt-decode";

const CreateDeliveryPageMerchant = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const http = useAuth();
  const context = useAuthContext();
  const userId = jwtDecode(context.auth).id;
  const [error, setError] = useState("");

  const mutationCreateDelivery = useMutation({
    mutationKey: ["CreateDeliveryPageMerchant"],
    mutationFn: async (formData) => {
      const response = await http.post(`/announcement/create`, formData, {
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
    formData.append("price", data.price || "");
    formData.append("weight", data.weight || "");
    formData.append("length", data.length || "");
    formData.append("width", data.width || "");
    formData.append("depth", data.depth || "");
    formData.append("date", data.date);

    formData.append("cityDeparture", data.cityDeparture);
    formData.append("addressDeparture", data.addressDeparture || "");
    formData.append("preciseAddressDeparture", data.preciseAddressDeparture || "");

    formData.append("cityDestination", data.cityDestination);
    formData.append("addressDestination", data.addressDestination || "");
    formData.append("preciseAddressDestination", data.preciseAddressDestination || "");

    if (data.photoDelivery?.[0]) {
      formData.append("photoDelivery", data.photoDelivery[0]);
    }

    mutationCreateDelivery.mutate(formData, {
      onError: (err) => {
        const msg = err?.response?.data?.message || "Erreur inconnue";
        setError(msg);
      },
      onSuccess: () => {
        alert("Annonce de livraison créée avec succès !");
      },
    });
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center w-screen py-10 px-4 justify-center">
      <h1 className="text-3xl font-bold mb-6">Créer une annonce de livraison</h1>

      <div className="w-full max-w-2xl bg-gray-50 p-8 rounded-xl shadow-md">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {/* Titre */}
          <input
            {...register("title", {
              required: "Le titre est requis",
              minLength: { value: 5, message: "Minimum 5 caractères" },
            })}
            type="text"
            placeholder="Titre de l'annonce"
            className="w-full border border-gray-300 rounded-lg p-3"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Description */}
          <textarea
            {...register("description", {
              required: "La description est requise",
              minLength: { value: 10, message: "Minimum 10 caractères" },
            })}
            placeholder="Description"
            className="w-full border border-gray-300 rounded-lg p-3 h-28 resize-none"
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}

          {/* Date */}
          <input
            {...register("date", { required: "La date est requise" })}
            type="date"
            className="w-full border border-gray-300 rounded-lg p-3"
          />
          {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}

          {/* Ville de départ */}
          <input
            {...register("cityDeparture", { required: "Ville de départ requise" })}
            type="text"
            placeholder="Ville de départ"
            className="w-full border border-gray-300 rounded-lg p-3"
          />
          <input
            {...register("preciseAddressDeparture")}
            type="text"
            placeholder="Adresse précise de départ"
            className="w-full border border-gray-300 rounded-lg p-3"
          />

          {/* Ville de destination */}
          <input
            {...register("cityDestination", { required: "Ville d’arrivée requise" })}
            type="text"
            placeholder="Ville d’arrivée"
            className="w-full border border-gray-300 rounded-lg p-3"
          />
          <input
            {...register("preciseAddressDestination")}
            type="text"
            placeholder="Adresse précise d’arrivée"
            className="w-full border border-gray-300 rounded-lg p-3"
          />

          {/* Poids */}
          <input
            {...register("weight")}
            type="number"
            placeholder="Poids (kg)"
            className="w-full border border-gray-300 rounded-lg p-3"
          />

          {/* Dimensions */}
          <div className="flex gap-4">
            <input
              {...register("length")}
              type="number"
              placeholder="Longueur (cm)"
              className="w-1/3 border border-gray-300 rounded-lg p-3"
            />
            <input
              {...register("width")}
              type="number"
              placeholder="Largeur (cm)"
              className="w-1/3 border border-gray-300 rounded-lg p-3"
            />
            <input
              {...register("depth")}
              type="number"
              placeholder="Hauteur (cm)"
              className="w-1/3 border border-gray-300 rounded-lg p-3"
            />
          </div>

          {/* Photo */}
          <div>
            <label className="block mb-2 font-semibold">Photo (optionnel)</label>
            <input
              {...register("photoDelivery")}
              type="file"
              accept="image/*"
              className="w-full"
            />
          </div>

          {/* Bouton */}
          <button
            type="submit"
            className="w-full bg-yellow-600 text-white font-semibold py-3 rounded-lg hover:bg-yellow-700"
          >
            Publier l'annonce
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateDeliveryPageMerchant;
