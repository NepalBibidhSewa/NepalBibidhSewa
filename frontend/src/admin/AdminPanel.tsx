import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const AdminPanel: React.FC = () => {
  const [services, setServices] = useState<{ id: number; name: string }[]>([]);
  const [newService, setNewService] = useState<string>("");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('/api/services');
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  const handleAddService = async () => {
    try {
      await axios.post('/api/services', { name: newService });
      setNewService("");
      const response = await axios.get('/api/services');
      setServices(response.data);
    } catch (error) {
      console.error('Error adding service:', error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <Card>
        <CardHeader>
          <h2 className="text-xl">Add New Service</h2>
        </CardHeader>
        <CardContent>
          <Input
            type="text"
            value={newService}
            onChange={(e) => setNewService(e.target.value)}
            placeholder="Service Name"
          />
        </CardContent>
        <CardFooter>
          <Button onClick={handleAddService}>Add Service</Button>
        </CardFooter>
      </Card>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Existing Services</h2>
        <ul>
          {services.map((service) => (
            <li key={service.id}>{service.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPanel;
