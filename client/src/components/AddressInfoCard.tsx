import { useContext, useEffect, useState } from "react";
import { MapContext } from "../context/MapContext";
import styles from "../styles/scss/AddressInfoCard.module.scss";

interface Props {
  address: string;
}

const AddressInfoCard = ({ address }: Props) => {
  const { geoIpData, setGeoIpData } = useContext(MapContext);

  useEffect(() => {
    let isCancelled = false;

    const fetchGeoIpData = async () => {
      const apiKey = import.meta.env.VITE_API_KEY;
      try {
        const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${address}`;

        const res = await fetch(url);
        const data = await res.json();

        if (!isCancelled) {
          setGeoIpData(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchGeoIpData();

    return () => {
      isCancelled = true;
    };
  }, [address]);

  if (!geoIpData) {
    return null;
  }

  const { ip, location, isp } = geoIpData;

  return (
    <div className={styles.card_container}>
      <div className={styles.address_info}>
        <h2>Ip address</h2>
        <h1>{ip}</h1>
      </div>
      <div className={styles.address_info}>
        <h2>Location</h2>
        <h1>
          {location.city}, {location.region}
        </h1>
      </div>
      <div className={styles.address_info}>
        <h2>Timezone</h2>
        <h1>{location.timezone}</h1>
      </div>
      <div className={styles.address_info}>
        <h2>Isp</h2>
        <h1>{isp}</h1>
      </div>
    </div>
  );
};

export default AddressInfoCard;
