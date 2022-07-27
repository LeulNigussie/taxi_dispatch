import React, { useEffect, useState } from "react";
import classes from "./main.module.css";
import Table from "../../elements/Table/DriverTable";

import { columns } from "../../Data/TableData";
// import AddPassenger from "./AddPassenger/index";
import Router from "next/router";

function index(props) {
  return (
    <div className={classes.mainContent}>
      <div className={classes.titleDivision}>
        <p className={classes.labler}>Dispatchers</p>
      </div>

      <div className={classes.otherDivision}>
        <Table
          caption="Dispatcher"
          title="Dispatchers"
          TableData={props.dispatchers}
          TableColumn={columns.DispatchersColumns}
        />
      </div>
      {/* <AddPassenger /> */}
    </div>
  );
}

export default index;
