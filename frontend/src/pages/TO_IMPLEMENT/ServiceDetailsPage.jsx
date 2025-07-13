import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import ComponentServiceDetailsPage from "./ComponentServiceDetailsPage";
import useAuth from "../../hooks/useAuth";

const ServiceDetailsPage = () => {
  const { serviceId } = useParams();
  const http = useAuth();

  const {
    data: service
  } = useQuery({
    queryKey: ["Service", serviceId],
    queryFn: async () => {
      const response = await http.get(`/service/read/${serviceId}`);
      return response.data.data;
    }
  });

  const userId = service?.userId;

  const {data: user} = useQuery({
    queryKey: ["User", userId],
    queryFn: async () => {
      const response = await http.get(`/user/read/${userId}`);
      return response.data.data;
    }
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
