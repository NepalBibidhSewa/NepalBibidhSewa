import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { PopoverContent } from "@radix-ui/react-popover";
import { ChevronDown,WashingMachine } from "lucide-react";
import { Link } from "react-router-dom";

const Laundry = () => {
  return (
    <div>
      <Popover>
        <PopoverTrigger className="flex items-center space-x-2 font-bold rounded-2xl py-2 px-3 bg-gray-100 hover:bg-gray-200 transition-colors duration-300 justify-between">
          <div className="flex items-center space-x-2">
               <WashingMachine/>
            <span className="text-xl">Laundry</span>
          </div>
          <span>
            <ChevronDown />
          </span>
        </PopoverTrigger>
        <PopoverContent></PopoverContent>
      </Popover>
    </div>
  );
};

export default Laundry;
