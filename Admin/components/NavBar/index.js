import React from "react";
import classes from "./Navbar.module.css";
import Button from "../elements/Button";


const Index = () => {
  return (
    <div className={classes["navigation"]}>
      <Button type="index" className={classes["index"]}/>
      <Button type="account" />
    </div>
  );
};

export default Index;
