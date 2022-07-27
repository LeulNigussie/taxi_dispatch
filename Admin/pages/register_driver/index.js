import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/index";
// import MainContent from "../../components/MainContent/index";

import styles from "./register_driver.module.css";

import RegisterDispatcherContents from "../../components/Contents/DriverContents/AddDriver/index";

export default function Register_Driver() {
  return (
    <div className={styles.App}>
      <NavBar />
      <div className={styles.mainBody}>
        <SideBar actives="Register Driver" />
        <RegisterDispatcherContents />
      </div>
    </div>
  );
}
