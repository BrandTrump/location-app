import AddressField from "../components/AddressField";
import AddressInfoCard from "../components/AddressInfoCard";
import Map from "../components/Map";
import { MapContext } from "../context/MapContext";
import styles from "../styles/pages/Home.module.css";
import { useState } from "react";

interface GeoIpData {
  ip: string;
  location: {
    city: string;
    region: string;
    timezone: string;
    lat: number;
    lng: number;
  };
  isp: string;
}

const Home = () => {
  const [geoIpData, setGeoIpData] = useState<GeoIpData | null>(null);
  return (
    <>
      <MapContext.Provider value={{ geoIpData, setGeoIpData }}>
        <div className={styles.contianer}>
          <div className={styles.address_field}>
            <AddressField />
          </div>
        </div>
        <Map />
      </MapContext.Provider>
    </>
  );
};

export default Home;
