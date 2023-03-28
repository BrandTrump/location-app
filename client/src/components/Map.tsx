import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useContext, useEffect } from "react";
import { MapContext } from "../context/MapContext";

const Map = () => {
  const { geoIpData } = useContext(MapContext);

  // custom hook
  function FlyMapTo() {
    const map = useMap();

    useEffect(() => {
      map.flyTo(
        geoIpData?.location
          ? [geoIpData.location.lat, geoIpData.location.lng]
          : [-36.84853, 174.76349]
      );
    }, [geoIpData.location]);

    return null;
  }

  return (
    <MapContainer
      center={
        geoIpData?.location
          ? [geoIpData.location.lat, geoIpData.location.lng]
          : [-36.84853, 174.76349]
      }
      zoom={16}
      scrollWheelZoom={true}
      style={{ width: "100%", height: "calc(100vh - 406px)", zIndex: "-1" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={
          geoIpData?.location
            ? [geoIpData.location.lat, geoIpData.location.lng]
            : [-36.84853, 174.76349]
        }
      >
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      {geoIpData?.location && <FlyMapTo />}
    </MapContainer>
  );
};

export default Map;
