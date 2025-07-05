import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

function ServiceDetailCustomers() {
  const http = useAuth();
  const { ServiceId } = useParams();

  const { data: ServiceDetails } = useQuery({
    queryKey: ["ServiceDetails", ServiceId],
    queryFn: async () => {
      const response = await http.get(`/service/read/${ServiceId}`);
      return response.data.data[0];
    },
  });
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {ServiceDetails?.photo && (
          <img
            src={`${import.meta.env.VITE_BASE_URL_STATIC}uploads/files/${
              ServiceDetails?.photo
            }`}
            alt={"service"}
            className="w-full h-64 object-cover"
          />
        )}
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-2">{ServiceDetails?.title}</h1>
          <p className="text-gray-600 mb-4">{ServiceDetails?.description}</p>
          <div className="text-lg font-semibold text-blue-600">
            Prix : {ServiceDetails?.price} €
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-600 text-white font-semibold py-3 rounded-lg hover:bg-yellow-700 transition duration-300 cursor-pointer"
          >
            Contacter le préstataire pour réserver
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetailCustomers;
