import React from 'react'
import SideBar from "../../../components/SideBar/SideBar";
import NavBar from "../../../components/NavBar/index";
// import MainContent from "../../components/MainContent/index";
// import PassengerContents from "../../components/Contents/PassengerContents/index";
import AddPassengers from "../../../components/Contents/PassengerContents/AddPassenger/index";

import styles from "./add_passengers.module.css";

export default function Passengers() {
  return (
    <div className={styles.App}>
       <NavBar /> 
        <div className={styles.mainBody}>
        <SideBar actives="Passengers"/> 
        <AddPassengers />
        </div>
    </div>
  )
}













