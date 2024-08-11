import Logo from "@/assets/reliable-logo.png";
import Marquee from "react-fast-marquee";
import { ExternalLink } from 'react-external-link';

const NepalBima = () => {
  return (
    <div className="grid grid-cols-1">
      {/* Logo */}
      <div className="text-center mx-auto">
        <ExternalLink href="https://reliablelife.com.np" className="pointer">
          <img src={Logo} alt="Reliable Nepal Life Insurance Logo" />
        </ExternalLink>
      </div>
      {/* Marquee Text */}
      <div className="font-semibold text-2xl bg-yellow-200 rounded-lg p-4 mt-4">
        <Marquee gradient={false}>
          आफू र आफ्ना परिवारको सुनिश्चित भविष्य तथा बचत, र भविष्यमा हुने
          जोखिमबाट सुरक्षित र सुनिश्चित रहनका लागि भरपर्दो
          <span className="text-red-500 m-1 font-bold text-3xl bg-orange-100 p-2">
            रिलायबल नेपाल लाइफ इन्स्योरेन्स
          </span>
          बाट जीवन बीमा गरौं।
        </Marquee>
      </div>
    </div>
  );
};

export default NepalBima;
