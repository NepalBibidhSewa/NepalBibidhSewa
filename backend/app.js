import express from "express";
import "dotenv/config.js";
import mongoose from "mongoose";
import cors from "cors";

import userRoutes from "./routes/User.route.js";
import adminRoutes from "./routes/Admin.route.js";
import technicianRoutes from "./routes/Technician.route.js";
import servicesRoutes from './routes/Service.route.js';
import bookingRoutes from './routes/Booking.route.js';

const app = express();
const Port = 3000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to Mongodb");
  })
  .catch((err) => console.log("error", err.message));

// middleware
app.use(
  cors({
    origin: "https://nepalbibishsewa.web.app/",
  })
);
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/technicians", technicianRoutes);
app.use("/api/services", servicesRoutes);
app.use('/api/bookingss', bookingRoutes);
// app.use('/api/applications', applicationRoutes);
// app.use('/api/reviews', reviewRoutes);

app.listen(Port, () => {
  console.log(`Server listening on port ${Port}`);
});
