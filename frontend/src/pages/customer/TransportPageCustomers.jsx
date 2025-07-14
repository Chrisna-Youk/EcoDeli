import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import CustomersHomeCards from "../../components/CustomerComponents/CustomersHomeCards";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";

const TransportPageCustomers = () => {
  const { t } = useTranslation();
  const http = useAuth();

  const [allServices, setAllServices] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const { data: transport, isLoading, error } = useQuery({
    queryKey: ["Transports"],
    queryFn: async () => {
      const response = await http.get(`/transport/read?limit=5&offset=0`);
      const newTransports = response.data.data;
      setAllServices((prev) => [...prev, ...newTransports]);
      if (newTransports.length < 5) setHasMore(false);
      return newTransports;
    },
  });

  if (isLoading) return <p className="text-center mt-10">Chargement...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">Une erreur est survenue</p>;

  return (
    <div className="flex flex-col w-screen mt-10">
      <div className="flex items-center justify-center">
        <div className="flex flex-row mt-2 bg-white rounded-3xl shadow-2xl p-4 gap-4">
          <input
            type="search"
            name="search"
            placeholder="Rechercher une annonce"
            id="search"
            className="min-w-md bg-white rounded-3xl h-13 indent-6 outline-none hover:bg-gray-100 hover:shadow-md duration-300"
          />
          <input
            type="text"
            placeholder="Départ"
            className="bg-white outline-none indent-6 hover:bg-gray-100 hover:shadow-md duration-300 rounded-3xl"
          />
          <input
            type="text"
            placeholder="Destination"
            className="bg-white outline-none indent-6 hover:bg-gray-100 hover:shadow-md duration-300 rounded-3xl"
          />
          <button
            className="ml-4 h-13 w-13 rounded-full flex items-center justify-center outline-none hover:shadow-md duration-300 bg-yellow-500 hover:bg-yellow-600 hover:scale-105"
          >
            <svg
              className="h-7"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <h3 className="mt-12 ml-12 text-lg font-semibold">
        Les offres de transport proposées par nos partenaires
      </h3>

      <div className="flex flex-row flex-wrap gap-5 p-8">
        {allServices
          ?.filter((t) => t.type?.toLowerCase() === "offre")
          .map((transport) => (
            <CustomersHomeCards
              key={transport.id}
              image={`${import.meta.env.VITE_BASE_URL_STATIC}uploads/files/${transport?.photo}`}
              title={transport.title}
              href={`/customer/transport/${transport?.id}`}
              date={new Date(transport.date).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "short",
              })}
              price={`${transport.price} €`}
              rating={5}
            />
          ))}
      </div>
    </div>
  );
};

export default TransportPageCustomers;
