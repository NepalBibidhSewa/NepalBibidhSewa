import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    category: String,
    createdAt: { type: Date, default: Date.now }
  });

  const Service = mongoose.model('Service', ServiceSchema);

  export default Service;