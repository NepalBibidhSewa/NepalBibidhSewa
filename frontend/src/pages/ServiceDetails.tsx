// import { useParams } from 'react-router-dom';
// import { useState, useEffect } from 'react';

// // Define types for service details
// interface Pricing {
//   [key: string]: number; // Location to price mapping
// }

// interface ServiceDetails {
//   description: string;
//   locations: string[];
//   pricing: Pricing;
// }

// // Define a type for the service data
// interface ServiceData {
//   [key: string]: ServiceDetails;
// }

// // Mocked service data (replace with API call in production)
// const serviceData: ServiceData = {
//   "Laundry": {
//     description: "Laundry service includes washing, drying, and ironing clothes.",
//     locations: ["Nepalgunj", "Surkhet", "Kathmandu"],
//     pricing: {
//       "Nepalgunj": 1000,
//       "Surkhet": 1200,
//       "Kathmandu": 1500
//     }
//   },
//   "Plumbing": {
//     description: "Plumbing services include repair and installation of pipes and fixtures.",
//     locations: ["Nepalgunj", "Surkhet", "Kathmandu"],
//     pricing: {
//       "Nepalgunj": 1500,
//       "Surkhet": 1800,
//       "Kathmandu": 2000
//     }
//   },
//   // Add more services as needed
// };

// const ServiceDetail: React.FC = () => {
//   const { serviceName } = useParams<{ serviceName: string }>(); // Get the service name from the URL
//   const [service, setService] = useState<ServiceDetails | null>(null);

//   useEffect(() => {
//     // Fetch service details based on the serviceName
//     // Replace this with your API call
//     const fetchServiceDetails = () => {
//       // Mocking service fetching
//       const serviceDetails = serviceData[serviceName];
//       if (serviceDetails) {
//         setService(serviceDetails);
//       } else {
//         // Handle service not found
//         setService({ description: "Service not found.", locations: [], pricing: {} });
//       }
//     };

//     fetchServiceDetails();
//   }, [serviceName]);

//   if (!service) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">{serviceName} Service Details</h1>
//       <p className="mb-4">{service.description}</p>
//       <h2 className="text-xl font-semibold mb-2">Available Locations</h2>
//       <ul className="list-disc list-inside mb-4">
//         {service.locations.map((location, index) => (
//           <li key={index}>{location}</li>
//         ))}
//       </ul>
//       <h2 className="text-xl font-semibold mb-2">Pricing</h2>
//       <ul className="list-disc list-inside">
//         {Object.entries(service.pricing).map(([location, price], index) => (
//           <li key={index}>
//             {location}: Rs. {price}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ServiceDetail;
