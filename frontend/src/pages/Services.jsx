import React from 'react';
import Card from '../component/Card';
import serve from "../assets/serve.jpg";
import swimmingpool from "../assets/45.jpg"; 
import ducting from "../assets/ducting.jpg"; 
import partner3 from "../assets/luxury.jpg"; 
import stonebonding from "../assets/stonebonding.jpg"; 
import slabclasting from "../assets/slabclasting.jpg"; 





const Services = () => {
  const data = [
    {
      image: swimmingpool,
      name: "pool"             
    },
    {
      image: ducting, 
      name: "ducting"            
    },
    {
      image: partner3,
      name: "luxury Room"              
    },
    {
      name:"slabclasting",
      image:slabclasting
    },
    {
      name: "stonebonding",
      image: stonebonding
    }

  ]
    return (
    <div className=' w-screen  relative'>
      <img src={serve} alt="Serve" className='w-full h-full object-cover' />
      <div className='absolute top-1/4 left-0 w-full  flex flex-wrap justify-center gap-4'>
       
  {data.map((items,index)=>(
    <Card key={index} image={items.image} name={items.name} />
  ))}

      </div>
    </div>
  );
}

export default Services;
