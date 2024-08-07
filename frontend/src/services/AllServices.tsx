import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Droplet,
  Cctv,
  Hammer,
  ChevronDown,
  WashingMachine,
  Paintbrush,
  Table2,
  Cable,
  PanelsTopLeft,
  CookingPot,
} from "lucide-react";
import { Link } from "react-router-dom";
import JyotishLogo from "@/assets/astrilogy.jpg";
import { GiTap, GiBrickWall } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";
import { GiSolarPower } from "react-icons/gi";

const services = [
  {
    name: "Laundry",
    icon: WashingMachine,
    locations: ["Nepalgunj", "Surkhet", "Kathmandu"],
  },
  {
    name: "Carpentry",
    icon: Hammer,
    locations: ["Nepalgunj", "Surkhet", "Kathmandu"],
  },
  {
    name: "Plumbing",
    icon: GiTap,
    locations: ["Nepalgunj", "Surkhet", "Kathmandu"],
  },
  {
    name: "AC-Fridge",
    icon: TbAirConditioning,
    locations: ["Nepalgunj", "Surkhet", "Kathmandu"],
  },
  {
    name: "Jyotish",
    icon: () => <img src={JyotishLogo} className="w-6 h-6 object-cover" />,
    locations: ["All"],
    description: "ज्योतिष सेवा सबैका लागि",
  },
  {
    name: "Painting",
    icon: Paintbrush,
    locations: ["Nepalgunj", "Surkhet", "Kathmandu"],
  },
  {
    name: "CCTV camera fitting",
    icon: Cctv,
    locations: ["Nepalgunj", "Surkhet", "Kathmandu"],
  },
  {
    name: "Tile-Marble fitting",
    icon: Table2,
    locations: ["Nepalgunj", "Surkhet", "Kathmandu"],
  },
  {
    name: "Electrician",
    icon: Cable,
    locations: ["Nepalgunj", "Surkhet", "Kathmandu"],
  },
  {
    name: "Aluminium-UPVC Decorator",
    icon: PanelsTopLeft,
    locations: ["Nepalgunj", "Surkhet", "Kathmandu"],
  },
  {
    name: "Home Appliance Service",
    icon: CookingPot,
    locations: ["Nepalgunj", "Surkhet", "Kathmandu"],
  },
  {
    name: "Water Purifier Service",
    icon: Droplet,
    locations: ["Nepalgunj", "Surkhet", "Kathmandu"],
  },
  {
    name: "Mason",
    icon: GiBrickWall,
    locations: ["Nepalgunj", "Surkhet", "Kathmandu"],
  },
  {
    name: "Solar Technician",
    icon: GiSolarPower,
    locations: ["Nepalgunj", "Surkhet", "Kathmandu"],
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
              {service.locations.map((location, idx) => (
                <Link
                  to={`/services/${location}/${service.name}`}
                  key={idx}
                  className="block py-1 px-2 hover:bg-gray-100 rounded"
                >
                  {`${service.name} Service in ${location}`}
                </Link>
              ))}
              {service.description && (
                <div className="py-1 px-2 text-sm text-gray-500">
                  {service.description}
                </div>
              )}
            </PopoverContent>
          </Popover>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
