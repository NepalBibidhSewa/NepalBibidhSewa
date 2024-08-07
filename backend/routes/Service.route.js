import express from 'express';
import { createService, getAllServices, getServicesById, getServiceName } from '../controllers/Service.contoller.js';

const router = express.Router();

router.get('/', getAllServices);
router.post('/', createService);
router.post('/:id', getServicesById);
router.get('/:serviceName', getServiceName);

export default router;