import mongoose from "mongoose";
const { Schema, model } = mongoose;

const carSchema = new Schema({
  brand: String,
  model: String,
  price: Number,
  year: String,
  color: String
});

export default model("vehicule", carSchema);