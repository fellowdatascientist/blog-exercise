import React from 'react';
import assets from '../assets/assets';

const HeroSession = () => {
  return (
    <div className="w-full h-auto relative flex justify-center items-center pb-14 mt-4">
      {/* Hero Image */}
      <div
        className="w-full h-[30rem] sm:h-[35rem] md:h-[40rem] rounded-xl"
        style={{
          backgroundImage: `url(${assets.HeroBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      {/* Card Section */}
      <div className="absolute bottom-0 left-4 sm:left-8 md:left-16 rounded-xl w-96 sm:w-[30rem] md:w-[35rem] lg:w-[40rem] h-auto sm:h-80 bg-white shadow-2xl p-6 sm:p-8 md:p-10 flex flex-col gap-4">
        {/* Category Badge */}
        <p className="px-3 py-1 bg-blue-500 text-white rounded-lg w-fit text-xs sm:text-sm font-semibold">
          Technology
        </p>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-tight">
          The Impact of Technology on the Workplace: How Technology is Changing
        </h1>

        {/* Profile Section */}
        <div className="flex items-center gap-3 mt-2">
          <img src={assets.ProfileImg} alt="Profile Pic" className="w-10 h-10 rounded-full" />
          <div className="text-gray-500 text-xs sm:text-sm md:text-base flex gap-4">
            <p className="font-medium">Jason Francisco</p>
            <p>August 20, 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSession;
