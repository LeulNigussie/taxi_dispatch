import React from 'react'
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/index";
// import MainContent from "../../components/MainContent/index";

import styles from "./review_and_rating.module.css";

export default function Review_Rating() {
  return (
    <div className={styles.App}>
       <NavBar /> 
        <div className={styles.mainBody}>
        <SideBar actives="Review & Rating"/> 
        {/* <MainContent /> */}
        </div>
    </div>
  )
}
