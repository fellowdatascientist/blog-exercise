import React from 'react';
import assets from '../assets/assets';

const BlogHeroSession = () => {
    return (
        <div className="w-full h-auto relative flex justify-center items-center pb-14 mt-4">
            {/* Hero Image */}
            <div
                className="w-full flex justify-start items-end h-[30rem] sm:h-[35rem] md:h-[40rem] lg:h-[45rem] rounded-xl"
                style={{
                    backgroundImage: `url(${assets.HeroBanner})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="w-[70%] h-[40%] flex flex-col justify-around pl-14 pb-10 gap-1">
                    {/* Category Badge */}
                    <p className="px-3 py-1 bg-blue-500 text-white rounded-lg w-fit text-xs sm:text-sm md:text-base font-semibold">
                        Technology
                    </p>

                    {/* Title */}
                    <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-wrap leading-tight">
                        The Impact of Technology on the Workplace: How Technology is Changing
                    </h1>

                    {/* Profile Section */}
                    <div className="flex items-center gap-3 mt-2">
                        <img src={assets.ProfileImg} alt="Profile Pic" className="w-10 h-10 rounded-full" />
                        <div className="text-gray-500 text-xs sm:text-sm md:text-base flex gap-6">
                            <p className="font-medium">Jason Francisco</p>
                            <p>August 20, 2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogHeroSession;
