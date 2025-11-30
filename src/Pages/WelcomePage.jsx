import React from "react";
import form from "../assets/form.png"
const WelcomePage = () => {
  return <div>
    <div className="w-full h-screen py-35 px-25">
      <div className=" flex justify-between">
        <div className="w-[25%]">
          <h2 className="text-6xl leading-15 "> <span className="flex gap-4"> Glow <img className="w-40 my-auto h-15 rounded-4xl" src="https://media.istockphoto.com/id/2182600309/photo/beauty-portraits-of-beautiful-young-asian-women.jpg?s=612x612&w=0&k=20&c=CNLoIjsY-YHu0sF82lixz_CQYiVgjXJnb1Z0yWoXcdc=" alt="" /> </span> 
          <span className=" text-green-800">Naturally </span>Every Day</h2>
          <button className=" mt-10 border border-green-900 w-55 h-13 rounded-xl flex items-center justify-center gap-2">View All Product <i className="bi bi-arrow-up-right-square-fill text-green-800 text-[42px]"></i></button>
          <div className="mt-20">
            <div className="w-60 font-bold text-lg relative">Make with<span className="text-5xl text-green-800 absolute translate-y-[-23%] translate-x-2">99%</span>  <div>
              <strong>Natural Ingredient</strong> for Pure, Healthy Skin.
            </div>
            </div>
          </div>
        </div>
        <div className="w-[40%] h-[450px] bg-[#5E936C] rounded-[500px_90px] relative ">
          <img className="w-full absolute bottom-8 auto-scroll" src={form} alt="" />
          <h2 className="absolute top-[-19%] auto-scroll left-88.5   bg-green-800 text-white font-bold py-2 px-3 rounded-3xl">New Product</h2>
        </div>
        <div className="w-[25%] px-5">
          <img className="w-60 h-70 rounded-[90%_60%_60%_20%] relative" src="https://us.innisfree.com/cdn/shop/files/PromoCard_29_1.jpg?v=1763495933&width=1080" alt="" />
          <div className=" absolute w-30 h-30 items-center text-center flex justify-center flex-col bg-gray-800 text-white rounded-[50%] translate-x-[150%] translate-y-[-280%]" >
            <h2 className=" text-3xl font-bold">5.5K</h2>
            <p>Products</p>
          </div>
          <p className="w-80 font-medium mt-8">Daily moisturizing Green Tea cream that helps deeply hydrate skin for a visibly healthy, glowing complexion.</p>
          <div className="w-50 mt-10 rounded-xl h-15 border border-green-800 py-1 px-1 flex gap-3  ">
            <img className="  w-15 rounded-xl relative " src="https://media.vanityfair.com/photos/5f8a0436fcee2a89680237c6/master/w_2560%2Cc_limit/Lisa-Blackpink-MAC-Lede.jpg" alt="" />
            <div className="flex flex-col py-1">
              <h2 className=" font-bold">4.9</h2>
              <div className="flex gap-0.5">
              {[...Array(5)].map((_, index) => (
              <i key={index} className="bi bi-star-half text-yellow-400"></i> 
              ))}
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default WelcomePage;
