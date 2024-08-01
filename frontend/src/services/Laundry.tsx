import { useParams } from 'react-router-dom';
import services from './AllServices'; // Assume this is where your services array is stored

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">{service.name}</h1>
      <div className="mt-4">
        {service.content.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetail;
