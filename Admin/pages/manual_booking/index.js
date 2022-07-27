import React from 'react'
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/index";
// import MainContent from "../../components/MainContent/index";
import Booking from "../../components/Contents/ManualBookingContent"
import styles from "./manual_booking.module.css";

export default function Manual_Booking() {
  return (
    <div className={styles.App}>
       <NavBar /> 
        <div className={styles.mainBody}>
        <SideBar actives="Manual Booking"/> 
        <Booking />
        </div>
    </div>
  )
}
