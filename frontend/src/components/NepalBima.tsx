import Logo from "@/assets/reliable-logo.png";
import Marquee from "react-fast-marquee";

const NepalBima = () => {
  return (
    <div>
        <div className="grid grid-cols-1 flex">
        {/* Logo */}
        <div className="text-center mx-auto">
        <img src={Logo}  />
        </div>
        <div className="font-semibold text-2xl bg-yellow-200 rounded-lg p-4">
            <Marquee> आफू र आफ्ना परिवारको सुनिश्चित भविष्य तथा बचत, र भविष्यमा हुने
          जोखिमबाट सुरक्षित र सुनिश्चित रहनका लागि भरपर्दो 
            <span className="text-red-500 m-1 font-bold text-3xl bg-orange-100 p-2"> रिलायबल नेपाल  लाइफ इन्स्योरेन्स </span>
          बाट जीवन बीमा गरौं।
            </Marquee>
        </div>
      </div>
    </div>
  );
};

export default NepalBima;
