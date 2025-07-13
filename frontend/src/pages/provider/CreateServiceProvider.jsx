import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAuthContext from "../../contexts/auth/useAuthContext";
import { jwtDecode } from "jwt-decode";

const CreateServiceProvider = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const http = useAuth();
  const context = useAuthContext();
  const userId = jwtDecode(context.auth).id;
  const [error, setError] = useState("");

  const { data: categories } = useQuery({
    queryKey: ["CategoriesAvailable"],
    queryFn: async () => {
      const response = await http.get(`/category/read/`);
      return response.data.data;
    },
  });

  const mutationCreateService = useMutation({
    mutationKey: ["CreateServiceProvider"],
    mutationFn: async (formData) => {
      const response = await http.post(`/service/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
  });

  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("city", data.city);
    formData.append("postalCode", data.postalCode);
    formData.append("categoryId", data.categoryId);
    formData.append("userId", userId);

    formData.append("photoService", data.photoService[0]);

    mutationCreateService.mutate(formData, {
      onError: (error) => {
        const message = error?.response?.data?.message;
        setError(message);
      },
      onSuccess: () => {
        navigate(`/provider/CreateAnnouncement`);
      },
    });
  };
  return (
    <div className="bg-white min-h-screen flex flex-col items-center w-screen py-10 px-4 justify-center">
      <h1 className="text-3xl font-bold mb-2">Créer une annonce de service</h1>

      <div className="w-full max-w-2xl bg-gray-50 p-8 rounded-xl shadow-md">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {/* Titre */}
          <input
            {...register("title", {
              required: "Le titre est requis",
              minLength: {
                value: 5,
                message: "Le titre doit contenir au moins 5 caractères",
              },
            })}
            type="text"
            placeholder="Titre de l'annonce (ex: Coiffure à domicile, Aide aux devoirs...)"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
          {error != "" && <p className="text-red-500 text-sm mt-1">{error}</p>}
          {/* Description */}
          <textarea
            {...register("description", {
              required: "La description est requise",
              minLength: {
                value: 10,
                message: "La description doit contenir au moins 10 caractères",
              },
            })}
            placeholder="Description du service (compétences, expérience, horaires, matériel fourni...)"
            className="w-full border border-gray-300 rounded-lg p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
          {/* Prix */}
          <input
            {...register("price", {
              required: "Le tarif est requis",
              valueAsNumber: true,
              min: {
                value: 1,
                message: "Le tarif doit être au moins de 1€",
              },
            })}
            type="number"
            placeholder="Tarif (€) / heure ou forfait"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          {errors.price && (
            <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
          )}

          {/* Adresse */}
          <div className="flex gap-4">
            <input
              {...register("city", {
                required: "La ville est requise",
              })}
              type="text"
              placeholder="Ville"
              className="w-1/2 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            {errors.city && (
              <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
            )}
            <input
              {...register("postalCode", {
                required: "Le code postale est requis",
              })}
              type="text"
              placeholder="Code postal"
              className="w-1/2 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            {errors.postalCode && (
              <p className="text-red-500 text-sm mt-1">
                {errors.postalCode.message}
              </p>
            )}
          </div>
          {/* Type de service */}
          <select
            {...register("categoryId", {
              required: "Le type de service est requis",
            })}
            className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            {categories?.map((category, index) => (
              <option key={index} value={category.id}>
                {category.name}
              </option>
            ))}
            <option value="">Type de service</option>
          </select>
          {errors.categorie && (
            <p className="text-red-500 text-sm mt-1">
              {errors.categorie.message}
            </p>
          )}
          {/* Photo */}
          <div>
            <label className="block mb-2 font-semibold">
              Photo (optionnel)
            </label>
            <input
              {...register("photoService")}
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

export default CreateServiceProvider;
