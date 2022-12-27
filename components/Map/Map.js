import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import markerIconPng from "leaflet/dist/images/marker-icon.png";
// import { Icon } from "leaflet";
import style from "../../styles/Home.module.css";
import L from "leaflet";

const Map = () => {
  const position = [23.806456583852594, 90.36223344505316];

  const customMarker = new L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
  });
  return (
    <div className="mt-8">
      <MapContainer
        className={style.map}
        center={position}
        zoom={16}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customMarker}>
          <Popup>Here We Are.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
