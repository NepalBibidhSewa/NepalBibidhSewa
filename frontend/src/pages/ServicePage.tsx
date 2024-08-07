import React from 'react';
import { useParams } from 'react-router-dom';
import devi from '@/assets/deviPrashadTharu.jpg';
import Monoj from '@/assets/Manoj.jpg';
import Baliram from '@/assets/Baliram.jpg';
import Bimal from '@/assets/Bimal.jpg';
import aashok from '@/assets/aashok.jpg';
import Sukram from '@/assets/Sukram.jpg';
import Ratna from '@/assets/Ratna.jpg';

interface Technician {
  id: number;
  name: string;
  image: string;
  location: string;
  services: string[];
}

const technicians: Technician[] = [
  {
    id: 1,
    name: 'देबि प्रसाद थारु',
    image: devi,
    location: 'Nepalgunj',
    services: ['Electrician'],
  },
  {
    id: 2,
    name: 'मनोज रावत',
    image: Monoj,
    location: 'Nepalgunj',
    services: ['Electrician'],
  },
  {
    id: 3,
    name: 'बिमल खनाल',
    image: Bimal,
    location: 'Nepalgunj',
    services: ['Electrician'],
  },
  {
    id: 4,
    name: 'बलिराम लोनिया',
    image: Baliram,
    location: 'Nepalgunj',
    services: ['Painting'],
  },
  {
    id: 5,
    name: 'अशोक चौधरी',
    image: aashok,
    location: 'Nepalgunj',
    services: ['Plumbing'],
  },
  {
    id: 6,
    name: 'सुक्राम थारू',
    image: Sukram,
    location: 'Nepalgunj',
    services: ['Electrician'],
  },
  {
    id: 7,
    name: 'रत्न प्रसाद पाण्डे',
    image: Ratna,
    location: 'Surkhet',
    services: ['Plumbing', 'Electrician'],
  },
  // Add more technicians as needed
];

const ServicePage: React.FC = () => {
  // Extract location and serviceName from the URL parameters
  const params = useParams();
  const location = params.location as string | undefined;
  const serviceName = params.serviceName as string | undefined;

  // Ensure location and serviceName are defined before filtering
  const filteredTechnicians = technicians.filter(
    (technician) =>
      (location ? technician.location === location : true) &&
      (serviceName ? technician.services.some(service => service.toLowerCase() === serviceName.toLowerCase()) : true)
  );

  return (
    <div className="grid md:grid-cols-2 w-full h-screen p-4">
      {/* Sidebar component */}
      <div className="bg-slate-200 p-4">
        <h2 className="text-xl font-semibold mb-4">Technicians in {location || 'unknown location'}</h2>
        <p className="text-lg">Service: {serviceName || 'unknown service'}</p>
      </div>
      {/* Display technicians component */}
      <div className="bg-slate-200 p-4 overflow-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTechnicians.map((technician) => (
            <div key={technician.id} className="bg-white rounded-lg shadow-lg p-6 flex items-center">
              <img
                src={technician.image}
                alt={technician.name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">{technician.name}</h3>
                <p className="text-sm text-gray-600">{technician.location}</p>
                {/* <p className="text-sm text-gray-600">
                  Services: {technician.services.join(', ')}
                </p> */}
              </div>
            </div>
          ))}
          {filteredTechnicians.length === 0 && (
            <p className="text-center text-gray-600 w-full col-span-full">
              No technicians found for this service and location.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ServicePage;
