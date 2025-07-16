import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";

const DelivrerAnnouncementCard = ({
  index,
  href,
  title,
  date,
  city_start,
  city_end,
  latDeparture,
  lonDeparture,
  latDestination,
  lonDestination,
}) => {
  const positions = [
    [latDeparture, lonDeparture],
    [latDestination, lonDestination],
  ];

  const center = [
    (latDeparture + latDestination) / 2,
    (lonDeparture + lonDestination) / 2,
  ];

  return (
    <Link to={href} key={index}>
      <div className="max-w-60 rounded-xl shadow-md overflow-hidden border border-gray-200 hover:bg-gray-200 duration-300 hover:shadow-2xl hover:scale-110">
        <div style={{ height: "200px", width: "100%" }}>
          <MapContainer
            center={center}
            zoom={3}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* Markers départ et arrivée */}
            <Marker position={[latDeparture, lonDeparture]} />
            <Marker position={[latDestination, lonDestination]} />
            {/* Ligne entre les deux */}
            <Polyline positions={positions} color="blue" />
          </MapContainer>
        </div>
        <div className="p-4">
          <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">
            {date} | {city_start} {city_end ? `- ${city_end}` : ""}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default DelivrerAnnouncementCard;
