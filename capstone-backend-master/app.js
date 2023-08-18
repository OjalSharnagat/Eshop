const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require('./index');

const connectionString =
  "mongodb+srv://mrigank94:GqtjZDKarka3wHps@todo.iwjw6.mongodb.net/mentos";

mongoose
  .connect(connectionString)
  .then((res) => console.log("Connected to db successfully"))
  .catch((ex) => console.log(ex));

const app = express();

const corsOptions = {
  exposedHeaders: ["x-auth-token", "Authorization"],
};

app.use(cors(corsOptions));

app.use(cors({
  origin: "http://localhost:3000", // Replace with your frontend URL
  credentials: true, // Allow sending cookies and headers with the request
}));
app.use(express.json());

app.use('/', routes);

app.get('/', (req, res) => {
  res.send('Hello, World!'); // You can send any response you want here
});

app.listen(3001, () => console.log("Listening on port 3001....."));
