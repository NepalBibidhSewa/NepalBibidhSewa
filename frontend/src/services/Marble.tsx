
const services = [
  { name: "Tile Fitting Wall", price: 0 },
  { name: "Tile Fitting Floor", price: 0 },
  { name: "Tile Fitting Roof", price: 0 },
  { name: "Marble Fitting Floor", price: 0 },
  { name: "Marble Fitting Wall", price: 0 },
];

const Marble = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="bg-gray-100 w-64 min-h-screen p-4">
        <h1 className="font-bold text-2xl mb-4">Tile/Marble Services</h1>
        <ul className="space-y-2">
          {services.map((service, index) => (
            <li
              key={index}
              className="flex justify-between items-center py-2 px-4 bg-white shadow rounded hover:bg-gray-50 transition"
            >
              <span>{service.name}</span>
              <span>Rs. {service.price}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-semibold mb-4">Our Tile and Marble Services</h2>
        <p className="mb-4">
          We offer a range of tile and marble fitting services designed to meet your needs. 
          From wall to floor fittings, our team ensures high-quality installation and excellent 
          customer service. Explore our services below to find the right solution for your project.
        </p>
        <p>
          If you have any specific requirements or need a custom quote, feel free to contact us. 
          Our experts are here to help you with all your tiling and marble fitting needs.
        </p>
      </div>
    </div>
  );
};

export default Marble;
