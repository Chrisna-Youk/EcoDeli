import { Link } from "react-router-dom";
import ProviderAnnoucementAdminComponent from "../../components/AdminComponents/ProviderAnnoucementAdminComponent";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAuthContext from "../../contexts/auth/useAuthContext";
import { jwtDecode } from "jwt-decode";

const CustomerAnnouncementsAdmin = () => {
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

  const { data: transports } = useQuery({
    queryKey: ["CustomerTransports"],
    queryFn: async () => {
      const response = await http.get(`/transport/read?limit=100&offset=0`);
      return response.data.data;
    },
  });

  const { data: deliveries } = useQuery({
    queryKey: ["CustomerDeliveries"],
    queryFn: async () => {
      const response = await http.get(`/announcement/read?limit=100&offset=0`);
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

  const handleDeleteTransport = async (id) => {
    try {
      await http.delete("/transport/delete", { data: { id } });
      alert("Annonce de transport supprimée avec succès.");
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
      alert("Erreur lors de la suppression.");
    }
  };

  const handleDeleteDelivery = async (id) => {
    try {
      await http.delete("/announcement/delete", { data: { id } });
      alert("Annonce de livraison supprimée avec succès.");
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
      alert("Erreur lors de la suppression.");
    }
  };

  return (
    <div className="bg-white pt-0 h-full py-10 w-screen overflow-x-hidden">
      <div className="p-10 bg-white w-screen mb-8 shadow-md">
        <h1 className="text-xl font-bold">Toutes vos annonces</h1>
      </div>

      {/* Services */}
      {services?.filter((service) => service.userId === userId).length > 0 && (
        <>
          <h3 className="mt-12 ml-12 text-lg font-semibold">
            Les dernières offres de services publiées
          </h3>
          <div className="flex flex-row flex-wrap mt-4 gap-5 p-8 2xl:mr-72 ml-10">
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
        </>
      )}

      {/* Transports */}
      {transports?.filter((transport) => transport.userId === userId).length > 0 && (
        <>
          <h3 className="mt-12 ml-12 text-lg font-semibold">
            Les dernières offres de transports publiées
          </h3>
          <div className="flex flex-row flex-wrap mt-4 gap-5 p-8 2xl:mr-72 ml-10">
            {transports
              ?.filter((transport) => transport.userId === userId)
              .map((transport, index) => (
                <ProviderAnnoucementAdminComponent
                  key={`transport-${transport.id}`}
                  id={transport.id}
                  index={index}
                  href={`/customer/transport/${transport.id}`}
                  image={`${import.meta.env.VITE_BASE_URL_STATIC}uploads/files/${transport?.photo}`}
                  title={transport.title}
                  date="20 juil"
                  city_start={transport.departure_city}
                  price={`${transport.price} €`}
                  rating="4,9"
                  onDelete={handleDeleteTransport}
                />
              ))}
          </div>
        </>
      )}

      {/* Deliveries */}
      {deliveries?.filter((delivery) => delivery.userId === userId).length > 0 && (
        <>
          <h3 className="mt-12 ml-12 text-lg font-semibold">
            Les dernières offres de livraisons publiées
          </h3>
          <div className="flex flex-row flex-wrap mt-4 gap-5 p-8 2xl:mr-72 ml-10">
            {deliveries
              ?.filter((delivery) => delivery.userId === userId)
              .map((delivery, index) => (
                <ProviderAnnoucementAdminComponent
                  key={`delivery-${delivery.id}`}
                  id={delivery.id}
                  index={index}
                  href={`/customer/announcement/${delivery.id}`}
                  image={`${import.meta.env.VITE_BASE_URL_STATIC}uploads/files/${delivery?.photo}`}
                  title={delivery.title}
                  date="20 juil"
                  city_start={delivery.city}
                  price={`${delivery.price} €`}
                  rating="4,9"
                  onDelete={handleDeleteDelivery}
                />
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CustomerAnnouncementsAdmin;
