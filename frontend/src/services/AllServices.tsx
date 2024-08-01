import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Droplet,
  Cctv,
  Hammer,
  Fan,
  ChevronDown,
  MoonStar,
  WashingMachine,
  Paintbrush,
  Table2,
  Cable,
  PanelsTopLeft,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    name: "Laundry",
    icon: WashingMachine,
    content: [
      "Laundry Service in Nepalgunj",
      "Laundry Service in Surkhet",
      "Laundry Service in Kathmandu",
      "Open 7 days a week",
    ],
  },
  {
    name: "Carpentry",
    icon: Hammer,
    content: [
      "Carpentry Service in Nepalgunj",
      "Carpentry Service in Surkhet",
      "Carpentry Service in Kathmandu",
    ],
  },
  {
    name: "Plumbing",
    icon: Droplet,
    content: [
      "Plumbing Service in Nepalgunj",
      "Plumbing Service in Surkhet",
      "Plumbing Service in Kathmandu",
    ],
  },
  {
    name: "AC",
    icon: Fan,
    content: [
      "AC/Fridge Service in Nepalgunj",
      "AC/Fridge Service in Surkhet",
      "AC/Fridge Service in Kathmandu",
    ],
  },
  {
    name: "Jyotish Sewa",
    icon: MoonStar,
    content: ["ज्योतिष सेवा सबैका लागि"],
  },
  {
    name: "Painter Sewa",
    icon: Paintbrush,
    content: [
      "Painting Service in Nepalgunj",
      "Painting Service in Surkhet",
      "Painting Service in Kathmandu",
    ],
  },
  {
    name: "CCTV camera fitting",
    icon: Cctv,
    content: [
      "CCTV Service in Nepalgunj",
      "CCTV Service in Surkhet",
      "CCTV Service in Kathmandu",
    ],
  },
  {
    name: "Tile Marble",
    icon: Table2,
    content: [
      "Tile/Marble Service in Nepalgunj",
      "Tile/Marble Service in Surkhet",
      "Tile/Marble Service in Kathmandu",
    ],
  },
  {
    name: "Electrician",
    icon: Cable,
    content: [
      "Electrician Service in Nepalgunj",
      "Electrician Service in Surkhet",
      "Electrician Service in Kathmandu",
    ],
  },
  {
    name: "Aluminium/UPVC Decorator",
    icon: PanelsTopLeft,
    content: [
      "Aluminium/UPVC Decorator Service in Nepalgunj",
      "Aluminium/UPVC Decorator Service in Surkhet",
      "Aluminium/UPVC Decorator Service in Kathmandu",
    ],
  },
  {
    name: "Home Appliance Service",
    icon: PanelsTopLeft,
    content: [
      "Home Appliance Service in Nepalgunj",
      "Home Appliance Service in Surkhet",
      "Home Appliance Service in Kathmandu",
    ],
  },
  {
    name: "Water Purifier Service",
    icon: PanelsTopLeft,
    content: [
      "Water Purifier Service in Nepalgunj",
      "Water Purifier Service in Surkhet",
      "Water Purifier Service in Kathmandu",
    ],
  },
  {
    name: "Mason",
    icon: PanelsTopLeft,
    content: [
      "Mason Service in Nepalgunj",
      "Mason Service in Surkhet",
      "Mason Service in Kathmandu",
    ],
  },
];

const AllServices = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <Popover key={index}>
            <PopoverTrigger className="flex items-center space-x-2 font-bold rounded-2xl py-2 px-3 bg-gray-100 hover:bg-gray-200 transition-colors duration-300 justify-between">
              <div className="flex items-center space-x-2">
                <service.icon className="w-6 h-6" />
                <span className="text-xl">{service.name}</span>
              </div>
              <span>
                <ChevronDown />
              </span>
            </PopoverTrigger>
            <PopoverContent>
              {service.content.map((item, idx) => (
                <Link
                  to={`/services/${service.name}`}
                  key={idx}
                  className="block py-1 px-2 hover:bg-gray-100 rounded"
                >
                  {item}
                </Link>
              ))}
            </PopoverContent>
          </Popover>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
