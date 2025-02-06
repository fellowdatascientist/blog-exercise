import React, { useContext, useEffect, useState } from 'react';
import assets from '../assets/assets';
import BlogHeroSession from '../components/BlogHeroSession';
import { BlogContext } from '../context/BlogContext';
import { backendUrl } from '../App';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const { blogData } = useContext(BlogContext);
  const [visiblePosts, setVisiblePosts] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    if (blogData && blogData.length > 0) {
      setVisiblePosts(blogData.slice(0, 6));
    }
  }, [blogData]);

  const loadMorePosts = () => {
    setVisiblePosts(prevPosts => [
      ...prevPosts,
      ...blogData.slice(prevPosts.length, prevPosts.length + 6),
    ]);
  };

  return (
    <>
      {/* Page Title & Breadcrumb */}
      <div className="w-full h-auto flex flex-col justify-center items-center py-6">
        <h1 className="text-xl sm:text-2xl font-bold text-black dark:text-white">Page Title</h1>

        {/* Breadcrumb Section */}
        <div className="flex items-center gap-2 text-sm sm:text-base mt-2">
          <p className="text-gray-500 dark:text-white border-r-2 border-gray-400 pr-2">Home</p>
          <p className="text-gray-500 dark:text-white">Link One</p>
        </div>
      </div>

      {/* Hero Section */}
      <BlogHeroSession />

      <div className="w-full h-auto pb-5 dark:text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visiblePosts.map((item, index) => (
            <div onClick={()=>{
              console.log(item);
              navigate(`/blog/${item._id}`)
            }}
              key={index}
              className="border border-gray-200 p-6 bg-white dark:bg-[#181A2A] dark:border-[#242535] rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl hover:scale-105"
            >
              {/* Thumbnail */}
              <div
                className="w-full h-56 sm:h-64 lg:h-72 bg-cover bg-center rounded-lg"
                style={{
                  backgroundImage: `url(${
                    item.picture
                      ? `${backendUrl}/${item.picture.replace(/\\/g, "/")}`
                      : assets.HeroBanner
                  })`,
                }}
              ></div>

              {/* Card Content */}
              <div className="pt-4">
                {/* Category */}
                <p className="px-3 py-1 bg-blue-500 w-fit text-white rounded-lg text-xs sm:text-sm font-semibold mb-2">
                  {item.category}
                </p>
                {/* Title */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black leading-tight mb-2 dark:text-white">
                  {item.title}
                </h3>
                {/* Profile Section */}
                <div className="flex items-center gap-3 mt-4">
                  <img src={item['userId'].profilePic ? `${backendUrl}/${item["userId"]?.profilePic?.replace(/\\/g, "/")}`:assets?.DefaultProfile} alt="Profile Pic" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full" />
                  <div className="flex space-x-2 text-gray-600 text-xs sm:text-sm">
                    <p className="font-medium">{item["userId"]?.name}</p>
                    <p>{new Date(item?.publishedAt)?.toDateString()}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Centered View All Post Button */}
        {visiblePosts.length < blogData.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={loadMorePosts}
              className="w-fit px-6 py-3 border border-gray-300 text-gray-500 font-medium rounded-lg text-sm sm:text-base hover:bg-gray-100 transition-all"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Blog;
