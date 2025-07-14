import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import ProfileDetailsComponent from "../../components/CustomerComponents/ProfileDetailsComponent";
import getAverage from "../../utils/getAverage";

const ProfileDetails = () => {
  const { profileId } = useParams();
  const http = useAuth();

  const { data: profile } = useQuery({
    queryKey: ["Profile", profileId],
    queryFn: async () => {
      const response = await http.get(`/user/read/${profileId}`);
      return response.data.data;
    },
  });

  const { data: reviews } = useQuery({
    queryKey: ["Reviews", profileId],
    queryFn: async () => {
      const response = await http.get(`/review/read/${profileId}`);
      return response.data.data;
    },
  });

  return (
    <ProfileDetailsComponent
      photo={profile?.photo || 'https://img.freepik.com/vecteurs-premium/silhouette-noire-homme-anonyme-point-interrogation-illustration-vectorielle-personne-sexe-masculin-incognito_261737-806.jpg?semt=ais_hybrid&w=740'}
      firstname={profile?.firstName}
      lastname={profile?.lastName}
      status={profile?.status}
      reviews={reviews || []}
      profileId = {profileId}
    />
  );
};

export default ProfileDetails;
