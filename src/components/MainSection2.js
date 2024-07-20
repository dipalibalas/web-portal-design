import React from 'react';
import bgImage from '../assets/images/imgbgs2.png';
import Img1 from '../assets/images/s2Icon1.png';
import Img2 from '../assets/images/s2Icon2.png';
import Img3 from '../assets/images/s2Icon3.png';
import Img4 from '../assets/images/s2Icon4.png';
import Arrow from '../assets/images/arrow.png';

function MainSection2() {
  return (
    <section className="relative mt-12 bg-[#F0FFFF] w-full">
      <img src={bgImage} alt="bg-image" className="absolute top-0 left-0 w-full h-full opacity-10" />
      <div className="relative z-10 flex flex-col justify-around items-center px-4 md:px-36 w-full">
        <p className='mt-8 font-medium text-2xl md:text-3xl text-[#282C3F]'>
          <span className="text-[#11B2A8]">How</span> On-Demand Staffing Works
        </p>
        <div className='mt-12 flex flex-col md:flex-row justify-between items-center w-full space-y-8 md:space-y-0 md:space-x-8'>
          <div className='flex flex-col items-center text-center max-w-[20%]'>
            <img src={Img1} alt="logo" className="w-16 h-16 md:w-20 md:h-20"/>
            <p className='font-small uppercase text-md text-[#282C3F] mt-4'>Step 1</p>
            <p className='font-medium text-xl md:text-2xl text-[#3d435e]'>Quick Signup</p>
            <p className='text-sm md:text-md text-[#555770] w-full'>Our Grizzly Force technology makes it easy to sign up in minutes</p>
          </div>
          <img src={Arrow} alt="arrow" className="w-8 h-8 md:w-32 md:h-auto hidden md:block"/>
          <div className='flex flex-col items-center text-center max-w-[20%]'>
            <img src={Img2} alt="logo" className="w-16 h-16 md:w-20 md:h-20"/>
            <p className='font-small uppercase text-md text-[#282C3F] mt-4'>Step 2</p>
            <p className='font-medium text-xl md:text-2xl text-[#282C3F]'>Post Job 24/7</p>
            <p className='text-sm md:text-md text-[#555770] w-full'>Use our mobile app or web platform from the office or on the go, any time of day</p>
          </div>
          <img src={Arrow} alt="arrow" className="w-8 h-8 md:w-32 md:h-auto hidden md:block"/>
          <div className='flex flex-col items-center text-center max-w-[20%]'>
            <img src={Img3} alt="logo" className="w-16 h-16 md:w-20 md:h-20"/>
            <p className='font-small uppercase text-md text-[#282C3F] mt-4'>Step 3</p>
            <p className='font-medium text-xl md:text-2xl text-[#282C3F]'>View Matches</p>
            <p className='text-sm md:text-md text-[#555770] w-full'>With thousands of ready-to-go workers you can watch your jobs being filled in real time</p>
          </div>
          <img src={Arrow} alt="arrow" className="w-8 h-8 md:w-32 md:h-auto hidden md:block"/>
          <div className='flex flex-col items-center text-center max-w-[20%]'>
            <img src={Img4} alt="logo" className="w-16 h-16 md:w-20 md:h-20"/>
            <p className='font-small uppercase text-md text-[#282C3F] mt-4'>Step 4</p>
            <p className='font-medium text-xl md:text-2xl text-[#282C3F]'>We Do The Best!</p>
            <p className='text-sm md:text-md text-[#555770] w-full'>We take care of payroll, deductions and insurance</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainSection2;
