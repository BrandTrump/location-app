import AddressField from "../components/AddressField";
import AddressInfoCard from "../components/AddressInfoCard";
import Map from "../components/Map";
import styles from "../styles/pages/Home.module.css";

const Home = () => {
  return (
    <>
      <div className={styles.contianer}>
        <div className={styles.address_field}>
          <AddressField />
        </div>
      </div>
      <Map />
    </>
  );
};

export default Home;
