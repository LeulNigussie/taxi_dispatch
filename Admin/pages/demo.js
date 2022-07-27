import { useEffect, useState } from "react";
import io from "socket.io-client";
let socket;

const Home = () => {
  const [input, setInput] = useState("");
  const [dd, setDd] = useState([1, 2]);

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
      // setInput(msg);
    });
  };

  const onChangeHandler = (e) => {
    socket.emit("input-change", input);
    setInput("");
  };

  return (
    <div
      style={{
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <input
        style={{
          marginLeft: "200px",
          marginTop: "100px",
          padding: "20px",
          width: "300px",
        }}
        placeholder="Type something"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={onChangeHandler}
        style={{ marginLeft: "200px", padding: "20px", width: "200px" }}
      >
        Send
      </button>
    </div>
  );
};

export default Home;
