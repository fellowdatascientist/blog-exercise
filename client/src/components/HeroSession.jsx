import React, { useContext, useEffect, useState } from "react";
import assets from "../assets/assets";
import { BlogContext } from "../context/BlogContext";
import { backendUrl } from "../App";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import AOS from "aos";

const HeroSession = () => {
  const { blogData } = useContext(BlogContext);
  const latestBlogs = blogData?.slice(-4)?.reverse();
  const [activeBlog, setActiveBlog] = useState(null);

  useEffect(() => {
    if (latestBlogs.length > 0) {
      setActiveBlog(latestBlogs[0]);
    }
  }, [blogData]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    console.log(activeBlog);
    
  }, [activeBlog]);

  return (
    <div className="w-full h-auto relative flex justify-center items-center pb-14 mt-4">
      {/* Swiper for Background Image */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveBlog(latestBlogs?.[swiper.activeIndex])}
        className="w-full h-[30rem] sm:h-[35rem] md:h-[40rem] rounded-xl"
      >
        {latestBlogs?.map((blog, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-[30rem] sm:h-[35rem] md:h-[40rem] rounded-xl"
              style={{
                backgroundImage: `url(${blog?.picture ? `${backendUrl}/${blog.picture.replace(/\\/g, "/")}` : assets.HeroBanner})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Card Section (AOS Animations) */}
      {activeBlog && (
        <div
          data-aos="fade-up"
          key={activeBlog?._id}
          className="absolute dark:bg-[#181A2A] dark:border-[#242535] z-20 bottom-0 left-4 sm:left-8 md:left-16 rounded-xl w-96 sm:w-[30rem] md:w-[35rem] lg:w-[40rem] h-auto sm:h-80 bg-white shadow-2xl p-6 sm:p-8 md:p-10 flex flex-col justify-between gap-4"
        >
          {/* Category Badge */}
          <p className="px-3 py-1 bg-blue-500 text-white rounded-lg w-fit text-xs sm:text-sm font-semibold">
            {activeBlog?.category || "General"}
          </p>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-tight dark:text-white">
            {activeBlog?.title}
          </h1>

          {/* Profile Section */}
          <div className="flex items-center gap-3 mt-2">
            <img src={activeBlog['userId']?.profilePic ? `${backendUrl}/${activeBlog['userId']?.profilePic}` : assets?.DefaultProfile} alt="Profile Pic" className="w-10 h-10 rounded-full" />
            <div className="text-gray-500 text-xs sm:text-sm md:text-base flex gap-6">
              <p className="font-medium">{activeBlog['userId']?.name || "Unknown"}</p>
              <p>{new Date(activeBlog?.publishedAt)?.toDateString()}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSession;
