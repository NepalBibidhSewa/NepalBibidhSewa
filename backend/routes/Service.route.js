import express from 'express';
import { getAllServices } from '../controllers/Service.contoller.js';

const router = express.Router();

router.get('/services', getAllServices);
router.post('/')

export default router;