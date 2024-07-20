import React from "react";
import bgImg  from "../assets/images/bgs4.png";
import Img1 from "../assets/images/section4Img.png";
import RightIcon from "../assets/images/Group.png";
import Vector from "../assets/images/Vector.png";
import ArrowIcon from "../assets/images/horizontal-arrow.png";

const Section6 = () => {
  
 return (
    <section className="flex flex-row justify-around items-center px-44">
   
        

        <div className="md:w-[50%] relative">
        <img src={bgImg} alt="bg-image" className="absolute top-0 left-20 w-[70%] h-full opacity-50" />
            <img src={Img1} alt="hero-image" className="h-auto"/>       
        </div>
        <div className="flex flex-col md:w-[50%] m-12 items-center">
            <p className="font-medium md:text-md text-[#282C3F]">For Employers</p>
            <p className="font-medium md:text-4xl text-[#282C3F]">Workforce<span className="text-[#11B2A8]"> At Your</span> </p>
            <p className="font-medium md:text-4xl text-[#282C3F]">Fingertips</p>
            <img src={Vector} alt="hero-image" className="h-auto mt-4 w-[30%]"/> 
         <div className="flex flex-col justify-between mt-8 w-full px-12">
         <p className="p-1 text-[#282C3F] text-xl text-200 flex flex-row"> <img src={RightIcon} alt="hero-image" className="h-4 w-8 px-2 mt-2"/> Easy to use mobile & web platform</p> 
         <p className="p-1 text-[#282C3F] text-xl text-200 flex flex-row"><img src={RightIcon} alt="hero-image" className="h-4 w-8 px-2 mt-2"/><span>45,000+ </span>workers</p>
         <p className="p-1 text-[#282C3F] text-xl text-200 flex flex-row"><img src={RightIcon} alt="hero-image" className="h-4 w-8 px-2 mt-2"/>Realtime <span>tracking</span></p>
         <p className="p-1 text-[#282C3F] text-xl text-200 flex flex-row"><img src={RightIcon} alt="hero-image" className="h-4 w-8 px-2 mt-2"/><span>95% </span>fullfillment rate</p>
         <p className="p-1 text-[#282C3F] text-xl text-200 flex flex-row"><img src={RightIcon} alt="hero-image" className="h-4 w-8 px-2 mt-2"/>Preferred worker list</p>
         </div>
         <div className="text-md text-[#282C3F] mt-4 flex flex-row self-start border-b-[#11B2A8] border-b-2 ml-16">Learn More<img src={ArrowIcon} alt="hero-image" className="pl-4 h-auto"/></div>
        </div>
    </section>
  );
};

export default Section6
