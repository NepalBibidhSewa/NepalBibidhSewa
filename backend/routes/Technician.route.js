import express from "express";
import {
  registertechnicians,
  loginTechnician,
  getTechnicianById,
  getALlTechnicians,
} from "../controllers/Technician.controller.js";

const router = express.Router();

router.get("/", getALlTechnicians);
router.post("/register", registertechnicians);
router.post("/login", loginTechnician);
router.get("/:id", getTechnicianById);


export default router;
