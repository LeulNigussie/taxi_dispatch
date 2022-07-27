import React, { useEffect, useState } from "react";
import classes from "./main.module.css";
import Card from "../../elements/Card/Card";
import { tripStatistics, rideStatistics } from "../../Data/data";
import Charts from "../../elements/Chart/Charts";

import { chartsData } from "../../Data/data";
import { cardsData } from "../../Data/data";
import PieChart from "../../elements/PieChart/PieChart";
import RadialChart from "../../elements/RadialChart/RadialChart";
import Table from "../../elements/Table/Table";
import { columns } from "../../Data/TableData";

import dynamic from "next/dynamic";
// const Charts = dynamic(() => import("../../elements/Chart/Charts"));
// const PieChart = dynamic(() => import("../../elements/PieChart/PieChart"));
// const RadialChart = dynamic(() =>
//   import("../../elements/RadialChart/RadialChart")
// );
// const Table = dynamic(() => import("../../elements/Table/Table"));
// const Card = dynamic(() => import("../../elements/Card/Card"));

function index(props) {
  // const tripStatistics = [
  //   { id: 1, name: "Vehicle", amount: drivers.length, Icon: vehicle },
  //   { id: 2, name: "Drivers", amount: drivers.length, Icon: driver },
  //   { id: 3, name: "Passengers", amount: passengers.length, Icon: passenger },
  //   { id: 4, name: "Income", amount: 660.43, Icon: revenue },
  // ];

  return (
    <div className={classes.mainContent}>
      <div className={classes.titleDivision}>
        <p className={classes.labler}>Dashboard</p>
        <p className={classes.dashboardAlert}>Admin Logged In</p>
      </div>
      <div className={classes.otherDivision}>
        <Card
          drivers={drivers}
          passengers={passengers}
          statistics={tripStatistics}
          title="General Statistics"
        />
        <Card statistics={rideStatistics} title="Ride Statistics" />

        <PieChart statistics={rideStatistics} title="Driver Statistics" />
        <RadialChart title="Ride Statistics" />
        {/* <Card statistics={rideStatistics}  title="Ride Statistics" />  */}
        <Charts cardsData={cardsData[0]} chartsData={chartsData[0]} />
        <Charts cardsData={cardsData[1]} chartsData={chartsData[1]} />
        <Table
          caption="Recent Rides"
          title="The Table Components"
          Tablelocation="/api/recentRides"
          TableColumn={columns.RecentDataColumns}
        />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const connection_string = "http://localhost:3000/api/";
  const headers = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  const [passengersDB, driversDB] = await Promise.all([
    fetch(connection_string + "passengers", headers),
    fetch(connection_string + "drivers", headers),
  ]);

  const passengersCollection = await passengersDB.json();
  const passengers = passengersCollection.passengers;

  const driversCollection = await driversDB.json();
  const drivers = driversCollection.drivers;

  return {
    props: {
      passengers,
      drivers,
    },
  };
}

export default index;
