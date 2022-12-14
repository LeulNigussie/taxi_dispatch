import React, { useState, useEffect } from "react";
import classes from "./Navbar.module.css";
import Button from "../elements/Button";
import socketIoClient from "socket.io-client";
import axios from "axios";

import io from "socket.io-client";
// import io from "socket.io-client";
// let socket;

// const socket = Socket("http://192.168.8.103:3001", { origins: "*:*" });

const Index = () => {
  const [analysis, setAnalysis] = useState("");

  const headers = {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "*",
  };

  let socket = io("http://localhost:8000", { transports: ["websocket"] });

  useEffect(() => {
    socket.on("hello", (msg) => {
      console.log("useEffect");
      alert("This is emmiited");
      setAnalysis(msg);
    });
  }, []);
  const EmittingSocket = () => {
    console.log("Emmiting..");
    setAnalysis("Emitting");
    // socket.emit("passenger", "Message from dispatcher to passengers");
    socket.emit("inputChange", "Emmiting...");
  };

  return (
    <div className={classes["navigation"]}>
      <label
        style={{
          background: "#555",
          color: " white",
          // border: none;
          /* padding: 0.8rem 1.5rem; */
          borderRadius: "5px",
          transition: "all 0.4s",
          marginLeft: "200px",
          fontSize: "20px",
          padding: "10px",
          display: "flex",
          flexDirection: "row",
          textAlign: "center",
        }}
        htmlFor="some"
      >
        {analysis}
      </label>
    </div>
  );
};

export default Index;
