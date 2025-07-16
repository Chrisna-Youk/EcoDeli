import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import CustomersHomeCards from "../../components/CustomerComponents/CustomersHomeCards";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";

const ServicesPageCustomers = () => {
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
  console.log(services);

  return (
    <div className="flex flex-col w-screen mt-10">
      <div className="flex items-center justify-center">
        <div className="flex flex-row mt-2 bg-white rounded-3xl shadow-2xl">
          <input
            type="search"
            name="search"
            placeholder="Rechercher une annonce"
            id="search"
            className="min-w-md bg-white rounded-3xl h-13 indent-6 outline-none hover:bg-gray-100 hover:shadow-md duration-300"
          />
          <input
            type="text"
            placeholder="Où ?"
            className="bg-white outline-none indent-6 hover:bg-gray-100 hover:shadow-md duration-300 rounded-3xl"
          />

          <select
            name="type_delivery"
            id=""
            className="bg-white min-w-20 outline-none text-gray-400 indent-3 hover:bg-gray-100 hover:shadow-md duration-300 rounded-3xl"
          >
            <option value="">Quoi ?</option>
            {categories?.map((category, index) => (
              <option key={index} value={category.id} className="text-black">
                {category.name}
              </option>
            ))}
          </select>
          <button className="ml-12 h-13 w-13 rounded-full flex items-center justify-center outline-nonehover:shadow-md duration-300 bg-yellow-500 hover:bg-yellow-600 hover:scale-105">
            <svg
              className="h-7"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </button>
        </div>
      </div>

      <h3 className="mt-12 ml-12 text-lg font-semibold">
        Les services proposés par nos partenaires
      </h3>

      <div className="flex flex-row flex-wrap gap-5 p-8">
        <div className="flex flex-row flex-wrap gap-5 p-8">
          {allServices
          .filter((service) => service.type === "offre" && service.categoryId != 4)
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
            <h3>Voir toutes les annonces</h3>
          </button>
        </div>
      )}
    </div>
  );
};

export default ServicesPageCustomers;
