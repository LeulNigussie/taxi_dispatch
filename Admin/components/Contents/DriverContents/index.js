import React, { useEffect, useState } from "react";
import classes from "./main.module.css";
import Table from "../../elements/Table/DriverTable";

import { columns } from "../../Data/TableData";
// import AddPassenger from "./AddPassenger/index";
import Router from "next/router";

function index(props) {
  const changeRowData = (data) => {
    console.log(data);
    Router.push("/drivers/edit_drivers/" + data.phoneNumber);
  };
  return (
    <div className={classes.mainContent}>
      <div className={classes.titleDivision}>
        <p className={classes.labler}>Drivers</p>
      </div>
      {/* <button
        onClick={() => Router.push("/drivers/add_drivers")}
        className={classes.addPassenger}
      >
        Add Driver
      </button> */}
      <div className={classes.otherDivision}>
        <Table
          changeRowData={changeRowData}
          caption="Drivers"
          title="Drivers"
          TableData={props.drivers}
          TableColumn={columns.DriversColumns}
        />
      </div>
      {/* <AddPassenger /> */}
    </div>
  );
}

export default index;
