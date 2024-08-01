import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Droplet, Cctv , Hammer, Fan, ChevronDown,MoonStar, WashingMachine, Paintbrush, Table2  } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    name: "Laundry",
    icon: WashingMachine,
    content: [
      "Laundry Service in Nepalgunj",
      "Affordable and reliable laundry service",
      "Open 7 days a week"
    ],
  },
  { 
    name: "Carpentry", 
    icon: Hammer, 
    content: [
      "Place content for Cleaning here.",
      "Professional cleaning services",
      "Eco-friendly cleaning products"
    ] 
  },
  {
    name: "Plumbing",
    icon: Droplet,
    content: [
      "Place content for Plumbing here.",
      "Emergency plumbing services",
      "Experienced plumbers available"
    ],
  },
  { 
    name: "AC", 
    icon: Fan, 
    content: [
      "Place content for AC repair here.",
      "AC installation and repair",
      "Maintenance services available"
    ] 
  },
  {
      name: "Jyotish Sewa",
      icon: MoonStar ,
      content: [
        "ज्योतिष सेवा सबैका लागि"
      ]
  },
  {
      name: "Painter Sewa",
      icon: Paintbrush,
      content: [
        "Painting service"
      ]
  },
  {
    name: "CCTV camera fitting",
    icon: Cctv,
    content: [
      "Best camera fitting service"
    ]
    
  },
  {
    name: "Tile Marble.",
    icon: Table2 ,
    content: [
      "Best camera fitting service"
    ]
    
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
              <span><ChevronDown /></span>
            </PopoverTrigger>
            <PopoverContent>
              {service.content.map((item, idx) => (
                <Link to="/services/:id">
                  <ul key={idx}>{item}</ul>
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
