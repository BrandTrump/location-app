import styles from "../styles/AddressField.module.css";
import { useState } from "react";
import AddressInfoCard from "./AddressInfoCard";

const AddressField = () => {
  const [ipAddress, setIpAddress] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ipAddressRegex =
      /^([01]?[0-9]{1,2}|2[0-4][0-9]|25[0-5])\.([01]?[0-9]{1,2}|2[0-4][0-9]|25[0-5])\.([01]?[0-9]{1,2}|2[0-4][0-9]|25[0-5])\.([01]?[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/;
    if (ipAddressRegex.test(ipAddress)) {
      setAddress(ipAddress);
    } else {
      console.log("Invalid IP address");
    }
  };

  return (
    <>
      <div className={styles.address_container}>
        <form className={styles.address_form} onSubmit={handleSubmit}>
          <label>IP Address Tracker</label>
          <div className={styles.input_field}>
            <input
              type="text"
              placeholder="Search for any IP address or domain"
              onChange={(e) => setIpAddress(e.target.value)}
            ></input>
            <button>Search</button>
          </div>
        </form>
      </div>
      <div className={styles.address_card}>
        <AddressInfoCard address={address} />
      </div>
    </>
  );
};

export default AddressField;
