import React, { useEffect } from "react";
import styles from "../styles/AddressField.module.css";

const AddressField = () => {
  useEffect(() => {
    const fetchGeoIpData = async () => {
      try {
        const url = `http://localhost:4000/api/geoip`;

        const res = await fetch(url, {
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.trace(error);
      }
    };
    fetchGeoIpData();
  }, []);

  return (
    <div className={styles.address_container}>
      <form>
        <label>IP Address Tracker</label>
        <input type="number"></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddressField;
