import express from 'express';
import { registertechnicians, loginTechnician } from '../controllers/Technician.controller.js';

const router = express.Router();

router.post('/register', registertechnicians);
router.post('/login', loginTechnician);

export default router;