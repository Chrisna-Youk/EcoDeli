import React, { useEffect, useState, useContext } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";

const ArrivalMapSelect = ({ onSelect }) => {
//   const [checkpoints, setCheckpoints] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState("");

  const http = useAuth();

  const { data: availableCheckpoints } = useQuery({
    queryKey: ["availableCheckpoints"],
    queryFn: async () => {
      const response = await http.get(`/checkpoint/read`);
      return response.data.data;
    },
  });

  const handleSelect = (checkpoint) => {
    setSelectedAddress(checkpoint.address);
    onSelect(checkpoint);
  };

  return (
    <div>
      <label className="block font-semibold mb-2">Ville d’arrivée</label>
      <input
        type="text"
        readOnly
        value={selectedAddress}
        placeholder="Cliquez sur la carte"
        className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />
      <MapContainer
        center={[48.8566, 2.3522]}
        zoom={5}
        className="h-96 rounded-lg shadow-md"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap x Ecodeli"
        />
        {availableCheckpoints?.map((cp) => (
          <Marker
            key={cp.id}
            position={[cp.latitude, cp.longitude]}
            eventHandlers={{
              click: () => handleSelect(cp),
            }}
            icon={L.icon({
              iconUrl:
                "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
              shadowUrl:
                "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
              shadowSize: [41, 41],
            })}
          >
            <Popup>{cp.address}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default ArrivalMapSelect;
