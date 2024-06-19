import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='bg-gray-700 text-white py-[3%] px-[7%]'>
      <div className='grid md:grid-cols-3 grid-cols-3 gap-4 pb-12'>
        <div className='col-span-1 md:text-2xl font-semibold font-serif text-blue-500'>Market</div>
        <div className='col-span-2 grid md:grid-cols-3 grid-cols-2'>
          <div className='col-span-1'>
            <h1 className='md:text-xl font-medium md:mb-20 mb-12 '>Shop</h1>
            <div className='flex flex-col space-y-2 text-blue-600'>
              <Link href={"#"}>Hot deals</Link>
              <Link href={"#"}>Categories</Link>
              <Link href={"#"}>Brands</Link>
              <Link href={"#"}>Rebates</Link>
              <Link href={"#"}>Weekly deals</Link>
            </div>
          </div>
          <div className='col-span-1'>
            <h1 className='md:text-xl font-medium md:mb-20 mb-12'>Need help</h1>
            <div className='flex flex-col space-y-2 text-blue-600'>
              <Link href={"#"}>Contact</Link>
              <Link href={"#"}>Order tracking</Link>
              <Link href={"#"}>FAQs</Link>
              <Link href={"#"}>Return policy</Link>
              <Link href={"#"}>Privacy policy</Link>
            </div>
          </div>
          <div className='col-span-1'>
            <h1 className='md:text-xl font-medium md:mb-20 mb-12 '>Contact</h1>
            <div className='flex flex-col space-y-2 text-blue-600'>
              <Link href={"#"}>123 Fifth Avenue, New York, NY 10160</Link>
              <Link href={"#"}>contact@info.com</Link>
              <Link href={"#"}>929-242-6868</Link>
            </div>
          </div>
        </div>
      </div>
      <div className=' border-t border-gray-500 pt-3'>
        <p className='text-gray-300 text-xs md:text-sm'>© 2024 Electronic Store. Powered by Electronic Store</p>
      </div>
    </div>
  );
}

export default Footer;
