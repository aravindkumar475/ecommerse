import React from "react";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const data = [
  "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
  "http://amazonproone.vercel.app/static/media/img4.8f7fc6b56e74dba2b6f9.jpg",
  "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
  "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",
];

const Banner = () => {
  const [currentslide, setCurrentSlide] = useState(0);

  const prevSlide=()=>{
    setCurrentSlide(currentslide === 0 ? 3 : (prev)=>prev-1);

  };
  const nextSlide=()=>{
    setCurrentSlide(currentslide === 3 ? 0 : (prev)=>prev+1);

  };
  
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen h-[650px] relative">
        <div 
        style={{transform:`translateX(-${currentslide * 100}vw)`}}
        className=" w-[400vw] h-full flex transition-transform duration-1000">
          <img
            className="w-screen h-full object-cover"
            src={data[0]}
            alt="imgZero"
            loading="priority"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[1]}
            alt="imgOne"
            loading="priority"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[2]}
            alt="imgTwo"
            loading="priority"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[3]}
            alt="imgThree"
            loading="priority"
          />
        </div>
      </div>

      <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
        <div onClick={prevSlide} className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-grey-900 duration-300">
          <FiArrowLeft />
        </div>
        <div onClick={nextSlide} className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-grey-900 duration-300">
          <FiArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Banner;
