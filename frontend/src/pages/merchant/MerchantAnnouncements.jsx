import { Link } from "react-router-dom";
import ProviderAnnoucementAdminComponent from "../../components/AdminComponents/ProviderAnnoucementAdminComponent";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAuthContext from "../../contexts/auth/useAuthContext";
import { jwtDecode } from "jwt-decode";

const MerchantAnnouncements = () => {
  const http = useAuth();
  const authContext = useAuthContext().auth;
  const { id: userId } = jwtDecode(authContext);

  const { data: services } = useQuery({
    queryKey: ["CustomerServices"],
    queryFn: async () => {
      const response = await http.get(`/service/read?limit=100&offset=0`);
      return response.data.data;
    },
  });
  const handleDeleteService = async (id) => {
    try {
      await http.delete("/service/delete", { data: { id } });
      alert("Annonce de service supprimée avec succès.");
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
      alert("Erreur lors de la suppression.");
    }
  };

  return (
    <div className="bg-white pt-0 h-screen py-10 w-screen overflow-x-hidden xl:ml-80">
      <div className="p-10 bg-white w-screen mb-8 shadow-md">
        <h1 className="text-xl font-bold">Toutes vos annonces</h1>
      </div>

      <div className="flex flex-row flex-wrap mt-8 gap-5 p-8 2xl:mr-72 ml-10">
        {services
          ?.filter((service) => service.userId === userId)
          .map((service, index) => (
            <ProviderAnnoucementAdminComponent
              key={`service-${service.id}`}
              id={service.id}
              index={index}
              href={`/customer/service/${service.id}`}
              image={`${import.meta.env.VITE_BASE_URL_STATIC}uploads/files/${service?.photo}`}
              title={service.title}
              date="20 juil"
              city_start={service.city}
              price={`${service.price} €`}
              rating="4,9"
              onDelete={handleDeleteService}
            />
          ))}
      </div>
    </div>
  );
};

export default MerchantAnnouncements;
