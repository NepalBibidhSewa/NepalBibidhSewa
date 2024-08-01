import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const technicianSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    unique: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, 'Please enter a valid email address']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 6
  },
  specialty: {
    type: String,
    required: [true, 'Specialty is required'],
    trim: true
  },
  bio: {
    type: String,
    trim: true
  },
  contactNumber: {
    type: String,
    required: [true, 'Contact number is required'],
    trim: true
  },
  availabilityStatus: {
    type: String,
    enum: ['Available', 'Busy', 'Offline'],
    default: 'Available'
  },
  location: {
    type: {
      type: String,
      enum: ['Point'], 
      required: false
    },
    coordinates: {
      type: [Number],
      required: false
    }
  }
}, { timestamps: true });

// Index for geospatial queries
technicianSchema.index({ location: '2dsphere' });

// Pre-save hook to hash the password before saving
technicianSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); // Only hash the password if it has been modified (or is new)

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

// Method to compare password during login
technicianSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const Technician = mongoose.model('Technician', technicianSchema);

export default Technician;
