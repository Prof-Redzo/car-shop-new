import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
   make: String,
   model: String,
   productionYear: Date,
   fuel: String,
   hp: Number,
   sold: {type:Boolean, default: false},
   price: Number,
   created: {type: Date, default: Date.now},
   owner: String
   //userId: Schema.Types.UUID,
});

const Car = mongoose.model("Car", carSchema);

export default Car;