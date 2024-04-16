import express from "express";
import mongoose from "mongoose";

import carRoutes from "./routes/car-routes.js";

const app = express();
const PORT = 3000;

const connectToDb = async () => {
await mongoose.connect("mongodb://127.0.0.1:27017/carShop");
}

connectToDb().then(() => console.log("Connected"))
.catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Working...");
});

app.use("/api/cars", carRoutes);

app.listen(PORT, () => {
  console.log("Listening on port:" + PORT);
});