import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Productcard = ({ products }) => {
  return (
    <div className="group relative">
      <div className="w-full h-96 cursor-pointer overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
          src={products.image}
          alt="imges"
        />
      </div>

      
        <div className="w-full border-[1px] px-2 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-titleFont text-base font-bold">
                {products.title.substring(0, 15)}
              </h2>
            </div>

            <div className="flex justify-end gap-2 relative overflow-hidden w-28 text-sm">
              <div className="flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500 ">
                <p className="line-through text-gray-500">
                  {products.oldprice}
                </p>
                <p className="font-semibold">${products.price}</p>
              </div>
              <p className="hidden absolute z-50 w-[100px] text-gray-500 hover:text-gray-900  items-center gap-1 top-0   group-hover:flex transform-translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500">
                Add to cart
                <span>
                  <BsArrowRight />
                </span>
              </p>
            </div>
          </div>

          <div>
            <p>{products.category}</p>
          </div>
          <div>{products.isNew && <p>Sale</p>}</div>

        </div>
    </div>
  );
};

export default Productcard;
