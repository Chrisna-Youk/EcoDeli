import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import CustomersHomeCards from "../../components/CustomerComponents/CustomersHomeCards";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";

const CustomersDemands = () => {
  const { t } = useTranslation();

  const http = useAuth();

  const [offset, setOffset] = useState(0);
  const [allServices, setAllServices] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const { data: categories } = useQuery({
    queryKey: ["CategoriesAvailable"],
    queryFn: async () => {
      const response = await http.get(`/category/read/`);
      return response.data.data;
    },
  });

  const { data: services } = useQuery({
    queryKey: ["Services", offset],
    queryFn: async () => {
      const response = await http.get(
        `/service/read?limit=${5}&offset=${offset}`
      );
      const newServices = response.data.data;
      setAllServices((prev) => [...prev, ...newServices]);
      if (newServices.length < 5) {
        setHasMore(false);
      }
      return response.data.data;
    },
  });

  return (
    <div className="flex flex-col w-screen mt-10 ml-120">
      
      <h3 className="mt-12 ml-12 text-lg font-semibold">
        Les demandes de nos clients
      </h3>

      <div className="flex flex-row flex-wrap gap-5 p-8">
        <div className="flex flex-row flex-wrap gap-5 p-8">
          {allServices
          .filter((service) => service.type === "demande")
          .map((service, index) => (
            <CustomersHomeCards
              key={service.id || index}
              image={`${import.meta.env.VITE_BASE_URL_STATIC}uploads/files/${service?.photo}`}
              title={service.title}
              href={`/customer/service/${service?.id}`}
              date={new Date(service.date).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "short",
              })}
              price={`${service.price} €`}
              rating={5}
              city_start={service.city_start}
              city_end={service.city_end}
            />
        ))}
        </div>
      </div>

      {hasMore && (
        <div className="flex flex-row items-center justify-center mt-12 mb-20 gap-2">
          <button
            onClick={() => setOffset((prev) => prev + 5)}
            className="text-gray-500 hover:text-black focus:font-semibold"
          >
          </button>
        </div>
      )}
    </div>
  );
};

export default CustomersDemands;
