import React from 'react';
import homevideo from '../assets/home.mp4';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src={homevideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white z-10 flex flex-col items-center">
          <div className="flex flex-col sm:flex-row items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-2 sm:mb-4">We Build</h2>
              <h3 className="text-2xl sm:text-3xl font-medium">Trust That Never Falls</h3>
            </div>
            {/* border border-white hatau ya nhi puchna hai */}
            <div className="mt-4 sm:mt-0 sm:ml-4 w-[200px] sm:w-[250px] h-[50px] sm:h-[60px] bg-[rgba(253,169,3,0.25)] border border-white backdrop-blur-[8px] rounded-[8px] flex items-center justify-center">
  <Link to="/services" className="font-poppins font-semibold text-base sm:text-lg leading-[24px] sm:leading-[28px] text-[#D3D3CA] rounded-lg">
    View our services
  </Link>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
