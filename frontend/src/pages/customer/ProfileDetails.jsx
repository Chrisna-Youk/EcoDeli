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

  const grades = reviews?.map((review) => review.grade) || [];
  const averageGrade =
    grades.length > 0 ? Math.round(getAverage(grades) * 10) / 10 : null;

  return (
    <ProfileDetailsComponent
      photo={profile?.photo}
      firstname={profile?.firstName}
      lastname={profile?.lastName}
      status={profile?.status}
      average_grade={averageGrade}
      reviews={reviews || []}
    />
  );
};

export default ProfileDetails;
