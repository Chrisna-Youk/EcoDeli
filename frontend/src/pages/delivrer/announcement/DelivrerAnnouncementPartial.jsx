import { useState } from "react";
import "leaflet/dist/leaflet.css";
import useAuth from "../../../hooks/useAuth";
import { useParams, useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
// import ArrivalMapSelect from "../../../components/DelivrerComponents/ArrivalMapSelect";
// import CheckpointsMapSelect from "../../../components/DelivrerComponents/CheckpointsMapSelect";
import CheckpointsMapBounding from "../../../components/DelivrerComponents/CheckpointsMapBounding";

const DelivrerAnnouncementPartial = () => {
  const { announcementId } = useParams();
  const http = useAuth();
  const navigate = useNavigate();

  const [checkpoint, setCheckpoint] = useState("");
  const [hasNoCheckpoints, setHasNoCheckpoints] = useState(false);

  const { data: announcement, isLoading: isLoadingAnnouncement } = useQuery({
    queryKey: ["Service", announcementId],
    queryFn: async () => {
      const response = await http.get(`/announcement/read/${announcementId}`);
      return response.data.data;
    },
  });

  const { data: steps, isLoading: isLoadingSteps } = useQuery({
    queryKey: ["Steps", announcementId],
    queryFn: async () => {
      const response = await http.get(
        `/step/read/announcement/${announcementId}`
      );
      return response.data.data;
    },
  });

  const mutationAcceptedDelivery = useMutation({
    mutationKey: ["AcceptedDelivery", announcementId],
    mutationFn: async (formData) => {
      const response = await http.post(`/step/create`, formData);
      return response.data.data;
    },
  });

  const handleAcceptedDelivery = () => {
    mutationAcceptedDelivery.mutate(
      {
        type: "partial",
        announcement: announcement,
        checkpointId: checkpoint.id,
      },
      {
        onError: (error) => {
          console.log(error);
          alert(error.response.data.data.message);
        },
        onSuccess: (data) => {
          console.log(data);
          navigate("/delivrer/delivery/todo");
        },
      }
    );
  };

  if (isLoadingAnnouncement && isLoadingSteps) {
    return (
      <div className="text-center mt-10 text-lg font-medium">Chargement...</div>
    );
  }

  if (!announcement) {
    return (
      <div className="text-center mt-10 text-red-600">
        Aucune donnée trouvée.
      </div>
    );
  }

  const detailRows = [
    ["Titre", announcement.title],
    ["Type", announcement.type],
    ["Poids (kg)", announcement.weight],
    [
      "Dimensions (cm)",
      `${announcement.length} x ${announcement.width} x ${announcement.depth}`,
    ],
    ["Ville de départ", announcement.cityDeparture],
    ["Ville d'arrivée", announcement.cityDestination],
    ["Date", new Date(announcement.date).toLocaleDateString()],
    ["Client", `${announcement.user.firstName} ${announcement.user.lastName}`],
  ];

  return (
    <div className="min-h-screen w-screen px-4 py-6 flex flex-col lg:flex-row lg:justify-around font-[Poppins] lg:px-20 mt-10 xl:ml-45">
      {/* Récapitulatif */}
      <div className="w-full lg:w-1/3 lg:max-w-[800px] bg-white shadow rounded p-6 mb-6 lg:mb-0">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Détails de la livraison
        </h2>
        <div className="space-y-3">
          {detailRows.map(([label, value]) => (
            <div key={label} className="flex justify-between border-b py-2">
              <span className="font-medium text-gray-600">{label}</span>
              <span className="text-gray-900">{value || "–"}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex gap-4">
          <button
            onClick={() => handleAcceptedDelivery()}
            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition disabled:bg-gray-300"
            disabled={hasNoCheckpoints}
            title={
              hasNoCheckpoints ? "Aucun checkpoint disponible" : "Accepter"
            }
          >
            {hasNoCheckpoints ? "Livraison partiel indisponible" : "Accepter"}
          </button>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
          >
            Retour
          </button>
        </div>
      </div>

      {/* La technique GOATESQUE : une boxbounding qui affiche seulement les cp compris dedans */}
      <CheckpointsMapBounding
        announcement={announcement}
        latA={announcement.latDeparture} // Checkpoint départ
        lonA={announcement.lonDeparture}
        latB={announcement.latDestination} // Destination
        lonB={announcement.lonDestination}
        onAvailabilityChange={(isEmpty) => setHasNoCheckpoints(isEmpty)}
        onSelect={(checkpoint) => {
          setCheckpoint(checkpoint);
        }}
      />

      {/* Affichage des checkpoints grâce à Haversine mais compliqué à implémenter en code et à maintenir */}

      {/* <CheckpointsMapSelect
        lat={(announcement?.latDestination)}
        lon={(announcement?.lonDestination)}
        onSelect={(checkpoint) => {
          setCheckpoint(checkpoint); // ou autre logique
        }}
      /> */}

      {/* Affichage de tous les checkpoints : technique barbare */}

      {/* <div className="w-[900px] h-[900px] mr-[120px]">
        <ArrivalMapSelect
          onSelect={(location) => {
            setCheckpoint(location);
          }}
        />
      </div> */}
    </div>
  );
};

export default DelivrerAnnouncementPartial;
