import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import { useParams, useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";

const DelivrerAnnouncementConfirmation = () => {
  const { announcementId } = useParams();
  const http = useAuth();
  const navigate = useNavigate();

  const { data: announcement, isLoading } = useQuery({
    queryKey: ["Service", announcementId],
    queryFn: async () => {
      const response = await http.get(`/announcement/read/${announcementId}`);
      return response.data.data;
    },
  });

  //   Map handler
  useEffect(() => {
    if (!announcement) return;

    const start = {
      lat: parseFloat(announcement.latDeparture),
      lon: parseFloat(announcement.lonDeparture),
    };
    const end = {
      lat: parseFloat(announcement.latDestination),
      lon: parseFloat(announcement.lonDestination),
    };

    const map = L.map("map").setView([start.lat, start.lon], 10);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    axios
      .post(
        "https://api.openrouteservice.org/v2/directions/driving-car/geojson",
        {
          coordinates: [
            [start.lon, start.lat],
            [end.lon, end.lat],
          ],
        },
        {
          headers: {
            Authorization:
              "eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6IjIyMDcyNWQ3ODJmNzRhOWQ4ZTRlYWU4M2VhNTJlNDQwIiwiaCI6Im11cm11cjY0In0=",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        const geojson = res.data;

        const routeLayer = L.geoJSON(geojson, {
          style: {
            color: "green",
            weight: 4,
          },
        }).addTo(map);

        map.fitBounds(routeLayer.getBounds());
      })
      .catch((err) => {
        console.error("Erreur ORS :", err);
      });

    return () => map.remove();
  }, [announcement]);

  const mutationAcceptedDelivery = useMutation({
    mutationKey: ["AcceptedDelivery", announcementId],
    mutationFn: async (formData) => {
      const response = await http.post(`/step/create`, formData);
      return response.data.data ;
    },
  });

  const handleAcceptedDelivery = () => {
    mutationAcceptedDelivery.mutate(announcement, {
      onError: (error) => {
        console.log(error);
        alert("Votre demande ne peut pas être pris en compte");
      },
      onSuccess: (data) => {
        console.log(data);
        alert("Livraison acceptée");
      },
    });
  };

  if (isLoading) {
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
    <div className="min-h-screen w-screen px-4 py-6 flex flex-col lg:flex-row lg:justify-around font-[Poppins] lg:px-20 mt-10 xl:ml-35">
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
            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Accepter
          </button>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
          >
            Retour
          </button>
        </div>
      </div>

      {/* Carte */}
      <div className="w-full lg:w-1/2 min-h-[600px] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Trajet de la livraison
        </h2>
        <div id="map" className="w-full h-[600px] rounded shadow" />
      </div>
    </div>
  );
};

export default DelivrerAnnouncementConfirmation;
