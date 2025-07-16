import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import useAuthContext from "../../contexts/auth/useAuthContext";
import { jwtDecode } from "jwt-decode";

const CreateDeliveryCustomer = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const http = useAuth();
  const context = useAuthContext();
  const userId = jwtDecode(context.auth).id;
  const [error, setError] = useState("");

  // const mutationCreateDelivery = useMutation({
  //   mutationKey: ["CreateDeliveryCustomer"],
  //   mutationFn: async (formData) => {
  //     const response = await http.post(`/announcement/create`, formData, {
  //       headers: { "Content-Type": "multipart/form-data" },
  //     });
  //     return response.data;
  //   },
  // });

  const mutationCreateDelivery = useMutation({
    mutationKey: ["CreateDeliveryCustomer"],
    mutationFn: async (formData) => {
      const response = await http.post(`/payement/create`, formData, {
        headers: { "Content-Type": "application/json" },
      });
      return response.data.data;
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

    formData.append(
      "cityDeparture",
      inputAddressDeparture.address.city ||
        inputAddressDeparture.address.town ||
        inputAddressDeparture.address.region
    );
    formData.append(
      "cityDestination",
      inputAddressDestination.address.city ||
        inputAddressDestination.address.town ||
        inputAddressDestination.address.region
    );

    formData.append("latDeparture", inputAddressDeparture.lat);
    formData.append("lonDeparture", inputAddressDeparture.lon);

    formData.append("latDestination", inputAddressDestination.lat);
    formData.append("lonDestination", inputAddressDestination.lon);


    // if (data.photoDelivery?.[0]) {
    //   formData.append("photoDelivery", data.photoDelivery[0]);
    // }

    mutationCreateDelivery.mutate(formData, {
      onError: (err) => {
        const msg = err?.response?.data?.message || "Erreur inconnue";
        setError(msg);
      },
      onSuccess: (data) => {
        // console.log(data)
        window.location.href = data.url
      },
    });

    // mutationCreateDelivery.mutate(formData, {
    //   onError: (err) => {
    //     const msg = err?.response?.data?.message || "Erreur inconnue";
    //     setError(msg);
    //   },
    //   onSuccess: () => {
    //     alert("Annonce de livraison créée avec succès !");
    //   },
    // });
  };

  const [inputAddressDeparture, setInputAddressDeparture] = useState("");
  const [inputAddressDestination, setInputAddressDestination] = useState("");

  const [suggestionsAddressDeparture, setSuggestionsAddressDeparture] =
    useState([]);
  const [suggestionsAddressDestination, setSuggestionsAddressDestination] =
    useState([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (inputAddressDeparture.length > 2) {
        fetch(
          `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&q=${inputAddressDeparture}`
        )
          .then((res) => res.json())
          .then((data) => {
            setSuggestionsAddressDeparture(data);
          });
      } else {
        setSuggestionsAddressDeparture([]);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [inputAddressDeparture]);

  const handleAddressDeparture = (suggestion) => {
    setInputAddressDeparture(suggestion);
    setSuggestionsAddressDeparture([]);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (inputAddressDestination.length > 2) {
        fetch(
          `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&q=${inputAddressDestination}`
        )
          .then((res) => res.json())
          .then((data) => {
            setSuggestionsAddressDestination(data);
          });
      } else {
        setSuggestionsAddressDestination([]);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [inputAddressDestination]);

  const handleAddressDestination = (suggestion) => {
    setInputAddressDestination(suggestion);
    setSuggestionsAddressDestination([]);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center w-screen py-10 px-4 justify-center">
      <h1 className="text-3xl font-bold mb-6">
        Créer une annonce de livraison
      </h1>

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
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
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
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}

          {/* Date */}
          <input
            {...register("date", { required: "La date est requise" })}
            type="date"
            className="w-full border border-gray-300 rounded-lg p-3"
          />
          {errors.date && (
            <p className="text-red-500 text-sm">{errors.date.message}</p>
          )}

          {/* Ville de départ */}
          <div className="relative w-full">
            <input
              {...register("cityDeparture", {
                required: "Ville de départ requise",
              })}
              type="text"
              placeholder="Ville de départ"
              value={inputAddressDeparture.display_name}
              onChange={(e) => setInputAddressDeparture(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            {suggestionsAddressDeparture.length > 0 && (
              <ul className="absolute z-10 bg-white border border-gray-200 rounded-lg mt-1 w-full max-h-60 overflow-auto shadow-md">
                {suggestionsAddressDeparture.map((sug) => (
                  <li
                    key={sug.place_id}
                    onClick={() => handleAddressDeparture(sug)}
                    className="p-2 cursor-pointer hover:bg-gray-100"
                  >
                    {sug.display_name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Ville de destination */}
          <div className="relative w-full">
            <input
              {...register("cityDestination", {
                required: "Ville de départ requise",
              })}
              type="text"
              placeholder="Ville d'arrivée"
              value={inputAddressDestination.display_name}
              onChange={(e) => setInputAddressDestination(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            {suggestionsAddressDestination.length > 0 && (
              <ul className="absolute z-10 bg-white border border-gray-200 rounded-lg mt-1 w-full max-h-60 overflow-auto shadow-md">
                {suggestionsAddressDestination.map((sug) => (
                  <li
                    key={sug.place_id}
                    onClick={() => handleAddressDestination(sug)}
                    className="p-2 cursor-pointer hover:bg-gray-100"
                  >
                    {sug.display_name}
                  </li>
                ))}
              </ul>
            )}
          </div>

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

          {/* Photo
          <div>
            <label className="block mb-2 font-semibold">
              Photo (optionnel)
            </label>
            <input
              {...register("photoDelivery")}
              type="file"
              accept="image/*"
              className="w-full"
            />
          </div> */}

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

export default CreateDeliveryCustomer;
