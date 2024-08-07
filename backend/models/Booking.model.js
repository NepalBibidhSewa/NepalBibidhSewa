const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  technicianId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Technician',
    required: true,
  },
  serviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
    required: true,
  },
  scheduledDate: {
    type: Date,
    required: true,
  },
  location: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    zipCode: { type: String, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
  notes: {
    type: String,
    default: '',
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'canceled', 'completed'],
    default: 'pending',
  },
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
BookingSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const Booking = mongoose.model('Booking', BookingSchema);

module.exports = Booking;
