import React from 'react'
import Link from 'next/link';
import Home from "../home/page";
import AllProduct from '../allProduct/page';
import TodayDeal from '../today/page';
import Gadget from '../(categories)/gadget/page';
import Audio from '../(categories)/audio/page';
import Home_Applance from '../(categories)/home_Appliance/page';
import AC from '../(categories)/air_conditioner/page';
import Laptop from '../(categories)/pc/page';
import Refrigerator from '../(categories)/refrigerator/page';
import Kitchen from '../(categories)/kitchen/page';
const Main = () => {
    return (
        <>
            <Home />
            <div className='px-[7%] md:relative  md:mt-[-5%]'>
                <div className=' bg-white grid grid-cols-2 md:grid-cols-4 gap-4 w-full my-10  overflow-hidden md:overflow-visible '>
                    <div className='p-4 col-span-1 md:border-r md:flex items-center gap-2'>
                        <svg className="h-9 w-9 text-blue-500 " width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="7" cy="17" r="2" />  <circle cx="17" cy="17" r="2" />  <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />  <line x1="3" y1="9" x2="7" y2="9" /></svg>
                        <section> <p className='font-semibold'>Free shipping</p>
                            <p className='text-gray-500 font-medium'>When you spend $80 or more</p></section>
                    </div>
                    <div className='p-4 col-span-1 md:border-r md:flex items-center gap-2'>
                        <svg className="h-9 w-9 text-blue-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />  <line x1="12" y1="12" x2="12" y2="12.01" />  <line x1="8" y1="12" x2="8" y2="12.01" />  <line x1="16" y1="12" x2="16" y2="12.01" /></svg>
                        <section>
                            <p className='font-semibold'>We are available 24/7</p>
                            <p className='text-gray-500 font-medium'>Need help? contact us anytime</p>
                        </section>
                    </div>
                    <div className='p-4 col-span-1 md:border-r md:flex items-center gap-2'>
                        <svg className="h-9 w-9 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <polyline points="1 4 1 10 7 10" />  <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" /></svg>
                        <section>
                            <p className='font-semibold'>Satisfied or return</p>
                            <p className='text-gray-500 font-medium'>Easy 30-day return policy </p>
                        </section>
                    </div>
                    <div className='p-4 col-span-1 md:border-r md:flex items-center gap-2'>
                        <svg className="h-9 w-9 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                        <section>
                            <p className='font-semibold'>100% secure payments </p>
                            <p className='text-gray-500 font-medium'>Visa, Mastercard, Stripe, PayPal</p></section>
                    </div>
                </div>
            </div>
            <TodayDeal />
            <div className='px-[7%] py-3 grid grid-cols-1 md:grid-cols-2 md:gap-4 '>
                <button className='col-span-1'>
                    <img
                        src="src\category\mobcase.jpg"
                        alt=""
                        className=" w-full rounded-sm shadow-md  shadow-slate-600"
                    />
                </button>
                <button className='col-span-1'>
                    <img src="src\category\smart acc.jpg"
                        alt=""
                        className=" w-full rounded-sm shadow-md shadow-slate-600" />
                </button>
            </div>
            <AllProduct />
            <div className='grid md:grid-cols-3 grid-cols-1 px-[7%] py-3 gap-5'>
                <div className='bg-zinc-200 p-[5%] rounded-md border border-zinc-300 grid grid-cols-2'>
                    <div className='space-y-3  col-span-1 md:relative absolute'>
                        <p className='text-5xl font-semibold'>Wireless headphone</p>
                        <p className='text-slate-500'>Starting at $49</p>
                        <div>
                            <Link href={'#'} className='text-blue-500 font-semibold'>
                                Shop Now
                            </Link>
                        </div>
                    </div>
                    <div className='col-span-1 flex justify-end md:justify-end items-end'>
                        <img src="src/category/headphone.png" alt="Headphone" className='' />
                    </div>
                </div>
                <div className=' bg-slate-400   p-[5%] rounded-md border border-slate-500 grid grid-cols-2 '>
                    <div className='space-y-3  col-span-1 md:relative absolute'>
                        <p className='text-5xl font-semibold'>Wireless headphone</p>
                        <p className='text-slate-500'>Starting at $49</p>
                        <div>
                            <Link href={'#'}
                                className='text-blue-500 font-semibold'>Shop Now
                            </Link>
                        </div>
                    </div>
                    <div className='col-span-1 flex justify-end md:justify-end items-end'>
                        <img src="src\category\drimmer.png" alt="" className='' />
                    </div>
                </div>
                <div className=' bg-yellow-200 border-yellow-100  p-[5%] rounded-md border  grid grid-cols-2'>
                    <div className='space-y-3  col-span-1 md:relative absolute'>
                        <p className='text-5xl font-semibold'>Video games</p>
                        <p className='text-slate-500'>Starting at $49</p>
                        <div>
                            <Link href={'#'}
                                className='text-blue-500 font-semibold'>Shop Now
                            </Link>
                        </div>
                    </div>
                    <div className='col-span-1 flex justify-end md:justify-end items-end'>
                        <img src="src\category\game.png" alt="" className='' />
                    </div>
                </div>
            </div>
            <Audio />
            <Home_Applance />
            <div className='px-[7%] my-[3%]'>
                <div className='grid md:grid-cols-2 grid-cols-1 bg-white'>
                    <div className='p-[7%] space-y-7 col-span-1'>
                        <p className=' font-semibold md:text-lg text-sm  text-gray-500 font-mono'>Brand’s deal</p>
                        <p className='font-bold md:text-4xl text-lg'>Save up to $200 on select Samsung washing machine</p>
                        <p className='text-base font-semibold text-gray-500 font-serif'>Tortor purus et quis aenean tempus tellus fames.</p>
                        <p><Link href={'#'} className='md:text-lg text-xs font-semibold text-blue-500'>Shop now</Link></p>
                    </div>
                    <div className=' col-span-1'>
                        <img src="src/category/adwash.jpg" alt="" className='w-full' />
                    </div>
                </div>
            </div>
            <AC />
            <div className='px-[7%] my-[2%] '>
                <img src="src/category/ad1.jpg" alt="" className='w-full' />
            </div>

            <Kitchen />
            <Refrigerator />
            <div className='px-[7%] my-[2%]'>
                <img src="src/category/ad2.jpg" alt="" className='w-full' />
            </div>
            <Laptop />
            <Gadget />
        </>
    )
}

export default Main
