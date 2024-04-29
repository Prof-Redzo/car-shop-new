import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import bodyParser from "body-parser";

import carRoutes from "./routes/car-routes.js";
import authRoutes from "./routes/auth-routes.js";
import userRoutes from "./routes/user-routes.js";


const app = express();
const PORT = process.env.PORT || 3000;

const connectToDb = async () => {
await mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`);
}

connectToDb().then(() => console.log("Connected"))
.catch((err) => console.log(err));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Working...");
});

app.use("/api/cars", carRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/users", userRoutes);


app.listen(PORT, () => {
  console.log("Listening on port:" + PORT);
});