import { useState } from "react";
import LocationAutocompleteInput from "../../../components/DelivrerComponents/LocationAutocompleteInput";
import AddressMapDisplay from "../../../components/AdminComponents/AddressMapDisplay";
import { useMutation } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";

const CheckpointCreate = () => {
  const [selectedLocation, setSelectedLocation] = useState("");

  const http = useAuth();

  const mutationSelectedLocation = useMutation({
    mutationKey: ["SelectedLocation", selectedLocation],
    mutationFn: async (formData) => {
      const response = await http.post(`/checkpoint/create`, formData);
      return response.data.data;
    },
  });

  const handleSelectedLocation = (e) => {
    e.preventDefault();
    console.log(selectedLocation)
    mutationSelectedLocation.mutate(
      { address: selectedLocation.display_name },
      {
        onError: (error) => {
          alert(error.response.data.data.message);
        },
        onSuccess: (data) => {
          alert(data.message);
        },
      }
    );
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center w-screen py-10 px-4 justify-center 2xl:ml-30">
      <div className="p-4 bg-white w-screen mb-8 shadow-md"></div>
      <h1 className="text-3xl font-bold mb-2">Créer un Checkpoint</h1>

      <div className="w-full max-w-2xl bg-gray-50 p-8 rounded-xl shadow-md">
        <form className="space-y-6">
          {/* Input Adresse */}
          <div className="w-full">
            <LocationAutocompleteInput
              placeholder="Adresse du checkpoint"
              onSelect={(location) => {
                setSelectedLocation(location);
              }}
            />
          </div>

          {/* Carte liée à l’adresse sélectionnée */}
          <AddressMapDisplay
            latitude={selectedLocation?.lat}
            longitude={selectedLocation?.lon}
            address={selectedLocation?.display_name}
          />

          {/* Bouton submit */}
          <button
            onClick={(e) => handleSelectedLocation(e)}
            className="w-full bg-yellow-600 text-white font-semibold py-3 rounded-lg hover:bg-yellow-700 transition duration-300 cursor-pointer"
          >
            Créer ce Checkpoint
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckpointCreate;
