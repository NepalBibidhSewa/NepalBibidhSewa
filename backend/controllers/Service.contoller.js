import serviceModel from "../models/Services.model";

export const getAllServices = async (req, res) => {
  try {
    const services = await serviceModel.find({});

    if (!services.length) {
      return res.status(404).json({ message: "No services found." });
    }
    res.status(200).json(services);
  } catch (err) {
    console.error("Error fetching services:", err);
    res.status(500).json({ message: "Internal server error." });
  }
};

export const createService = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const newService = new serviceModel({
      name,
      description,
      price,
    });
    const savedService = await newService.save();
    return res.status(201).json({ success: true, message: savedService });
  } catch (err) {
    console.error("Error creating service:", err);
    res.status(500).json({ message: "Internal server error." });
  }
};
