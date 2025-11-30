import React from 'react'
import { Link } from "react-router-dom";
import logo2 from '../assets/logo2.png'
const Navbar = () => {
  return (
    <div>
      <header className='w-full bg-[#FFFCFB] px-20 py-8'>
        <div className='flex items-center justify-between '>
            <div className='w-40 relative'>
              <img className='w-full absolute translate-y-[-49%]' src={logo2} alt="" />
            </div>
            <ul className='flex gap-8'>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
            </ul>

            <div className='flex text-center gap-10'>
              
            <div className=' flex gap-1.5'>
              <div className='w-8 h-8 border border-green-900 rounded-[50%] flex items-center justify-center' >
                <i className="bi bi-cart text-green-950 text-[10px]"></i>
              </div>
              <div className=' w-35 h-8 bg-green-900 flex gap-1 items-center justify-center rounded-2xl '>
                <i className="bi bi-telephone-fill text-white text-[12px]"></i>
                <p className='text-white text-[12px]'> +885 962657233</p>
              </div>
              </div>
            </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar