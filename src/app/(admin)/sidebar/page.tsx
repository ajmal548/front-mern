"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  const handleClickItem = (item:string) => {
    setActive(item);
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className={`fixed left-0 z-40 w-64 h-screen transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-100 ">
          <ul className="space-y-2 font-medium">
            <li onClick={() => handleClickItem('Dashboard')}>
              <Link href={"Vendor#"} className={`flex items-center px-2 py-3 text-gray-900 rounded-lg hover:bg-fuchsia-600 group ${active === 'Dashboard' ? 'bg-fuchsia-600 text-white' : ''}`}>
                <svg className="w-5 h-5 text-fuchsia-600 transition duration-75 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3 font-medium text-lg">Dashboard</span>
              </Link>
            </li>
            <li onClick={() => handleClickItem('Orders')}>
              <Link href="#" className={`flex items-center px-2 py-3 text-gray-900 rounded-lg hover:bg-fuchsia-600 group ${active === 'Orders' ? 'bg-fuchsia-600 text-white' : ''}`}>
                <svg className="w-5 h-5 text-fuchsia-600 transition duration-75 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span className="ms-3 font-medium text-lg">Orders</span>
              </Link>
            </li>
            <li onClick={() => handleClickItem('Customers')}>
              <Link href="#" className={`flex items-center px-2 py-3 text-gray-900 rounded-lg hover:bg-fuchsia-600 group ${active === 'Customers' ? 'bg-fuchsia-600 text-white' : ''}`}>
                <svg className="w-5 h-5 text-fuchsia-600 transition duration-75 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="ms-3 font-medium text-lg">Customers</span>
              </Link>
            </li>
            <li onClick={() => handleClickItem('Products')}>
              <Link href="/Product" className={`flex items-center px-2 py-3 text-gray-900 rounded-lg hover:bg-fuchsia-600 group ${active === 'Products' ? 'bg-fuchsia-600 text-white' : ''}`}>
                <svg className="w-5 h-5 text-fuchsia-600 transition duration-75 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                </svg>
                <span className="ms-3 font-medium text-lg">Products</span>
              </Link>
            </li>
            <li onClick={() => handleClickItem('Catogery')}>
              <Link href="/Catogery" className={`flex items-center px-2 py-3 text-gray-900 rounded-lg hover:bg-fuchsia-600 group ${active === 'Catogery' ? 'bg-fuchsia-600 text-white' : ''}`}>
                <svg className="w-5 h-5 text-fuchsia-600 transition duration-75 group-hover:text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="16" height="6" rx="2" />  <rect x="4" y="14" width="16" height="6" rx="2" /></svg>
                <span className="ms-3 font-medium text-lg">Catogery</span>
              </Link>
            </li>
            <li onClick={() => handleClickItem('Invoice')}>
              <Link href="#" className={`flex items-center px-2 py-3 text-gray-900 rounded-lg hover:bg-fuchsia-600 group ${active === 'Invoice' ? 'bg-fuchsia-600 text-white' : ''}`}>
                <svg className="w-5 h-5 text-fuchsia-600 transition duration-75 group-hover:text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
                  <path stroke="none" d="M0 0h24v24H0z" />  
                  <path d="M14 3v4a1 1 0 0 0 1 1h4" />  
                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />  
                  <line x1="9" y1="7" x2="10" y2="7" />  
                  <line x1="9" y1="13" x2="15" y2="13" />  
                  <line x1="13" y1="17" x2="15" y2="17" />
                </svg>
                <span className="ms-3 font-medium text-lg">Invoice</span>
              </Link>
            </li>
            <li onClick={() => handleClickItem('Help')}>
              <Link href="#" className={`flex items-center px-2 py-3 text-gray-900 rounded-lg hover:bg-fuchsia-600 group ${active === 'Help' ? 'bg-fuchsia-600 text-white' : ''}`}>
                <svg className="w-5 h-5 text-fuchsia-600 transition duration-75 group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  
                  <circle cx="12" cy="12" r="10" />  
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />  
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <span className="ms-3 font-medium text-lg">Help</span>
              </Link>
            </li>
            <li onClick={() => handleClickItem('Settings')}>
              <Link href="#" className={`flex items-center px-2 py-3 text-gray-900 rounded-lg hover:bg-fuchsia-600 group ${active === 'Settings' ? 'bg-fuchsia-600 text-white' : ''}`}>
                <svg className="w-5 h-5 text-fuchsia-600 transition duration-75 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="ms-3 font-medium text-lg">Settings</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  )
}

export default Navbar
