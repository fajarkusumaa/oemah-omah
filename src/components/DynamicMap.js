import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import Pin from "@/components/Pin";

// @refresh reset

const DynamicMap = ({ items }) => {
  const bounds = items.map((item) => [item._geoloc.lat, item._geoloc.lng]);

  // Create an array of LatLng objects
  const latLngs = bounds.map((coords) => L.latLng(coords[0], coords[1]));
  console.log(latLngs);

  const boundsObj = L.latLngBounds(latLngs);

  const center = boundsObj.getCenter();

  return (
    <>
      <MapContainer
        center={center}
        zoom={10}
        scrollWheelZoom={true}
        className="h-full w-full flex-1"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />{" "}
        {items.map((item, i) => (
          <Pin key={i} item={item} />
        ))}
      </MapContainer>
    </>
  );
};

export default DynamicMap;
