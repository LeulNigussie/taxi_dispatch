import React from "react";
import SideBar from "../../../components/SideBar/SideBar";
import NavBar from "../../../components/NavBar/index";
// import MainContent from "../../components/MainContent/index";
// import PassengerContents from "../../components/Contents/PassengerContents/index";
import EditDriver from "../../../components/Contents/DriverContents/EditDriver/index";

import styles from "./edit_drivers.module.css";
import { useRouter } from "next/router";

export default function Drivers() {
  const router = useRouter();
  return (
    <div className={styles.App}>
      <NavBar />
      <div className={styles.mainBody}>
        <SideBar actives="Drivers" />
        <EditDriver phoneNumber={router.query.phoneNumber} />
      </div>
    </div>
  );
}
