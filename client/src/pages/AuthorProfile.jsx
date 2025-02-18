import React, { useContext, useEffect } from 'react';
import assets from '../assets/assets'; // Make sure to import assets if not already
import { BlogContext } from '../context/BlogContext';
import { backendUrl } from '../App';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const AuthorProfile = () => {
  const { fetchAuthor  } = useContext(AuthContext);
  const { _id } = useLocation()
  const navigate = useNavigate()

  useEffect(()=>{
    fetchAuthor(_id)
  },[])

  return (
    <div className="w-full h-auto px-6 py-8 dark:text-white ">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Latest Post</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {Array?.map((item, index) => (
          <div key={index} onClick={()=>navigate(`/blog/${item._id}`)} className="border border-gray-200 p-6 bg-white dark:bg-[#181A2A] dark:border-[#242535] rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl hover:scale-105">
            {/* Thumbnail */}
            <div
              className="w-full h-56 sm:h-64 lg:h-72 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url(${item?.picture
                    ? `${backendUrl}/${item.picture.replace(/\\/g, '/')}`
                    : assets.HeroBanner
                  })`,
              }}
            ></div>
            {/* Card Content */}
            < div className="pt-4 flex flex-col justify-between items-start" >
              {/* Category */}
              < p className="px-3 py-1 bg-blue-500 w-fit text-white rounded-lg text-xs sm:text-sm font-semibold mb-2" > {item?.category ? item?.category : 'General'}</p>
              {/* Title */}
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black leading-tight mb-2 dark:text-white">{item?.title}</h3>
              {/* Profile Section */}
              <div className="flex items-center gap-3 mt-4">
                <img
                  src={
                    item['userId']?.profilePic
                      ? `${backendUrl}/${item['userId'].profilePic.replace(/\\/g, '/')}`
                      : `${assets.DefaultProfile}`
                  }
                  alt="Profile Pic"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                />

                <div className="flex space-x-2 text-gray-600 text-xs sm:text-sm">
                  <p className="font-medium">{item['userId']?.name || 'John Doe'}</p>
                  <p>{new Date(item?.publishedAt)?.toDateString()}</p>
                </div>
              </div>
            </div>
          </div >
        ))}
      </div >
    </div >
  );
};

export default AuthorProfile;
