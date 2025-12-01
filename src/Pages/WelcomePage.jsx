import React from "react";

const WelcomePage = () => {
  return <div>
    <div className="w-full h-screen bg-[#F9F8F6]">
      <div className="flex gap-5">
        <div className="w-[55%] py-28 px-30">
          <h2 className=" font-bold text-5xl leading-16" >DAVIENA Skincares, <span className=" text-green-900">Effortlessly </span> Yours</h2>
          <p className="text-lg text-gray-700 mt-3">Natural, gentle skincare made to reveal your skin’s healthy glow — simple routines, visible results.</p>
          <button className="mt-5 bg-green-900 text-white py-2 px-6 rounded-3xl"> <i class="bi bi-cart-fill"></i> Shop now</button>
          <div className="mt-30">
            <div className=" flex gap-5">
              <img className="w-35 h-35 rounded-lg" src="https://us.innisfree.com/cdn/shop/files/Category-New_1.jpg?v=1761687237&width=1080" alt="" />
              <div>
              <h2 className="text-xl font-bold">98%</h2>
              <p className="max-w-sm mt-1">Daily moisturizing Green Tea cream that helps deeply hydrate skin for a visibly healthy, glowing complexion.</p>
            </div>
              </div>
          </div>
        </div>
        <div className="w-[45%] h-[727px] ">
          <img className="w-full h-full" src="https://us.innisfree.com/cdn/shop/files/PromoCard_29_1.jpg?v=1763495933&width=1080" alt="" />
        </div>
      </div>
    </div>
  </div>;
};

export default WelcomePage;
