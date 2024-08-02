import express from "express";
import {
  registertechnicians,
  loginTechnician,
  getTechnicianById,
  getALlTechnicians,
} from "../controllers/Technician.controller.js";

const router = express.Router();

router.post("/register", registertechnicians);
router.post("/login", loginTechnician);
router.get("/:id", getTechnicianById);
router.get("/", getALlTechnicians);

export default router;
