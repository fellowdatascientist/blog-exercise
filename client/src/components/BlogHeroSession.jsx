import React, { useContext, useEffect, useState } from 'react';
import assets from '../assets/assets';
import { BlogContext } from '../context/BlogContext';
import AOS from "aos";
import { backendUrl } from '../App';

const BlogHeroSession = () => {
    const { blogData } = useContext(BlogContext)
    const [activeBlog, setActiveBlog] = useState([]);

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            if (index < blogData?.length) {
                setActiveBlog(blogData[index]);
                index += 1;
            } else {
                index = 0;
            }
        }, 3000);
        return () => clearInterval(intervalId);
    }, [blogData]);

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <div className="w-full h-auto relative flex justify-center items-center pb-14 mt-4">
            {/* Hero Image */}
            <div
                className="w-full flex justify-start items-end h-[30rem] sm:h-[35rem] md:h-[40rem] lg:h-[45rem] rounded-xl duration-300 animate-fadeIn"
                style={{
                    backgroundImage: `url(${activeBlog?.picture
                        ? `${backendUrl}/${activeBlog.picture.replace(/\\/g, "/")}`
                        : assets.HeroBanner
                        })`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="w-[70%] h-[40%] flex flex-col justify-around pl-14 pb-10 gap-1 duration-300 animate-fadeIn">
                    {/* Category Badge */}
                    <p className="px-3 py-1 bg-blue-500 text-white rounded-lg w-fit text-xs sm:text-sm md:text-base font-semibold">
                        {activeBlog?.category || 'General'}
                    </p>

                    {/* Title */}
                    <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-wrap leading-tight">
                        {activeBlog?.title || 'The Impact of Technology on the Workplace: How Technology is Changing'}
                    </h1>

                    {/* Profile Section */}
                    <div className="flex items-center gap-3 mt-2">
                        <img src={activeBlog['userId']?.profilePic
                            ? `${backendUrl}/${activeBlog['userId'].profilePic.replace(/\\/g, "/")}`
                            : assets.DefaultProfile} alt="Profile Pic" className="w-10 h-10 rounded-full" />
                        <div className="text-gray-500 text-xs sm:text-sm md:text-base flex gap-6">
                            <p className="font-medium">{activeBlog['userId']?.name || 'John Doe'}</p>
                            <p>{new Date(activeBlog?.publishedAt).toLocaleString() || '2022-01-01'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogHeroSession;
