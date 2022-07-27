import React from 'react'
import SideBar from "../../../components/SideBar/SideBar";
import NavBar from "../../../components/NavBar/index";
// import MainContent from "../../components/MainContent/index";
// import PassengerContents from "../../components/Contents/PassengerContents/index";
import AddDrivers from "../../../components/Contents/DriverContents/AddDriver/index";

import styles from "./add_drivers.module.css";

export default function Drivers() {
  return (
    <div className={styles.App}>
       <NavBar /> 
        <div className={styles.mainBody}>
        <SideBar actives="Drivers"/> 
        <AddDrivers />
        </div>
    </div>
  )
}













