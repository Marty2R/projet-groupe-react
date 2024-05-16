import mongoose from 'mongoose';

let db = mongoose.connection;

mongoose.connect(process.env.MONGO_URL)

db.on("errors", console.error(bind(console, 'MongoDB connection error')));