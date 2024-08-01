import mongoose from 'mongoose';

const { Schema } = mongoose;

const serviceDetailSchema = new Schema({
  type: { type: String, required: true }, 
  description: { type: String, required: true },
  price: {
    amount: { type: Number, required: true },
    currency: { type: String, required: true }
  },
  location: {
    city: { type: String, required: true },
    region: { type: String, required: true },
    country: { type: String, required: true },
    zipCode: { type: String },
    address: { type: String }
  }
}, { _id: false });

// Define the main service schema
const serviceSchema = new Schema({
  name: { type: String, required: true },
  icon: { type: String }, // URL or path to icon image
  description: { type: String }, // General description of the service
  details: [serviceDetailSchema], // Array of detailed service offerings with location and pricing
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Create and export the Service model
const Service = mongoose.model('Service', serviceSchema);
export default Service;
