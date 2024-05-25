"use client"
import React, { useState } from 'react'

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  }

  return (
    <div className='flex justify-between items-center p-5 bg-sky-200 border-b border-black '>
      <div>
        <h1 className='text-xl font-medium'>_____ Market</h1>
      </div>
      <div className='flex items-center gap-3'>
        <div>
          <input type="search" placeholder='Search' className='border-0 p-1 rounded-md' />
        </div>
        <div className='relative'>
          <div
            className='bg-white rounded-md flex items-center cursor-pointer'
            onClick={toggleDropdown}
          >
            <svg className="h-8 w-8 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <svg className="h-5 w-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
          {dropdown && (
            <div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg p-3 flex flex-col items-center'>
              <h1 className='font-medium'>Name</h1>
              <p className='text-xs'>Vendor</p>
              <button className='block px-3 py-1 text-gray-800 bg-red-600 hover:bg-gray-400 rounded-md mt-2'>
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header;
