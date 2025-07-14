import { useState } from "react";
import ComponentDeliveryDetailsPage from "../../components/DelivrerComponents/ComponentDeliveryDetailsPage";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";

const DelivererDetailsPage = () => {
  const { announcementId } = useParams();
  const http = useAuth();

  const [customerId, setCustomerId] = useState("");

  const { data: announcement } = useQuery({
    queryKey: ["Service", announcementId],
    queryFn: async () => {
      const response = await http.get(`/announcement/read/${announcementId}`);
      setCustomerId(response.data.data.userId);
      return response.data.data;
    },
  });

  console.log(announcement);

  return (
    <ComponentDeliveryDetailsPage
      image={
        `${import.meta.env.VITE_BASE_URL_STATIC}uploads/files/${
          announcement?.photo
        }`
      }
      title={announcement?.title}
      // image={`${import.meta.env.VITE_BASE_URL_STATIC}uploads/files/`}
      price={30}
      description={announcement?.description}
      cityDeparture={announcement?.cityDeparture}
      cityDestination={announcement?.cityDestination}
      name_delivrer={announcement?.user?.firstName}
      lastname_delivrer={announcement?.user?.lastName}
      status_delivrer={announcement?.user?.role}
      photo_delivrer={
        `${import.meta.env.VITE_BASE_URL_STATIC}uploads/files/${
          announcement?.user?.photo
        }` ||
        "https://img.freepik.com/vecteurs-premium/silhouette-noire-homme-anonyme-point-interrogation-illustration-vectorielle-personne-sexe-masculin-incognito_261737-806.jpg?semt=ais_hybrid&w=740"
      }
    />
  );
};

export default DelivererDetailsPage;
