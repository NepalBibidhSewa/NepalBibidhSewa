import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { Separator } from "@/components/ui/separator"
import { Button } from "./ui/button";
import { Link } from 'react-router-dom';
  

const MobileNav = () => {
  return (
    <Sheet>
    <SheetTrigger> <Menu className="text-gray-700"/> </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>
        <Link to='/'>
        <h1 className=" text-red-500 text-2xl font-bold">Nepal <span className='text-blue-900'>Bibidh</span> <span className='
         text-gray-700'>Sewa</span></h1></Link>
            </SheetTitle>
            <Separator/>
        <SheetDescription className="py-6 m-auto flex">
          <Button className="flex-1 font-bold ">
          <Link to='/user-signup'>
          Login/Signup
          </Link>
             </Button>
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
  
  )
}

export default MobileNav;