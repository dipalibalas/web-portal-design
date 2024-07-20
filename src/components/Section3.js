import React from "react";
import Slider from "react-slick";
import slideOne from "../assets/images/slide1.png";
import slideTwo from "../assets/images/slied2.png";
import slideThree from "../assets/images/slide3.png";
import slideFour from "../assets/images/slied4.png";
import slideFive from "../assets/images/slied5.png";
import slideSix from "../assets/images/slied6.png";

const Section3 = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    centerMode: true,
    centerPadding: "0",
    focusOnSelect: true,
  };

  return (
    <section className="flex flex-col justify-around pl-44 items-center mt-4">
        <p  className='mt-4 font-medium text-lg md:text-lg text-[#282C3F] uppercase pr-44'>We Are Serving In</p>
        <p className='mt-1 mb-4 font-medium text-2xl md:text-3xl text-[#282C3F] pr-44'><span className="text-[#11B2A8]">Industries</span> We are working With</p>
        <div className="carousel-container">
  <Slider {...settings}>
    <div className="slide">
      <img src={slideOne} alt="Slide 1"/>
      <p>Warehousing</p>
    </div>
    <div className="slide">
      <img src={slideTwo} alt="Slide 2"/>
      <p>Manufacturing</p>
    </div>
    <div className="slide">
      <img src={slideThree} alt="Slide 3"/>
      <p>Food & Beverage</p>
    </div>
    <div className="slide">
      <img src={slideFour} alt="Slide 4"/>
      <p>Hospitality</p>
    </div>
    <div className="slide">
      <img src={slideFive} alt="Slide 5"/>
      <p>Restaurant</p>
    </div>
    <div className="slide">
      <img src={slideSix} alt="Slide 6"/>
      <p>Event Services</p>
    </div>
  </Slider>
</div>

    </section>
  
  );
};



export default Section3