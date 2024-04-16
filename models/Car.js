import { Schema } from "mongoose";

const carSchema = new Schema({
   make: String,
   model: String,
   productionYear: Date,
   fuel: String,
   hp: Number,
   sold: Boolean
});