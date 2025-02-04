import React, { useState } from 'react';
import assets from '../assets/assets'; // Make sure to import assets if not already
import BlogHeroSession from '../components/BlogHeroSession';

const Blog = () => {
  const allPosts = [
    {
      thumbnail: assets.HeroBanner,
      category: 'Technology',
      title: 'The Impact of Technology on the Workplace: How Technology is Changing',
      profilePic: assets.ProfileImg,
      name: 'Jason Francisco',
      postDate: 'August 20, 2022',
    },
    {
      thumbnail: assets.HeroBanner,
      category: 'Health',
      title: 'How Health Tech is Revolutionizing the Medical Industry',
      profilePic: assets.ProfileImg,
      name: 'Emma Watson',
      postDate: 'September 12, 2022',
    },
    {
      thumbnail: assets.HeroBanner,
      category: 'Education',
      title: 'Online Education: The Future of Learning',
      profilePic: assets.ProfileImg,
      name: 'John Doe',
      postDate: 'July 15, 2022',
    },
    {
      thumbnail: assets.HeroBanner,
      category: 'Business',
      title: 'How Technology is Shaping the Future of Business',
      profilePic: assets.ProfileImg,
      name: 'Sophia Johnson',
      postDate: 'June 25, 2022',
    },
    {
      thumbnail: assets.HeroBanner,
      category: 'Finance',
      title: 'The Role of FinTech in Modernizing Finance',
      profilePic: assets.ProfileImg,
      name: 'Michael Brown',
      postDate: 'May 10, 2022',
    },
    {
      thumbnail: assets.HeroBanner,
      category: 'Lifestyle',
      title: 'Smart Living: How Technology is Changing Daily Life',
      profilePic: assets.ProfileImg,
      name: 'Olivia Davis',
      postDate: 'April 5, 2022',
    },
    {
      thumbnail: assets.HeroBanner,
      category: 'Science',
      title: 'The Impact of Artificial Intelligence on Modern Research',
      profilePic: assets.ProfileImg,
      name: 'Liam Smith',
      postDate: 'January 1, 2023',
    },
    {
      thumbnail: assets.HeroBanner,
      category: 'Travel',
      title: 'How Technology is Revolutionizing the Travel Industry',
      profilePic: assets.ProfileImg,
      name: 'Ava Miller',
      postDate: 'March 3, 2023',
    },
    {
      thumbnail: assets.HeroBanner,
      category: 'Gaming',
      title: 'The Evolution of Gaming Technology: What’s Next?',
      profilePic: assets.ProfileImg,
      name: 'Ethan Brown',
      postDate: 'November 11, 2023',
    },
    {
      thumbnail: assets.HeroBanner,
      category: 'Food',
      title: 'How Food Tech is Transforming the Culinary World',
      profilePic: assets.ProfileImg,
      name: 'Charlotte Davis',
      postDate: 'February 20, 2023',
    },
    {
      thumbnail: assets.HeroBanner,
      category: 'Fitness',
      title: 'How Fitness Tech is Changing the Way We Train',
      profilePic: assets.ProfileImg,
      name: 'Lucas Wilson',
      postDate: 'October 10, 2023',
    },
    {
      thumbnail: assets.HeroBanner,
      category: 'Automotive',
      title: 'Electric Vehicles: The Future of the Automobile Industry',
      profilePic: assets.ProfileImg,
      name: 'Isabella Martinez',
      postDate: 'December 12, 2023',
    },
    {
      thumbnail: assets.HeroBanner,
      category: 'Music',
      title: 'The Future of Music Technology and Streaming Services',
      profilePic: assets.ProfileImg,
      name: 'Mason Taylor',
      postDate: 'January 5, 2024',
    },
  ];

  // State to manage visible posts and the number of posts to show
  const [visiblePosts, setVisiblePosts] = useState(allPosts.slice(0, 6));

  // Function to load more posts
  const loadMorePosts = () => {
    setVisiblePosts(prevPosts => [
      ...prevPosts,
      ...allPosts.slice(prevPosts.length, prevPosts.length + 6),
    ]);
  };

  return (<>
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
    <div className="w-full h-auto pb-5 dark:text-white ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {visiblePosts.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 p-6 bg-white dark:bg-[#181A2A] dark:border-[#242535] rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl hover:scale-105"
          >
            {/* Thumbnail */}
            <div
              className="w-full h-56 sm:h-64 lg:h-72 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url(${item.thumbnail})`,
              }}
            ></div>
            {/* Card Content */}
            <div className="pt-4">
              {/* Category */}
              <p className="px-3 py-1 bg-blue-500 w-fit text-white rounded-lg text-xs sm:text-sm font-semibold mb-2">{item.category}</p>
              {/* Title */}
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black leading-tight mb-2 dark:text-white">{item.title}</h3>
              {/* Profile Section */}
              <div className="flex items-center gap-3 mt-4">
                <img src={item.profilePic} alt="Profile Pic" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full" />
                <div className="flex space-x-2 text-gray-600 text-xs sm:text-sm">
                  <p className="font-medium">{item.name}</p>
                  <p>{item.postDate}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Centered View All Post Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={loadMorePosts}
          className="w-fit px-6 py-3 border border-gray-300 text-gray-500 font-medium rounded-lg text-sm sm:text-base hover:bg-gray-100 transition-all"
        >
          Load More
        </button>
      </div>
    </div>
    </>
  );
};

export default Blog;
