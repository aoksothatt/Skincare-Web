import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { TiHeartOutline } from "react-icons/ti";

const Card = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-100 cursor-pointer p-1">
      <img
        width={300}
        className="rounded-lg mb-2 mx-auto"
        src="https://i.pinimg.com/736x/de/38/53/de3853872ab412765bea049f8899712b.jpg"
        alt=""
      />
      <h2 className="text-md font-bold mb-2">SPF50+&PA+++ Sunscreen｜TY OEM</h2>
      <div className="flex justify-between items-center mb-4 px-2 ">
        <p className=" text-xl">$5</p>
        <div className="flex gap-2.5 text-2xl mt-3">
          <div className="bg-yellow-100 border-gray-300 rounded p-2 hover:bg-red-200 cursor-pointer">
            <FiShoppingCart />
          </div>
          <div className="bg-yellow-100 border-gray-300 rounded p-2 hover:bg-red-200 cursor-pointer">
            <TiHeartOutline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
