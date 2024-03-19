import React from "react";
import {BsHandbag} from 'react-icons/bs';
import user from "../assets/user.jpg"
 
const Header = () => {
  return (
    <div className=" w-full h-20 border-b-[2px] bg-white border-b-grey-800 font-titleFont sticky top-0 z-50">
      <div className=" max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div>
          <h1 className=" font-bold  text-2xl">AK's LIFESTYLE</h1>
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline  underline-offset-2 decoration-[1px] cursor-pointer duration-300">Home</li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Pages</li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">shop</li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Element</li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Blog</li>
          </ul>
          <div className="relative">
           <h3 className="w-8 text-4xl"><BsHandbag /></h3>
           <span className="absolute w-6 top-3 left-3">0</span>
           
         </div>
         <div><img className="w-8 h-8  rounded-full" src={user} alt="Avatar"/></div>
         
          
        </div>
       
        
      </div>
    </div>
  );
};

export default Header;
