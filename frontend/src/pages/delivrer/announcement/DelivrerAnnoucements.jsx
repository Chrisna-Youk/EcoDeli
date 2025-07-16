import DelivrerAnnouncementCard from "../../../components/DelivrerComponents/DelivrerAnnouncementCards";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
const DelivrerAnnouncements = () => {
  const http = useAuth();

  const { data: announcements } = useQuery({
    queryKey: ["Announcementsdez"],
    queryFn: async () => {
      const response = await http.get(`/announcement/read?limit=100&offset=0`);
      return response.data.data;
    },
  });

  // console.log(announcements);
  return (
    <div className="bg-white pt-0 h-screen 2xl:ml-72 py-10 w-full overflow-x-hidden">
      <div className="p-10 bg-white w-screen mb-8 shadow-md"></div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col sm:ml-20">
          <p className="text-black text-xl font-semibold">Your Announcements</p>
          <p>You can edit, create or delete an announcements here.</p>
        </div>
      </div>

      <div className="flex flex-row flex-wrap mt-8 gap-5 p-8 2xl:mr-72 ml-10">
        {announcements?.map((announcement, key) => {
          const dateObj = new Date(announcement?.date);
          const formattedDate = `${dateObj
            .getDate()
            .toString()
            .padStart(2, "0")}/${(dateObj.getMonth() + 1)
            .toString()
            .padStart(2, "0")}`;
          return (
            <DelivrerAnnouncementCard
              key={key}
              href={`/delivrer/announcement/${announcement?.id}`}
              image={`${import.meta.env.VITE_BASE_URL_STATIC}uploads/files/${
                announcement?.photo
              }`}
              title={announcement?.title}
              date={formattedDate}
              city_start={announcement?.cityDeparture}
              city_end={announcement?.cityDestination}
              price={announcement?.price}
              latDeparture={Number(announcement?.latDeparture)}
              lonDeparture={Number(announcement?.lonDeparture)}
              latDestination={Number(announcement?.latDestination)}
              lonDestination={Number(announcement?.lonDestination)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DelivrerAnnouncements;
