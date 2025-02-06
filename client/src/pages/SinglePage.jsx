import React, { useContext, useEffect, useState } from 'react';
import assets from '../assets/assets';
import Comments from '../components/Comments';
import { BlogContext } from '../context/BlogContext';
import { useParams } from 'react-router-dom';
import { backendUrl } from '../App';

const SinglePage = () => {
    const { comment, setComment, comments, setComments, getBlog } = useContext(BlogContext);
    const [blog, setBlog] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // Fetch Blog Data
    useEffect(() => {
        let isMounted = true;  // ✅ Prevents state updates after unmount

        const getBlogData = async () => {
            try {
                const fetchedBlog = await getBlog(id);

                if (isMounted && fetchedBlog) {
                    setBlog(fetchedBlog);
                }
            } catch (error) {
                console.error("Error fetching blog:", error);
            }
        };

        getBlogData();

        return () => {
            isMounted = false;  // ✅ Cleanup to avoid state update on unmounted component
        };
    }, [id]);

    if (!blog) return <p className='text-center text-gray-500'>Loading blog...</p>;

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (comment.trim() !== '') {
            setComments((prevComments) => [...prevComments, comment]); // ✅ Functional update
            setComment('');
        }
    };

    return (
        <div className='flex flex-col gap-6 py-10 px-4 md:px-10'>
            {/* Category Badge */}
            <p className='p-2 w-fit bg-blue-500 text-white text-center rounded-lg'>{blog?.category || 'Technology'}</p>

            {/* Title */}
            <h1 className='text-4xl font-bold mb-6 leading-snug dark:text-white'>{blog?.title}</h1>

            {/* Author Info */}
            <div className='flex items-center gap-4 dark:text-white'>
                <img src={blog['userId'].profilePic ? `${backendUrl}/${blog["userId"]?.profilePic?.replace(/\\/g, "/")}`:assets?.DefaultProfile} alt="Author Profile" className='w-10 h-10 rounded-full' />
                <p className='text-base text-gray-600 dark:text-gray-300'>{blog["userId"].name || 'Developer Kaja Moideen'}</p>
                <p className='text-base text-gray-600 dark:text-gray-300'>{new Date(blog?.publishedAt)?.toDateString() || 'August 20, 2022'}</p>
            </div>

            {/* Blog Banner */}
            <img src={`${blog?.picture? `${backendUrl}/${blog?.picture?.replace(/\\/g, "/")}` : assets?.HeroBanner}`} alt="Blog Hero Banner" className='w-full h-[35rem] max-h-[42rem] object-cover rounded-lg shadow-md' />

            {/* Blog Content */}
            <div className='flex flex-col w-full mx-auto gap-5 text-justify dark:text-white'>
            <div className='blog-content' dangerouslySetInnerHTML={{ __html: blog?.content }} />
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
