import React, { useContext, useState } from 'react';
import assets from '../assets/assets';
import Comments from '../components/Comments';
import { BlogContext } from '../context/BlogContext';

const SinglePage = () => {
    const {comment,setComment,comments,setComments} = useContext(BlogContext)
    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (comment.trim() !== '') {
            setComments([...comments, comment]);
            setComment('');
        }
    };

    return (
        <div className='flex flex-col gap-6 py-10 px-4 md:px-10'>
            {/* Category Badge */}
            <p className='p-1 w-28 bg-blue-500 text-white text-center rounded-md'>Technology</p>

            {/* Title */}
            <h1 className='text-4xl font-bold mb-6 leading-snug dark:text-white'>
                The Impact of Technology on the Workplace: How Technology is Changing
            </h1>

            {/* Author Info */}
            <div className='flex items-center gap-4 dark:text-white'>
                <img src={assets.ProfileImg} alt="Author Profile" className='w-10 h-10 rounded-full' />
                <p className='text-base text-gray-600 dark:text-gray-300'>Kaja Moideen</p>
                <p className='text-base text-gray-600 dark:text-gray-300'>August 20, 2022</p>
            </div>

            {/* Blog Banner */}
            <img src={assets.HeroBanner} alt="Blog Hero Banner" className='w-full h-auto max-h-[42rem] object-cover rounded-lg shadow-md' />

            {/* Blog Content */}
            <div className='flex flex-col w-full mx-auto gap-5 text-justify dark:text-white'>
                <p>Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.</p>

                <p>One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.</p>

                <h2 className='text-xl font-bold mt-4'>Research Your Destination</h2>
                <p>Before embarking on your journey, take the time to research your destination. This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations. Doing so will help you navigate your destination with confidence and avoid any cultural faux pas.</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Viverra adipiscing at in tellus.</p>
            </div>

            {/* Comment Section */}
            <div className='mt-10'>
                <h2 className='text-2xl font-bold dark:text-white mb-4'>Comments</h2>

                {/* Comment Form */}
                <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                    <textarea
                        className='w-full p-3 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white'
                        placeholder='Write a comment...'
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        aria-label='Write a comment'
                    />
                    <button
                        type='submit'
                        className='text-black hover:text-white bg-blue-500 py-2 px-4 rounded-md dark:hover:bg-slate-400 border hover:bg-black dark:hover:text-black transition-all'
                    >
                        Submit
                    </button>
                </form>

                {/* Display Comments */}
                <Comments />
            </div>
        </div>
    );
};

export default SinglePage;
