import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// @refresh reset

const DynamicPin = ({ item }) => {
  const position = [51.505, -0.09];
  console.log(item);

  return (
    <Marker position={[item._geoloc.lat, item._geoloc.lng]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  );
};

export default DynamicPin;
