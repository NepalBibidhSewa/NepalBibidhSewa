import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-darkBlue text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">तपाईको नजिकका उत्कृष्ट प्राविधिक तथा परामर्शदाता खोज्नुहोस्</h2>
        <p className="text-lg mb-8">Experience premium services tailored .</p>
        <Link to='/user-signup'>
        <button className="bg-gold text-white py-2 px-4 rounded hover:bg-darkGray">Get Started</button>
        </Link>
       
      </div>
    </section>
  );
};

export default Hero;
