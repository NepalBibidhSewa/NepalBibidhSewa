import serviceModel from "../models/Services.model.js";

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


export const getServicesById = async (req, res) => {
  try {
    const id = req.params.id;
    const service = await serviceModel.findById(id);

    if (!service) {
      return res.status(404).json({ success: false, message: 'Service not found' });
    }

    res.status(200).json({ success: true, service });
  } catch (error) {
    console.error('Error fetching service:', error);
    res.status(500).send("Internal server error");
  }
};

export const getServiceName = async (req, res) => {
  const { serviceName } = req.params;
  const { location } = req.query;

  try {
    const service = await serviceModel.findOne({
      name: serviceName,
      locations: location,
    });

    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }

    res.json(service);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
}