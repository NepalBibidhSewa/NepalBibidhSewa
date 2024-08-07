import mongoose from 'mongoose';

const { Schema } = mongoose;

const ServiceSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    // required: true,
  },
  price: {
    type: Number,
    // required: true,
  },
  availableCities: [{
    city: {
      type: String,
      required: true,
    },
    state: String,
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Middleware to set the updatedAt field before saving
ServiceSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const Service = mongoose.model('Service', ServiceSchema);

export default Service;
