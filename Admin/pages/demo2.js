import React, { useState, useEffect } from "react";
import io from "socket.io-client";

let socket;
function demo2() {
  const [newMessage, setNewMessage] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    socketInitializer(), [];
  });

  const socketInitializer = async () => {
    await fetch("http://localhost:3000/api/socket");
    socket = io();

    socket.on("connect", () => {
      console.log("connected");
    });

    socket.on("update-input", (msg) => {
      setInput(msg);
      let mess = [];
      mess.push(msg);
      if (newMessage.length === 0) {
        setNewMessage(mess);
      } else {
        mess = [...newMessage, ...mess];
        setNewMessage(mess);
      }
    });
  };

  return (
    <div>
      <h4>Socket io messages</h4>
      {newMessage.map((news) => (
        <ul>
          <li>{news}</li>
        </ul>
      ))}
    </div>
  );
}

export default demo2;
