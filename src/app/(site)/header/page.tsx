"use client"
import React, { useState } from 'react';

const Header = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  const toggleAllProductsDropdown = () => {
    setIsDropdown(!isDropdown);
  };

  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <div className='bg-blue-500 px-4 md:px-[5%]'>
      <div className='flex justify-between items-center py-5 border-b border-black border-opacity-15'>
        <div className='text-lg md:text-2xl font-semibold font-serif text-white'>
          <h1>Market</h1>
        </div>
        <div className='relative md:block'>
          <input
            type="search"
            className='p-2 border-none rounded-md focus:outline-none focus:ring-0'
            placeholder="Search product ..."
          />
          <button className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent p-0 border-none'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.41-1.41l4.6 4.6-1.42 1.42-4.6-4.6zM8 14A6 6 0 108 2a6 6 0 000 12z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      {/* mob menu */}
      <div className=' pb-3 md:hidden'>
        <button className='text-white md:hidden' onClick={toggleMenu}>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        {isMenu && (
          <div className='md:hidden'>
            <ul className='bg-yellow-500 text-white font-semibold text-lg py-2'>
              <li className='flex items-center gap-2 px-4 py-2 hover:bg-blue-700 cursor-pointer' onClick={toggleAllProductsDropdown}>
                All products
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </li>
              {isDropdown && (
                <ul className='bg-blue-900 shadow-lg rounded-md mt-2 z-10 w-56 text-lg ml-4 '>
                  <li className='px-4 py-2 hover:bg-blue-500'>Air Conditioner</li>
                  <li className='px-4 py-2 hover:bg-blue-500'>Kitchen appliances</li>
                  <li className='px-4 py-2 hover:bg-blue-500'>PC & laptop</li>
                  <li className='px-4 py-2 hover:bg-blue-500'>Gadgets</li>
                  <li className='px-4 py-2 hover:bg-blue-500'>Smart home</li>
                </ul>
              )}
              <li className='px-4 py-2 hover:bg-blue-700 cursor-pointer'>Home appliances</li>
              <li className='px-4 py-2 hover:bg-blue-700 cursor-pointer'>Refrigerator</li>
              <li className='px-4 py-2 hover:bg-blue-700 cursor-pointer'>New Arrivals</li>
              <li className='px-4 py-2 hover:bg-blue-700 cursor-pointer'>Today's deal</li>
              <li className='px-4 py-2 hover:bg-blue-700 cursor-pointer'>Gift cards</li>
            </ul>
          </div>
        )}
      </div>
      <div className="md:flex justify-between py-4 text-white font-semibold text-lg hidden">
        <div className='relative'>
          <button className='flex items-center gap-2' onClick={toggleAllProductsDropdown}>
            All products
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          {isDropdown && (
            <div className='absolute bg-blue-500 shadow-lg rounded-md mt-2 z-10 w-56 text-lg'>
              <ul>
                <li className='px-4 py-2 hover:bg-blue-700'>Air Conditioner</li>
                <li className='px-4 py-2 hover:bg-blue-700'>Kitchen appliances</li>
                <li className='px-4 py-2 hover:bg-blue-700'>PC & laptop</li>
                <li className='px-4 py-2 hover:bg-blue-700'>Gadgets</li>
                <li className='px-4 py-2 hover:bg-blue-700'>Smart home</li>
              </ul>
            </div>
          )}
        </div>
        <button>Home appliances</button>
        <button>Audio & video</button>
        <button>Refrigerator</button>
        <button>New Arrivals</button>
        <button>Today's deal</button>
        <button>Gift cards</button>
        <div className='px-5 space-x-8'>
          <button><svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          </button>
          <button><svg className="h-7 w-7 " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />  <circle cx="12" cy="7" r="4" /></svg></button>
        </div>
      </div>
    </div>
  );
};

export default Header;
