import React from 'react';

const Advertisement = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center py-10">
      <div className="w-full sm:w-[80%] md:w-[60%] h-[70%] rounded-xl text-gray-500 bg-gray-200 flex flex-col justify-center items-center p-4">
        <p className="text-center text-sm sm:text-base lg:text-lg">Advertisement</p>
        <p className="font-bold text-center text-md sm:text-xl lg:text-2xl">You Can Place Ads</p>
        <p className="text-center text-xs sm:text-sm lg:text-base">750x100</p>
      </div>
    </div>
  );
};

export default Advertisement;
