import React from 'react';

const Home = () => {
  return (
    <>
      <div className="bg-auto bg-no-repeat bg-center p-4 md:px-[7%]" style={{ backgroundImage: "url('/src/home.jpg')" }}>
        <div className='flex justify-center items-center min-h-screen'>
          <div className='bg-white p-5 w-full max-w-[450px] h-fit my-8 md:my-[25%] space-y-8'>
            <p className='md:text-xl text-lg font-semibold font-serif text-blue-500'>Market</p>
            <p className='text-3xl md:text-5xl font-semibold font-mono'>The best home entertainment system is here</p>
            <p className='md:text-lg text-base font-medium text-gray-500'>Sit diam odio eget rhoncus volutpat est nibh velit posuere egestas</p>
            <p>
              <a href={"#"} className='text-lg font-semibold text-blue-400 hover:text-blue-600'>
                Shop now
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
