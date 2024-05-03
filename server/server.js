const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const connectDB = require("./config/db");

require("dotenv").config();

const app = express();
app.use(
  cors({
    origin: process.env.ORG_URL,
    credentials: true,
  })
);
app.use(bodyParser.json({ limit: "10mb" }));

connectDB();

app.get("/", (req, res) => {
  res.send("<h1>Hello! Welcome to the Ecommerce Website</h1>");
});
app.use("/auth", require("./routes/authRoute.js"));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
