import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import ComponentServiceDetailsPage from "../../components/CustomerComponents/ComponentServiceDetailsPage";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import useAuthContext from "../../contexts/auth/useAuthContext";

const TransportDetailsPage = () => {
  const { transportId } = useParams();
  const http = useAuth();

  const [providerId, setProviderId] = useState("");
  const customerId = jwtDecode(useAuthContext().auth)?.id;

  const {
    data: transport
  } = useQuery({
    queryKey: ["transport", transportId],
    queryFn: async () => {
      const response = await http.get(`/transport/read/${transportId}`);
      setProviderId(response.data.data.userId);
      return response.data.data;
    },
  });

  const userId = transport?.userId;

  const {data: user} = useQuery({
    queryKey: ["User", userId],
    queryFn: async () => {
      const response = await http.get(`/user/read/${providerId}`);
      return response.data.data;
    },
  });


  return (
    <ComponentTransportDetailsPage
      title={transport?.title}
      image={`${import.meta.env.VITE_BASE_URL_STATIC}uploads/files/${transport?.photo}`}
      price={transport?.price}
      category={transport?.category}
      description={transport?.description}
      city={transport?.city}
      city_end={transport?.city_end}
      name_provider={user?.firstName}
      lastname_provider={user?.lastName}
      status_provider={user?.status}
      customerId={customerId}
      providerId={providerId}
      serviceId={transportId}
      photo_provider={user?.photo || 'https://img.freepik.com/vecteurs-premium/silhouette-noire-homme-anonyme-point-interrogation-illustration-vectorielle-personne-sexe-masculin-incognito_261737-806.jpg?semt=ais_hybrid&w=740'} 
    />
  );
};

export default TransportDetailsPage;
