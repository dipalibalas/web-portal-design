import React from "react";
import Image1 from "../assets/images/ImgS1.png";
import MobileImg from "../assets/images/mobileImg.png";
import bgImage from "../assets/images/mountains.png";

const MainSection1 = () => {
  
 return (
    <section className="flex flex-row justify-around items-center mt-12"
    //  style={{ backgroundImage: `url(${bgImage})` }}
    >
        <div className="flex flex-col md:w-[50%] m-12 items-center">
            <p className="font-medium md:text-6xl text-[#282C3F]">Modern</p>
            <p className="font-medium md:text-6xl text-[#282C3F]">Temp<span className="text-[#11B2A8]">Labour</span> </p>
            <p className="font-medium md:text-6xl text-[#282C3F]">Solutions</p>
         <div className="flex flex-row justify-between mt-12 w-[50%] px-12">
         <button className="px-4 py-2 rounded-lg bg-[#353843] text-[#FFFFFF] text-md text-200">Find Workers</button> 
         <button className="px-4 py-2 rounded-lg bg-[#11B2A8] text-[#FFFFFF] text-md text-200">Find a Job</button>
         </div>
        </div>

        <div className="md:w-[50%]">
            <img src={Image1} alt="hero-image" className="h-auto"/>       
        </div>
    </section>
  );
};

export default MainSection1
