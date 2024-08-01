import React from 'react';
import AllServices from './AllServices';
import { Hammer, WashingMachine } from 'lucide-react';

const services = [
  {
    id: 'laundry',
    name: 'Laundry',
    icon: WashingMachine,
    content: [
      'Laundry Service in Nepalgunj',
      'Affordable and reliable laundry service',
      'Open 7 days a week',
    ],
  },
  {
    id: 'carpentry',
    name: 'Carpentry',
    icon: Hammer,
    content: [
      'Place content for Cleaning here.',
      'Professional cleaning services',
      'Eco-friendly cleaning products',
    ],
  },
  // Add other services similarly...
];

const App: React.FC = () => {
  return (
    <div>
      <AllServices services={services} />
    </div>
  );
};

export default App;
