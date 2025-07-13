import { Link } from "react-router-dom";
import ProviderAnnoucementAdminComponent from "../../../components/AdminComponents/ProviderAnnoucementAdminComponent";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";

const ProviderAnnouncementsAdmin = () => {
  const http = useAuth();

  const { data: services, refetch } = useQuery({
    queryKey: ["ProviderAnnouncements"],
    queryFn: async () => {
      const response = await http.get(`/service/read?limit=100&offset=0`);
      return response.data.data;
    },
  });

  const handleDelete = async (id) => {
    try {
      await http.delete("/service/delete", { data: { id } });
      alert("Annonce supprimée avec succès.");
      refetch();
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
      alert("Erreur lors de la suppression.");
    }
  };

  return (
    <div className="bg-white pt-0 h-screen 2xl:ml-80 py-10 w-screen overflow-x-hidden">
      <div className="p-10 bg-white w-screen mb-8 shadow-md">
        <h1 className="text-xl font-bold">Annonces "offre" du prestataire</h1>
      </div>

      <div className="flex flex-row flex-wrap mt-8 gap-5 p-8 2xl:mr-72 ml-10">
        {services
          ?.filter((service) => service.type === "offre")
          .map((service, index) => (
            <ProviderAnnoucementAdminComponent
              key={service.id}
              id={service.id}
              index={index}
              href={`/customer/service/${service.id}`}
              image={`${import.meta.env.VITE_BASE_URL_STATIC}uploads/files/${service?.photo}`}
              title={service.title}
              date="20 juil"
              city_start={service.city}
              price={`${service.price} €`}
              rating="4,9"
              onDelete={handleDelete}
            />
          ))}
      </div>
    </div>
  );
};

export default ProviderAnnouncementsAdmin;
