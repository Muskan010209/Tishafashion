import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { HiMenu } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';
import cart1 from '../assets/cart1.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50'>
      <div className='container h-full mx-auto flex items-center justify-between px-4 md:px-0'>
        <Link to="/">
          <div>
            <a className="text-xl md:text-2xl font-bold" href='#'>Tisha Fashion</a>
          </div>
        </Link>

        <div className='flex items-center'>
          <ul className={`fixed md:static top-0 left-0 w-full md:w-auto h-full md:h-auto bg-white md:bg-transparent flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 md:gap-4 transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
            <li className='text-sm md:text-base text-black font-bold hover:text-green-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
              <Link to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li className='text-sm md:text-base text-black font-bold hover:text-green-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
              <Link to="/pages" onClick={toggleMenu}>Pages</Link>
            </li>
            <li className='text-sm md:text-base text-black font-bold hover:text-green-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
              <Link to="/services" onClick={toggleMenu}>Services</Link>
            </li>
            <li className='text-sm md:text-base text-black font-bold hover:text-green-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
              <Link to="/blogs" onClick={toggleMenu}>Blogs</Link>
            </li>
            <li className='text-sm md:text-base text-black font-bold hover:text-green-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
              <Link to="/contact" onClick={toggleMenu}>Contact</Link>
            </li>
            <li className='md:hidden text-sm md:text-base text-black font-bold cursor-pointer duration-300'>
              <button onClick={toggleMenu} className='text-xl'>
                {menuOpen ? <MdClose /> : <HiMenu />}
              </button>
            </li>
          </ul>

          <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-xl'>
              {menuOpen ? <MdClose /> : <HiMenu />}
            </button>
          </div>

          <Link to="/cart">
            <div className='relative ml-2 md:ml-4'>
              <img className='w-5 md:w-6' src={cart1} alt='Cart' />
              <span className='absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center'>
                {productData.length}
              </span>
            </div>
          </Link>

          <Link to="/login">
            <div className='ml-2 md:ml-4'>
              <img className='w-6 h-6 md:w-8 md:h-8 rounded-full' src={userInfo ? userInfo.image : "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt='User Avatar' />
            </div>
          </Link>

          {userInfo && (
            <p className='text-base font-titleFont font-semibold underline underline-offset-2 hidden md:block'>
              {userInfo.name}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
