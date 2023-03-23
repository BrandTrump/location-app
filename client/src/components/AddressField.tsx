import styles from "../styles/AddressField.module.css";
import arrow from "../assets/arrow.svg";

const AddressField = () => {
  return (
    <div className={styles.address_container}>
      <form className={styles.address_form}>
        <label>IP Address Tracker</label>
        <div className={styles.input_field}>
          <input
            type="text"
            placeholder="Search for any IP address or domain"
          ></input>
          <button>Search</button>
        </div>
      </form>
    </div>
  );
};

export default AddressField;
