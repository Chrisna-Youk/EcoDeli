import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import CustomersHomeCards from "../../components/CustomerComponents/CustomersHomeCards";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";

const HomeCustomer = () => {
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
    <div className="flex flex-col w-screen mt-10">
      <h3 className="mt-12 ml-12 text-lg font-semibold">
        Les dernières offres de services publiées
      </h3>

      <div className="flex flex-row flex-wrap gap-5 p-8">
        {allServices
          ?.filter(service => service.type === "offre")
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

      <h3 className="mt-12 ml-12 text-lg font-semibold">
        Offres de transport
      </h3>

      <div className="flex flex-row flex-wrap gap-5 p-8">
        {allServices
          ?.filter(service => service.categoryId === 4)
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

      <h3 className="mt-12 ml-12 text-lg font-semibold">
        Offres de cours particuliers
      </h3>

      <div className="flex flex-row flex-wrap gap-5 p-8">
        {allServices
          ?.filter(service => service.categoryId === 1)
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
      <div className="flex flex-row items-center justify-center mt-12 mb-20 gap-2">
        <svg
          className="h-4"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>plus-circle</title> <desc>Created with Sketch Beta.</desc>{" "}
            <defs> </defs>{" "}
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fill-rule="evenodd"
              sketch:type="MSPage"
            >
              {" "}
              <g
                id="Icon-Set"
                sketch:type="MSLayerGroup"
                transform="translate(-464.000000, -1087.000000)"
                fill="#000000"
              >
                {" "}
                <path
                  d="M480,1117 C472.268,1117 466,1110.73 466,1103 C466,1095.27 472.268,1089 480,1089 C487.732,1089 494,1095.27 494,1103 C494,1110.73 487.732,1117 480,1117 L480,1117 Z M480,1087 C471.163,1087 464,1094.16 464,1103 C464,1111.84 471.163,1119 480,1119 C488.837,1119 496,1111.84 496,1103 C496,1094.16 488.837,1087 480,1087 L480,1087 Z M486,1102 L481,1102 L481,1097 C481,1096.45 480.553,1096 480,1096 C479.447,1096 479,1096.45 479,1097 L479,1102 L474,1102 C473.447,1102 473,1102.45 473,1103 C473,1103.55 473.447,1104 474,1104 L479,1104 L479,1109 C479,1109.55 479.447,1110 480,1110 C480.553,1110 481,1109.55 481,1109 L481,1104 L486,1104 C486.553,1104 487,1103.55 487,1103 C487,1102.45 486.553,1102 486,1102 L486,1102 Z"
                  id="plus-circle"
                  sketch:type="MSShapeGroup"
                >
                  {" "}
                </path>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
        <a
          href=""
          className="text-gray-500 hover:text-black focus:font-semibold"
        >
          <h3>Voir toutes les annonces</h3>
        </a>
      </div>
    </div>
  );
};

export default HomeCustomer;
