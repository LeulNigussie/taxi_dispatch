import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/index";
// import MainContent from "../../components/MainContent/index";
// import RegisterDispatcher from "../../";
import styles from "./register_dispatcher.module.css";

import RegisterDispatcherContents from "../../components/Contents/DispatcherContents/addDispatcher/index";

export default function Register_Dispatcher() {
  return (
    <div className={styles.App}>
      <NavBar />
      <div className={styles.mainBody}>
        <SideBar actives="Register Dispatcher" />
        <RegisterDispatcherContents />
      </div>
    </div>
  );
}
