import React from 'react';
import HomeIcon from "../assets/images/Home.png";
import bgImage from "../assets/images/bgs5.png";
import Image1 from "../assets/images/image62.png";

function Section5() {
  return (
    <section className="px-44 relative"> 
      <img src={bgImage} alt="bg-image" className="absolute top-0 left-0 w-full h-full opacity-90" />
      <div className="relative z-10 flex flex-col justify-around items-center px-4 md:px-36 w-full">
      <img src={HomeIcon} alt="hero-image" className="h-auto"/> 
      <p className='font-medium text-sm md:text-md uppercase text-[#282C3F]'>
       Testimonials
     </p> 
     <p className='mt-1 font-medium text-2xl md:text-4xl text-[#282C3F]'>
          See What Our <span className="text-[#11B2A8]">Customers</span> Are you Saying
    </p> 
        <div className='flex flex-row justify-between items-start mt-2 bg-white shadow rounded-lg mb-2 p-8'>
            <div className='w-[80%] mr-2'>
                <p  className='w-full text-xl md:text-md text-[#282C3F]'>Excellent App! Best in Langley for temp labour! They provide 24/7 support, call 
them and get your labour right away. Also, they pay their labour same day! With 
Grizzly Force you will have efficient labour and better control!</p>
<p className='mt-6 font-medium text-xl md:text-2xl text-[#212A34]'> Tony Hartzenberg</p>
<p className='text-xl md:text-xl text-[#212A34] opacity-60'>CEO, Sugarplum</p>
            </div>
            <div className='w-[20%] '>
             <img src={Image1} alt="hero-image" className="h-auto p-6"/> 
            </div>
        </div>
   
      </div>
    </section>
  )
}

export default Section5