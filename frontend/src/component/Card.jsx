import React from 'react';
import about from "../assets/about.jpg";

const Card = ({image,name}) => {
  return (
    <div className="w-[400px] h-[300px] bg-[rgba(38,23,11,0.1)] border-2 border-[#524C46] backdrop-blur-[50px] rounded-[20px] overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 group">
<img 
  src={image} 
  alt="About Us" 
  className="relative w-full h-full object-cover rounded-[20px] transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100" 
/>

      <div className="absolute inset-0 flex justify-center items-center bg-[#1f1e24] bg-opacity-60 rounded-[20px] transition-opacity duration-300 ease-in-out group-hover:opacity-0">
        <h2 className="text-white text-xl font-semibold">
        {name}
        </h2>
      </div>
    </div>
  );
}

export default Card;
