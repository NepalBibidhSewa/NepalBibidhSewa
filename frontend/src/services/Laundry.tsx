import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Sidebar from './LaundryService';

const center = { lat: 27.7172, lng: 85.3240 }; // Default center (Kathmandu, Nepal)

const LaundryService: React.FC = () => {
  const [technicians, setTechnicians] = useState<any[]>([]);
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string | undefined>("");
  const [serviceDetails, setServiceDetails] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [totalCost, setTotalCost] = useState<number>(0);

  useEffect(() => {
    const socket = io('http://localhost:3000');

    socket.on('techniciansUpdate', (data) => {
      setTechnicians(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/api/bookings", { name, phone, serviceDetails, totalCost });
      // Handle successful booking (e.g., redirect or show success message)
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow p-4 overflow-y-auto">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-darkGray mb-6">Laundry Service</h1>
          <p className="text-darkGray mb-4">
            Our reliable and efficient laundry services will keep your clothes fresh and clean. We offer a variety of options to meet your needs.
          </p>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-darkGray mb-4">Available Technicians</h2>
            <div className="mb-8" style={{ height: '400px' }}>
              <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                <GoogleMap
                  mapContainerStyle={{ height: '100%', width: '100%' }}
                  center={center}
                  zoom={12}
                >
                  {technicians.map((technician) => technician.online && (
                    <Marker
                      key={technician.id}
                      position={{ lat: technician.location.lat, lng: technician.location.lng }}
                      label={technician.name}
                    />
                  ))}
                </GoogleMap>
              </LoadScript>
            </div>

            <h2 className="text-2xl font-semibold text-darkGray mb-4">Book a Service</h2>
            <form onSubmit={handleSubmit}>
              <Card>
                <CardHeader>
                  <CardTitle>Book a Laundry Service</CardTitle>
                  <CardDescription>Fill in the details below to book a service</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <Input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
                      className="w-full"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <Input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Your Phone Number"
                      className="w-full"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <Textarea
                      value={serviceDetails}
                      onChange={(e) => setServiceDetails(e.target.value)}
                      placeholder="Service Details"
                      className="w-full"
                      required
                    />
                  </div>
                  {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                </CardContent>
                <CardFooter>
                  <Button
                    type="submit"
                    className="w-full bg-gray-800 text-white hover:bg-gray-600"
                  >
                    Submit
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-darkGray mb-4">Cart</h2>
            <Card>
              <CardHeader>
                <CardTitle>Payment Details</CardTitle>
                <CardDescription>Review your cart and proceed to payment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p>Total Cost: ${totalCost}</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  type="submit"
                  className="w-full bg-gray-800 text-white hover:bg-gray-600"
                  onClick={handleSubmit}
                >
                  Pay Now
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaundryService;
