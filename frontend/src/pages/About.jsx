import React from 'react';
import about from "../assets/about.jpg";
import partner1 from "../assets/partner1.png"; 
import partner2 from "../assets/partner2.png"; 
import partner3 from "../assets/partner3.png"; 
import partner4 from "../assets/partner4.png";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center">
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] md:h-[100vh] overflow-hidden">
        <img src={about} alt="About Us" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-3xl md:text-5xl font-semibold">Know Us Better</h1>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-4xl mx-auto p-6 md:p-10 bg-white shadow-lg rounded-lg mt-8">
        <p className="text-gray-700 text-base md:text-lg mb-4 leading-relaxed">
          In 2004, A.S. Constructions opened the first office in a fast-developing city, Thane. We had drive, commitment, energy, and a vision.
        </p>
        <p className="text-gray-700 text-base md:text-lg mb-4 leading-relaxed">
          With our four staff, a handful of carpenters, two folding card tables, and a computer, we got to the field! Today, two decades later, we’ve grown to become a comprehensive construction management team and are ready to expand.
        </p>
        <p className="text-gray-700 text-base md:text-lg mb-4 leading-relaxed">
          We do more than build spaces — we create customized solutions for new construction, additions, and renovations. We love what we do and we’re driven to bring creative solutions and expertise to every challenge.
        </p>
        <p className="text-gray-700 text-base md:text-lg mb-4 leading-relaxed">
          Presently, we are extending our horizons and providing services to Private & Public sectors, as well as taking Government contracts.
        </p>
        <p className="text-center text-lg md:text-xl font-semibold text-gray-900">
          Ready to build the next great thing with us?{' '}
          <Link className="text-blue-600 hover:underline" to={"/contact"}>Let's talk</Link>
        </p>
      </div>

      {/* Partners Section */}
      <div className="max-w-4xl mx-auto mt-10">
        <h4 className="text-center text-lg md:text-xl font-bold text-gray-800 mb-6">Trusted by the Best in Business!</h4>
        <div className="flex flex-wrap justify-center gap-6">
          <img src={partner1} alt="Partner 1" className="w-20 h-20 md:w-24 md:h-24 object-contain" />
          <img src={partner2} alt="Partner 2" className="w-20 h-20 md:w-24 md:h-24 object-contain" />
          <img src={partner3} alt="Partner 3" className="w-20 h-20 md:w-24 md:h-24 object-contain" />
          <img src={partner4} alt="Partner 4" className="w-20 h-20 md:w-24 md:h-24 object-contain" />
        </div>
      </div>
    </div>
  );
}

export default About;
