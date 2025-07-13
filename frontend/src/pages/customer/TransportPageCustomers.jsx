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

      <div className="flex flex-row items-center justify-center mt-12 mb-20 gap-2">
        <svg
          className="h-4"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <path d="M480,1117 C472.268,1117 466,1110.73 466,1103 C466,1095.27 472.268,1089 480,1089 C487.732,1089 494,1095.27 494,1103 C494,1110.73 487.732,1117 480,1117 Z M480,1087 C471.163,1087 464,1094.16 464,1103 C464,1111.84 471.163,1119 480,1119 C488.837,1119 496,1111.84 496,1103 C496,1094.16 488.837,1087 480,1087 Z M486,1102 L481,1102 L481,1097 C481,1096.45 480.553,1096 480,1096 C479.447,1096 479,1096.45 479,1097 L479,1102 L474,1102 C473.447,1102 473,1102.45 473,1103 C473,1103.55 473.447,1104 474,1104 L479,1104 L479,1109 C479,1109.55 479.447,1110 480,1110 C480.553,1110 481,1109.55 481,1109 L481,1104 L486,1104 C486.553,1104 487,1103.55 487,1103 C487,1102.45 486.553,1102 486,1102 Z" transform="translate(-464 -1087)" />
        </svg>
        <a
          href="/customer/transport"
          className="text-gray-500 hover:text-black focus:font-semibold"
        >
          <h3>Voir toutes les annonces</h3>
        </a>
      </div>
    </div>
  );
};

export default TransportPageCustomers;
