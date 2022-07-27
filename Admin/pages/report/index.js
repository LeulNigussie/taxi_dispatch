import React from 'react'
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/index";
import styles from "./report.module.css";

export default function Report() {
  return (
    <div className={styles.App}>
       <NavBar /> 
        <div className={styles.mainBody}>
        <SideBar actives="Report"/> 
        {/* <MainContent /> */}
        </div>
    </div>
  )
}
