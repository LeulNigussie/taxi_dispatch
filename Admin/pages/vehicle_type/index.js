import React from 'react'
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/index";
// import MainContent from "../../components/MainContent/index";

import styles from "./vehicle_type.module.css";

export default function Vehicle_Type() {
  return (
    <div className={styles.App}>
       <NavBar /> 
        <div className={styles.mainBody}>
        <SideBar actives="Vehicle Type"/> 
        {/* <MainContent /> */}
        </div>
    </div>
  )
}
