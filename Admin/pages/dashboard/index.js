import React, { useEffect } from "react";
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/index";
// import MainContent from "../../components/MainContent/index";
import MainContent from "../../components/Contents/DashboardContent/index";

import styles from "./dashboard.module.css";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

// const SideBar = new dynamic(() => import("../../components/SideBar/SideBar"), {
//   ssr: false,
// });
// const NavBar = new dynamic(() => import("../../components/NavBar"), {
//   ssr: false,
// });
// const MainContent = new dynamic(
//   () => import("../../components/Contents/DashboardContent/index"),
//   { ssr: false }
// );

function Dashboard({ passengers, drivers }) {
  const router = useRouter();

  useEffect(() => {
    // alert(router.query.name);
  }, [router.query]);
  return (
    <div className={styles.App}>
      <NavBar />
      <div className={styles.mainBody}>
        <SideBar actives="Dashboard" drivers={drivers} />
        <MainContent drivers={drivers} passengers={passengers} />
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
      passengers,
      drivers,
    },
  };
}
export default Dashboard;
