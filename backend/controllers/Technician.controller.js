import Technician from "../models/Technician.model.js";
import bcrypt from "bcrypt";
import 'dotenv/config.js';
import jwt from "jsonwebtoken";



export const registertechnicians = async (req, res) => {
  try {
    const { name, email, phoneNumber, password, specialty } = req.body;
    console.log(req.body);
    const newTechnicians = new Technician({
      name,
      email,
      contactNumber: phoneNumber,
      password,
      specialty,
    });

    const savedTechnician = await newTechnicians.save();
    return res.status(201).json({ success: "true", message: savedTechnician });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const loginTechnician = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    if (!email || !password)
      return res
        .status(500)
        .json({ message: "email and password is required" });
    const findTechnician = await Technician.findOne({ email });
    if (!findTechnician)
      return res.status(401).send("User not found, please register account");
    const isMatched = await bcrypt.compare(password, findTechnician.password);
    if (!isMatched) return res.status(404).send("Inavalid password or email");
    const token = jwt.sign({ id: findTechnician._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ success: true, token });
  } catch (error) {
    return res.status(500).send(error.message)
  }
};
