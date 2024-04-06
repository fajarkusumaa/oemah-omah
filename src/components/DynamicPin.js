import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const customIcon = L.icon({
  iconUrl: "pin.png",
  iconSize: [32, 46], // size of the icon
  iconAnchor: [16, 32], // point of the icon which will correspond to marker's location
});

// @refresh reset

const DynamicPin = ({ item }) => {
  return (
    <Marker position={[item._geoloc.lat, item._geoloc.lng]} icon={customIcon}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  );
};

export default DynamicPin;
