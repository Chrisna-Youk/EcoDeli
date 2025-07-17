import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

// Icône personnalisée Leaflet par défaut
const markerIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Composant interne pour recentrer dynamiquement
const RecenterMap = ({ lat, lon }) => {
  const map = useMap();

  useEffect(() => {
    if (lat && lon) {
      map.setView([lat, lon], 13); // Recentre avec un zoom 13
    }
  }, [lat, lon, map]);

  return null;
};

const AddressMapDisplay = ({ latitude, longitude, address }) => {
  const defaultPosition = [48.8566, 2.3522]; // Paris

  const hasValidCoords = latitude && longitude;
  const position = hasValidCoords
    ? [parseFloat(latitude), parseFloat(longitude)]
    : defaultPosition;

  return (
    <div className="mt-6">
      <label className="block font-semibold mb-2">Position sélectionnée</label>
      <MapContainer
        center={position}
        zoom={13}
        className="h-96 rounded-lg shadow-md"
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap"
        />

        {/* Recentre dynamiquement si une nouvelle position est fournie */}
        {hasValidCoords && (
          <>
            <RecenterMap lat={latitude} lon={longitude} />
            <Marker position={position} icon={markerIcon}>
              <Popup>{address}</Popup>
            </Marker>
          </>
        )}
      </MapContainer>
    </div>
  );
};

export default AddressMapDisplay;
