import mongoose from "mongoose";
import "dotenv/config";

let db = mongoose.connection;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => console.error("MongoDB connection error:", err));

db.on("error", (error) => console.error("Connection error:", error));
