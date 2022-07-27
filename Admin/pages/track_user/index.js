import React from 'react'
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/index";
// import MainContent from "../../components/MainContent/index";

import styles from "./track_user.module.css";

export default function Track_User() {
  return (
    <div className={styles.App}>
       <NavBar /> 
        <div className={styles.mainBody}>
        <SideBar actives="Track User"/> 
        {/* <MainContent /> */}
        </div>
    </div>
  )
}
