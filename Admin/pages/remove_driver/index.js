import React from 'react'
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/index";
// import MainContent from "../../components/MainContent/index";

import styles from "./remove_driver.module.css";

export default function Remove_Driver() {
  return (
    <div className={styles.App}>
       <NavBar /> 
        <div className={styles.mainBody}>
        <SideBar actives="Remove Driver"/> 
        {/* <MainContent /> */}
        </div>
    </div>
  )
}
