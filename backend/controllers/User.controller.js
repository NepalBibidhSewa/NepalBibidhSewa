import UserModel from '../models/User.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import 'dotenv/config.js';
// import twilio from 'twilio'; // Commented out if not used
// const accountSid = process.env.ACCOUNT_SID;
// const authToken = process.env.AUTH_TOKEN;
// const client = twilio(accountSid, authToken);

export const registerUser = async (req, res) => {
  try {
    const { email, password, phoneNumber } = req.body;
    console.log('Incoming payload:', req.body);

    if (!email || !password || !phoneNumber) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const formattedPhoneNumber = `+977${phoneNumber}`;
    console.log('Formatted phone number:', formattedPhoneNumber);

    const newUser = new UserModel({
      email,
      password: hashedPassword,
      phoneNumber: formattedPhoneNumber,
    });

    console.log('New user instance before save:', newUser);

    const saveUser = await newUser.save();
    console.log('User saved:', saveUser);

    // const verification = await client.verify.v2.services(process.env.TWILIO_SERVICE_SID)
    //   .verifications
    //   .create({ to: formattedPhoneNumber, channel: 'sms' });

    // const message = await client.messages.create({
    //   body: `Your verification code is ${verification.sid}`,
    //   to: formattedPhoneNumber,
    //   from: process.env.TWILIO_PHONE_NUMBER, 
    // });

    res.status(200).json({ user: saveUser });

  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await UserModel.findOne({ email });
    if (!findUser) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, findUser.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: findUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ success: true, token });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Login failed', error: error.message });
  }
};
  