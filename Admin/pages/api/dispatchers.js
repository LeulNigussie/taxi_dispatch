import fs from "fs";
import path from "path";
import { MongoClient } from "mongodb";

async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://alken:ezvukZlSa1J1rabk@cluster0.prrif.mongodb.net/taxi_dispatcher_system?retryWrites=true&w=majority"
  );
  return client;
}

async function insertDocument(client, document) {
  const db = client.db();
  const result = await db.collection("dispatchers").insertOne(document);
}

async function DispatcherHandler(req, res) {
  if (req.method === "GET") {
    let client;

    try {
      client = await connectDatabase();
    } catch (err) {
      res.status(500).json({ message: "Couldn't connect to database" });
      return;
    }
    try {
      const db = client.db();
      const document = await db.collection("dispatchers").find().toArray();

      res.status(200).json({
        dispatchers: document,
      });
      client.close();
    } catch (error) {
      res.status(500).json({ message: "Couldn't get the data" });
    }
  } else if (req.method === "POST") {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const phoneNumber = req.body.phoneNumber;
    const profileImage = req.body.profileImage;
    const address = req.body.address;
    const status = "active";

    const newDispatcher = {
      name: name,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
      profileImage: profileImage,
      address: address,
      status: status,
    };

    let client;
    try {
      client = await connectDatabase();
    } catch (err) {
      res.status(500).json({ message: "Couldn't connect to database" });
      return;
    }
    try {
      await insertDocument(client, newDispatcher);
      // client.close();
    } catch (err) {
      res.status(500).json({ message: "Couldn't store the data" });
      return;
    }

    res
      .status(201)
      .json({ message: "Dispatcher registered successfully", stat: "OK" });
  }
}

export default DispatcherHandler;
