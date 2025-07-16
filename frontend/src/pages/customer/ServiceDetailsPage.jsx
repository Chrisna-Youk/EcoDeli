import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import ComponentServiceDetailsPage from "../../components/CustomerComponents/ComponentServiceDetailsPage";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import useAuthContext from "../../contexts/auth/useAuthContext";

const ServiceDetailsPage = () => {
  const { serviceId } = useParams();
  const http = useAuth();

  const [providerId, setProviderId] = useState("");
  const customerId = jwtDecode(useAuthContext().auth)?.id;

  console.log(providerId);
  console.log(customerId);

  const {
    data: service
  } = useQuery({
    queryKey: ["Service", serviceId],
    queryFn: async () => {
      const response = await http.get(`/service/read/${serviceId}`);
      setProviderId(response.data.data.userId);
      return response.data.data;
    },
  });

  const userId = service?.userId;

  const {data: user} = useQuery({
    queryKey: ["User", userId],
    queryFn: async () => {
      const response = await http.get(`/user/read/${providerId}`);
      return response.data.data;
    },
  });


  return (
    <ComponentServiceDetailsPage
      title={service?.title}
      image={`${import.meta.env.VITE_BASE_URL_STATIC}uploads/files/${service?.photo}`}
      price={service?.price}
      category={service?.category}
      description={service?.description}
      city={service?.city}
      city_end={service?.city_end}
      name_provider={user?.firstName}
      lastname_provider={user?.lastName}
      status_provider={user?.status}
      customerId={customerId}
      providerId={providerId}
      serviceId={serviceId}
      photo_provider={user?.photo || 'https://img.freepik.com/vecteurs-premium/silhouette-noire-homme-anonyme-point-interrogation-illustration-vectorielle-personne-sexe-masculin-incognito_261737-806.jpg?semt=ais_hybrid&w=740'} 
    />
  );
};

export default ServiceDetailsPage;
