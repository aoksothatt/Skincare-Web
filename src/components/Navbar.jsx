import React from "react";
import logo2 from "../assets/logo2.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="w-full bg-[#F9F8F6] px-20 py-8">
        <div className="flex items-center justify-between ">
          <div className="w-40 relative">
            <img
              className="w-full absolute translate-y-[-49%]"
              src={logo2}
              alt=""
            />
          </div>
          <nav className="flex gap-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/about">About us</NavLink>
            <NavLink to="/contact">Contact us</NavLink>
          </nav>

          <div className="flex text-center gap-10">
            <div className="max-w-md relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full border border-green-800 px-5 rounded-3xl py-1"
              />
              <i className="bi bi-search absolute translate-y-1.5 translate-x-[-175%] text-[14px]"></i>
            </div>
            <div className="flex gap-1.5">
              <div className="w-8 h-8 border border-green-900 rounded-[50%] flex items-center justify-center">
                <i className="bi bi-cart text-green-950 text-[10px]"></i>
              </div>
              <div className="w-35 h-8 bg-green-900 flex gap-1 items-center justify-center rounded-2xl">
                <i className="bi bi-telephone-fill text-white text-[12px]"></i>
                <p className="text-white text-[12px]">+885 962657233</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
