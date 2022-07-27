import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/index";
// import MainContent from "../../components/MainContent/index";
import DispatcherContents from "../../components/Contents/DispatcherContents/index";

import styles from "./dispatchers.module.css";

function Dispatchers({ dispatchers }) {
  return (
    <div className={styles.App}>
      <NavBar />
      <div className={styles.mainBody}>
        <SideBar actives="Dispatchers" />
        <DispatcherContents dispatchers={dispatchers} />
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
  const [passengersDB, dispatchersDB] = await Promise.all([
    fetch(connection_string + "passengers", headers),
    fetch(connection_string + "dispatchers", headers),
  ]);

  const dispatchersCollection = await dispatchersDB.json();
  const dispatchers = dispatchersCollection.dispatchers;

  return {
    props: {
      dispatchers,
    },
  };
}
export default Dispatchers;
