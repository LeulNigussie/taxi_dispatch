import React from 'react'
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/index";
// import MainContent from "../../components/MainContent/index";

import styles from "./remove_dispatcher.module.css";

export default function Remove_Dispatcher() {
  return (
    <div className={styles.App}>
       <NavBar /> 
        <div className={styles.mainBody}>
        <SideBar actives="Remove Dispatcher"/> 
        {/* <MainContent /> */}
        </div>
    </div>
  )
}
