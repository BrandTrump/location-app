import { useEffect, useState } from "react";
import styles from "../styles/AddressInfoCard.module.css";

const AddressInfoCard = () => {
  const [ipInfo, setIpInfo] = useState<string>("");
  const [cityInfo, setCityInfo] = useState<string>("");
  const [regoinInfo, setRegionInfo] = useState<string>("");
  const [timezoneInfo, setTimezoneInfo] = useState<string>("");
  const [ispInfo, setIspInfo] = useState<string>("");
  useEffect(() => {
    const fetchGeoIpData = async () => {
      try {
        const url = `http://localhost:4000/api/geoip`;

        const res = await fetch(url, {
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        console.log(data);
        setIpInfo(data.ip);
        setCityInfo(data.location.city);
        setRegionInfo(data.location.region);
        setTimezoneInfo(data.location.timezone);
        setIspInfo(data.isp);
      } catch (error) {
        console.trace(error);
      }
    };
    fetchGeoIpData();
  }, []);

  return (
    <div className={styles.card_container}>
      <div className={styles.address_info}>
        <h2>Ip address</h2>
        <h1>{ipInfo}</h1>
      </div>
      <div className={styles.address_info}>
        <h2>Location</h2>
        <h1>
          {cityInfo}, {regoinInfo}
        </h1>
      </div>
      <div className={styles.address_info}>
        <h2>Timezone</h2>
        <h1>{timezoneInfo}</h1>
      </div>
      <div className={styles.address_info}>
        <h2>Isp</h2>
        <h1>{ispInfo}</h1>
      </div>
    </div>
  );
};

export default AddressInfoCard;
