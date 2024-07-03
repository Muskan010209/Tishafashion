import React from 'react';
import payment1 from '../assets/payment1.png';
import { FaFacebookF, FaInstagram, FaYoutube, FaHome } from 'react-icons/fa';
import { ImGithub } from 'react-icons/im';

const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-20 font-titleFont'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left'>
        {/* Company Column */}
        <div className='flex flex-col gap-7 items-center md:items-start'>
          <a className='text-2xl font-bold text-white' href='#'>Tisha Fashion</a>
          <p className='text-white text-sm tracking-wide'>
            &copy; 2024 Tisha Fashion. All rights reserved.
          </p>
          <img className='w-56 mt-4' src={payment1} alt='Payment Methods' />
        </div>
        
        {/* Services Column */}
        <div className='flex flex-col gap-4 items-center md:items-start'>
          <h2 className='text-xl font-bold text-white'>Services</h2>
          <a href='#' className='hover:text-white duration-300 cursor-pointer'>Custom Tailoring</a>
          <a href='#' className='hover:text-white duration-300 cursor-pointer'>Design Consultation</a>
          <a href='#' className='hover:text-white duration-300 cursor-pointer'>Delivery Services</a>
          <a href='#' className='hover:text-white duration-300 cursor-pointer'>Customer Support</a>
        </div>

        {/* Help Column */}
        <div className='flex flex-col gap-4 items-center md:items-start'>
          <h2 className='text-xl font-bold text-white'>Help</h2>
          <a href='#' className='hover:text-white duration-300 cursor-pointer'>FAQs</a>
          <a href='#' className='hover:text-white duration-300 cursor-pointer'>Shipping & Returns</a>
          <a href='#' className='hover:text-white duration-300 cursor-pointer'>Order Tracking</a>
          <a href='#' className='hover:text-white duration-300 cursor-pointer'>Payment Options</a>
        </div>

        {/* Contact Column */}
        <div className='flex flex-col gap-4 items-center md:items-start'>
          <h2 className='text-xl font-bold text-white'>Contact Us</h2>
          <a href='#' className='hover:text-white duration-300 cursor-pointer'>Email: support@tishafashion.com</a>
          <a href='#' className='hover:text-white duration-300 cursor-pointer'>Phone: +1 234 567 890</a>
          <a href='#' className='hover:text-white duration-300 cursor-pointer'>Address: 123 Fashion Street, New York, NY</a>
          <div className='flex gap-4 text-lg text-gray-400 mt-4 justify-center md:justify-start'>
            <ImGithub className='hover:text-white duration-300 cursor-pointer' />
            <FaFacebookF className='hover:text-white duration-300 cursor-pointer' />
            <FaInstagram className='hover:text-white duration-300 cursor-pointer' />
            <FaYoutube className='hover:text-white duration-300 cursor-pointer' />
            <FaHome className='hover:text-white duration-300 cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
