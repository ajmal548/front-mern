import React from "react";

const Category = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 p-5">
        <div className="md:col-span-2  p-3 space-y-2 ">
          <img
            src="src\mobile\-original-imagtt4mhqrzjs9r.webp"
            alt=""
            className="w-full border-2 p-3"
          />
          <div className="grid grid-cols-2 space-x-2  text-white">
            <button className="bg-orange-400 text-2xl col-span-1 flex items-center space-x-2 p-5 font-medium">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </span>
              Go To Cart
            </button>

            <button className="bg-green-400  text-2xl col-span-1 flex items-center space-x-2 p-5 font-medium ">
              <span>
                <svg
                  className="h-8 w-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </span>
              Buy Now
            </button>
          </div>
        </div>

        <div className="md:col-span-3 p-3 text-black space-y-4 scrollable-column">
          <p className="text-2xl">
            vivo T2 Pro 5G (Dune Gold, 256 GB) (8 GB RAM)
          </p>
          <div>
            <p className="text-zinc-500 font-semibold text-lg">
              <span className="bg-green-500 p-1 px-2 text-white rounded-lg mr-2">
                4.5 *
              </span>
              90,260 Ratings & 7,778 Reviews
            </p>
          </div>
          <div>
            <h1 className="text-green-500 text-md">Extra ₹3000 off</h1>
            <h1 className="text-3xl font-medium">
              ₹24,999
              <span className="line-through text-zinc-500 pr-2 text-lg ml-2">
                ₹27,999
              </span>
              <span className="text-green-500 pr-2 text-lg ml-2">10% off</span>
            </h1>
          </div>
          <div>
            <h1 className="text-lg font-medium">Available offers</h1>
            <p>
              Bank Offer: Get ₹25 instant discount on first Flipkart UPI txns on
              order of ₹250 and above
            </p>
          </div>
          <div className="Details space-y-5 pt-4">
            <div className="color grid grid-cols-3 md:grid-cols-4 gap-x-8">
              <div className="col-span-1 md:col-span-1 text-zinc-500 ">
                Color
              </div>
              <div className="col-span-2 md:col-span-3 flex space-x-3 ">
                <button className="w-16 h-16 bg-red-500 "></button>
                <button className="w-16 h-16 bg-yellow-500"></button>
                <button className="w-16 h-16 bg-green-500"></button>
              </div>
            </div>
            <div className="color grid grid-cols-3 md:grid-cols-4 gap-x-8">
              <div className="col-span-1 md:col-span-1 text-zinc-500 ">
                Storage
              </div>
              <div className="col-span-2 md:col-span-3 flex space-x-3 text-zinc-500">
                <button className="border-solid border-blue-400 border-2 p-2">
                  128 GB
                </button>
                <button className="border-solid border-blue-400 border-2  p-2">
                  256 GB
                </button>
              </div>
            </div>
            <div className="color grid grid-cols-3 md:grid-cols-4 gap-x-8">
              <div className="col-span-1 md:col-span-1 text-zinc-500 ">
                Storage
              </div>
              <div className="col-span-2 md:col-span-3 flex space-x-3 text-zinc-500">
                <ul>
                  <li>8 GB RAM | 256 GB ROM</li>
                  <li>17.22 cm (6.78 inch) Full HD+ Display</li>
                  <li>64MP + 2MP | 16MP Front Camera</li>
                  <li>4600 mAh Battery</li>
                  <li>Dimensity 7200 Processor</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex space-x-8 border-2 p-1">
            <h1 className="text-zinc-500 text-lg">Description</h1>
            <p className="text-black">
              The T2 Pro 5G smartphone features a 3D curved AMOLED screen
              providing a bright display with a peak brightness of 1300 nits.
              Improve your performance with the MediaTek Dimensity 7200
              processor. Powered with a 64 MP main camera with OIS and a night
              camera with Aura Light, keep clicking stunning pictures all day
              and night. This smartphone is slim, lightweight and boasts a
              premium design with AG glass back cover. Available in 8 GB+8 GB
              RAM, and ROM fused together with an optimised algorithm, you can
              easily use around 27 apps simultaneously. Powered by a 4600 mAH
              large battery, you can quickly boost your phone’s charge with the
              66 W Flash Charge.
            </p>
          </div>
          <div className="border-2 p-3">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-medium">Ratings & Reviews</h1>
              <button className="border-2 p-2 font-medium">Rate Product</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
