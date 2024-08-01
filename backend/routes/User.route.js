import express from 'express';
import { registerUser, loginUser } from '../controllers/User.controller.js';

const router = express.Router(); 

router.post('/register', registerUser);
router.post('/login', loginUser);
// router.get('/regiser/send-code', registerUserNumber);

export default router;