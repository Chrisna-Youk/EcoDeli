import { Link } from "react-router-dom";
import ProviderAnnouncementCard from "../../components/ProviderComponents/ProviderAnnouncementCards";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAuthContext from "../../contexts/auth/useAuthContext";
import { jwtDecode } from "jwt-decode";

const ProviderAnnouncements = () => {
  const http = useAuth();
  const authContext = useAuthContext().auth;
  const { id: userId } = jwtDecode(authContext);

  const { data: services } = useQuery({
    queryKey: ["ProviderAnnouncements"],
    queryFn: async () => {
      const response = await http.get(`/service/read/user/${userId}`);
      return response.data.data;
    },
  });

  return (
    <div className="bg-white pt-0 h-screen 2xl:ml-120 py-10 w-full overflow-x-hidden">
      <div className="p-10 bg-white w-screen mb-8 shadow-md"></div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col sm:ml-20">
          <p className="text-black text-xl font-semibold">Your Announcements</p>
          <p>You can edit, create or delete an announcements here.</p>
        </div>
        <Link to={`/provider/create/service`} className="mr-100">
          <svg
            className="h-10 hover:opacity-80 duration-300"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M853.333333 874.666667H170.666667c-46.933333 0-85.333333-38.4-85.333334-85.333334V234.666667c0-46.933333 38.4-85.333333 85.333334-85.333334h682.666666c46.933333 0 85.333333 38.4 85.333334 85.333334v554.666666c0 46.933333-38.4 85.333333-85.333334 85.333334z"
                fill="#d4d58b"
              ></path>
              <path
                d="M746.666667 341.333333m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"
                fill="#f5f3b2"
              ></path>
              <path
                d="M426.666667 341.333333L192 682.666667h469.333333z"
                fill="#e4c99b"
              ></path>
              <path
                d="M661.333333 469.333333l-170.666666 213.333334h341.333333z"
                fill="#f5f3b2"
              ></path>
              <path
                d="M810.666667 810.666667m-213.333334 0a213.333333 213.333333 0 1 0 426.666667 0 213.333333 213.333333 0 1 0-426.666667 0Z"
                fill="#43A047"
              ></path>
              <path
                d="M768 682.666667h85.333333v256h-85.333333z"
                fill="#FFFFFF"
              ></path>
              <path
                d="M682.666667 768h256v85.333333H682.666667z"
                fill="#FFFFFF"
              ></path>
            </g>
          </svg>
        </Link>
      </div>

      <div className="flex flex-row flex-wrap mt-8 gap-5 p-8 2xl:mr-72 ml-10">
        {services?.map((service, index) => (
          <ProviderAnnouncementCard
            id={service.id}
            index={index}
            href={`/provider/services/${service.id}`}
            image={`${import.meta.env.VITE_BASE_URL_STATIC}uploads/files/${
              service?.photo
            }`}
            title={`${service.title}`}
            date="20 juil"
            city_start={service.city}
            price={`${service.price} €`}
            rating="4,9"
          />
        ))}
      </div>
    </div>
  );
};

export default ProviderAnnouncements;
