import {Link} from 'react-router-dom'
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className=" p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to='/'>
        <h1 className=" text-red-500 text-2xl font-bold">Nepal <span className='text-blue-900'>Bibidh</span> <span className='
         text-gray-700'>Sewa</span></h1></Link>
         
         <div className='md:hidden '>
        <MobileNav/>

         </div>
        
        <nav className='hidden md:block'>
          <ul className="flex space-x-4">
            <Link to='/about' className=" hover:text-gold">About </Link>
            <Link to='/sevices' className=" hover:text-gold">Services</Link>
            <Link to='/user-signup' className=" hover:text-gold">Signup</Link> 
          </ul>
        </nav>
        
      </div>
    </header>
  )
}

export default Header;