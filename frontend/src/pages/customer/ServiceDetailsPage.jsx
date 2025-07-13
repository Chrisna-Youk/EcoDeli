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
      image={service?.photo}
      price={service?.price}
      category={service?.category}
      description={service?.description}
      city={service?.city}
      name_provider={user?.firstName}
      lastname_provider={user?.lastName}
      status_provider={user?.status}
      photo_provider={user?.photo}
    />
  );
};

export default ServiceDetailsPage;
