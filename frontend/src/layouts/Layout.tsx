import Footer from "../components/Footer";
import Testimonials from "@/components/Testomonials";
import Hero from "../components/Hero";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      
      <Hero />
      <div className=" container mx-auto flex-1 py-10">{children}</div>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Layout;