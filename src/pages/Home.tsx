import AddressField from "../components/AddressField";
import Map from "../components/Map";
import styles from "../styles/pages/Home.module.css";

const Home = () => {
  return (
    <div className={styles.contianer}>
      <AddressField />
      <Map />
    </div>
  );
};

export default Home;
