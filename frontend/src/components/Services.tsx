import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { Zap, Droplet, Wind, Hammer } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-darkGray mb-8">Our Services</h2>
        <Carousel>
          <CarouselContent className='cursor-pointer'>
            <CarouselItem className='w-8 shadow-md'>
              <Link to="/services/laundry" className="block">
                <div className="bg-white p-6 rounded shadow-md">
                  <Zap className="text-gold text-5xl mx-auto mb-4" />
                  <h3 className="text-darkBlue text-2xl font-semibold mb-4">Laundry Service</h3>
                  <p className="text-darkGray">Reliable and efficient laundry services to keep your clothes fresh and clean.</p>
                </div>
              </Link>
            </CarouselItem>
            <CarouselItem className='w-8 shadow-md'>
              <Link to="/services/ac" className="block">
                <div className="bg-white p-6 rounded shadow-md">
                  <Wind className="text-gold text-5xl mx-auto mb-4" />
                  <h3 className="text-darkBlue text-2xl font-semibold mb-4">AC</h3>
                  <p className="text-darkGray">Professional repair services for your fridge and air conditioning units.</p>
                </div>
              </Link>
            </CarouselItem>
            <CarouselItem className='w-8 shadow-md'>
              <Link to="/services/plumbing" className="block">
                <div className="bg-white p-6 rounded shadow-md">
                  <Droplet className="text-gold text-5xl mx-auto mb-4" />
                  <h3 className="text-darkBlue text-2xl font-semibold mb-4">Plumbing</h3>
                  <p className="text-darkGray">Expert plumbing services to address all your water-related issues.</p>
                </div>
              </Link>
            </CarouselItem>
            <CarouselItem className='w-8 shadow-md'>
              <Link to="/services/carpentry" className="block">
                <div className="bg-white p-6 rounded shadow-md">
                  <Hammer className="text-gold text-5xl mx-auto mb-4" />
                  <h3 className="text-darkBlue text-2xl font-semibold mb-4">Carpentry</h3>
                  <p className="text-darkGray">Skilled carpentry services for custom furniture and repairs.</p>
                </div>
              </Link>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Services;
