import { useEffect, useState } from "react";
import styles from "../styles/AddressInfoCard.module.css";

interface Props {
  address: string;
}

const AddressInfoCard = ({ address }: Props) => {
  const [ipInfo, setIpInfo] = useState<string>("");
  const [cityInfo, setCityInfo] = useState<string>("");
  const [regoinInfo, setRegionInfo] = useState<string>("");
  const [timezoneInfo, setTimezoneInfo] = useState<string>("");
  const [ispInfo, setIspInfo] = useState<string>("");
  useEffect(() => {
    let isCancelled = false;
    const fetchGeoIpData = async () => {
      const apiKey = import.meta.env.VITE_API_KEY;
      try {
        const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${address}`;

        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setIpInfo(data.ip);
        setCityInfo(data.location.city);
        setRegionInfo(data.location.region);
        setTimezoneInfo(data.location.timezone);
        setIspInfo(data.isp);
      } catch (error) {
        console.error(error);
      }

      return () => {
        isCancelled = true;
      };
    };
    fetchGeoIpData();
  }, [address]);

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
