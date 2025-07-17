import { useState, useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const fetchAddress = async (lat, lon) => {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`
  );
  const data = await res.json();
  return data.display_name || "Adresse non trouvée";
};

const DelivrerHistoryTodo = () => {
  const http = useAuth();
  const [addresses, setAddresses] = useState({});

  const { data: deliveries } = useQuery({
    queryKey: ["DelivrerHistoryTodo"],
    queryFn: async () => {
      const response = await http.get(`step/read/provider?limit=5&offset=0`);
      return response.data.data;
    },
  });

  useEffect(() => {
    const loadAddresses = async () => {
      const newAddresses = {};
      for (const delivery of deliveries) {
        const dep = await fetchAddress(
          delivery.latDeparture,
          delivery.lonDeparture
        );
        const dest = await fetchAddress(
          delivery.latDestination,
          delivery.lonDestination
        );
        newAddresses[delivery.id] = {
          departure: dep,
          destination: dest,
        };
      }
      setAddresses(newAddresses);
    };

    if (deliveries?.length > 0) {
      loadAddresses();
    }
  }, [deliveries]);

  const mutationCancelDelivery = useMutation({
    mutationKey: ["DelivrerHistoryTodo"],
    mutationFn: async (uuid) => {
      const response = await http.delete(`/step/cancel/${uuid}`);
      return response.data.data;
    },
  });

  const handleCancelDelivery = (e, uuid) => {
    e.preventDefault();
    mutationCancelDelivery.mutate(uuid, {
      onError: (error) => {
        console.log(error);
        alert("Problème lors de l'annulation");
      },
      onSuccess: (data) => {
        console.log(data);
        alert("Delivery annulé");
      },
    });
  };

  console.log(deliveries);

  return (
    <div className="bg-white pt-0 h-screen 2xl:ml-72 py-10 w-full overflow-x-hidden">
      <div className="p-10 bg-white w-screen mb-8 shadow-md"></div>
      <div className="bg-white p-6 rounded-2xl shadow-md xl:w-[80vw] md:w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Livraisons à couvrir
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm text-gray-600">
                  ID
                </th>
                <th className="px-4 py-2 text-left text-sm text-gray-600 w-64">
                  Adresse de départ
                </th>
                <th className="px-4 py-2 text-left text-sm text-gray-600 w-64">
                  Adresse d'arrivée
                </th>
                <th className="px-4 py-2 text-left text-sm text-gray-600">
                  Date de création
                </th>
                <th className="px-4 py-2 text-left text-sm text-gray-600">
                  Statut
                </th>
                <th className="px-4 py-2 text-left text-sm text-gray-600">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {deliveries?.map((delivery) => (
                <tr key={delivery.id} className="hover:bg-zinc-300">
                  <td className="px-4 py-3 text-sm text-gray-800">
                    {delivery.uuid}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-800 w-64 max-w-[16rem] truncate">
                    {addresses[delivery.id]?.departure || "Chargement..."}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-800 w-64 max-w-[16rem] truncate">
                    {addresses[delivery.id]?.destination || "Chargement..."}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-800">
                    {new Date(delivery.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                        delivery.status === "En attente"
                          ? "bg-orange-100 text-orange-700"
                          : delivery.status === "En cours"
                          ? "bg-blue-100 text-blue-700"
                          : delivery.status === "Livré"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {delivery.status || "Status null"}
                    </span>
                  </td>
                  <td className="px-4 py-3 flex gap-3">
                    <button
                      onClick={(e) => handleCancelDelivery(e, delivery.uuid)}
                      className="text-red-600 hover:underline text-sm cursor-pointer"
                    >
                      Annuler
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DelivrerHistoryTodo;
