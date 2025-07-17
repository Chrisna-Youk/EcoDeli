import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import useAuth from "../../hooks/useAuth";

const CheckpointsMapSelect = ({ lat, lon, onSelect }) => {
  const [checkpoints, setCheckpoints] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState("");
  const http = useAuth();

  useEffect(() => {
    const fetchCheckpoints = async () => {
      try {
        const res = await http.get(`/step/read/checkpoints/nearest`, {
          params: { lat, lon },
        });
        setCheckpoints(res.data.data);
      } catch (err) {
        console.error("Erreur lors de la récupération des checkpoints :", err);
      }
    };

    if (lat && lon) fetchCheckpoints();
  }, [lat, lon]);

  const handleSelect = (checkpoint) => {
    setSelectedAddress(checkpoint.address);
    onSelect(checkpoint);
  };

  return (
    <div>
      <label className="block font-semibold mb-2">Choisissez un point d’arrivée</label>
      <input
        type="text"
        readOnly
        value={selectedAddress}
        placeholder="Cliquez sur un point sur la carte"
        className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />
      <MapContainer
        center={[lat, lon]}
        zoom={6}
        className="h-96 rounded-lg shadow-md"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap x Ecodeli"
        />

        {/* Marqueur de la position de référence */}
        <Marker
          position={[lat, lon]}
          icon={L.icon({
            iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-red.png",
            shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41],
          })}
        >
          <Popup>Point de référence</Popup>
        </Marker>

        {checkpoints.map((cp) => (
          <Marker
            key={cp.id}
            position={[cp.latitude, cp.longitude]}
            eventHandlers={{
              click: () => handleSelect(cp),
            }}
            icon={L.icon({
              iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
              shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
              shadowSize: [41, 41],
            })}
          >
            <Popup>
              {cp.address} <br />
              ({cp.distance})
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default CheckpointsMapSelect;
