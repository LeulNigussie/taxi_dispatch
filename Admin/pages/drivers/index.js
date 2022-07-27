import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/index";
// import MainContent from "../../components/MainContent/index";
import DriverContents from "../../components/Contents/DriverContents/index";

import styles from "./drivers.module.css";

function Drivers({ drivers }) {
  return (
    <div className={styles.App}>
      <NavBar />
      <div className={styles.mainBody}>
        <SideBar actives="Drivers" />
        <DriverContents drivers={drivers} />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const connection_string = "http://localhost:3000/api/";
  const headers = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  const [passengersDB, driversDB] = await Promise.all([
    fetch(connection_string + "passengers", headers),
    fetch(connection_string + "drivers", headers),
  ]);

  const passengersCollection = await passengersDB.json();
  const passengers = passengersCollection.passengers;

  const driversCollection = await driversDB.json();
  const drivers = driversCollection.drivers;

  return {
    props: {
      drivers,
    },
  };
}
export default Drivers;
