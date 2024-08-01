import Admin from '../models/Admin.model.js';
import jwt from 'jsonwebtoken';

// Register a new admin
export const registerAdmin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const newAdmin = new Admin({ username, password });
    const savedAdmin = await newAdmin.save();
    console.log(savedAdmin);
    return res.status(201).send('Successfully registered');
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }
};

// Login an admin
export const loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }

    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ success: true, token });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Login failed', error: error.message });
  }
};
