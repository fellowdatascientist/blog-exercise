import React, { useContext, useState } from 'react';
import { FaEdit, FaTrash, FaReply } from 'react-icons/fa';
import { BlogContext } from '../context/BlogContext';
import assets from '../assets/assets';

const CommentItem = ({ comment, index, onEdit, onDelete, onSaveEdit, editingIndex, editedComment, setEditedComment, onReply, replyIndex, setReplyIndex, replyText, setReplyText, onPostReply }) => {
    const isEditing = editingIndex === index;
    const isReplying = replyIndex === index;

    return (
        <li className='flex flex-col gap-2 w-full p-3 bg-gray-100 dark:bg-gray-800 rounded-md'>
            <div className='flex items-center gap-4'>
                <img src={assets.ProfileImg} alt="Author Profile" className='w-10 h-10 rounded-full object-cover' />
                <div className='flex flex-col'>
                    <p className='text-sm text-gray-600 dark:text-gray-300'>Kaja Moideen</p>
                    <p className='text-xs text-gray-500 dark:text-gray-400'>August 20, 2022</p>
                </div>
            </div>

            {isEditing ? (
                <textarea
                    className='w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white'
                    value={editedComment}
                    onChange={(e) => setEditedComment(e.target.value)}
                    aria-label="Edit comment"
                />
            ) : (
                <p className='text-gray-700 dark:text-gray-300'>{comment.text}</p>
            )}

            <div className='flex gap-3 mt-2'>
                {isEditing ? (
                    <button onClick={() => onSaveEdit(index)} className='bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600' aria-label="Save comment">Save</button>
                ) : (
                    <button onClick={() => onEdit(index, comment.text)} className='text-black px-3 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-slate-500 dark:text-white' aria-label="Edit comment">
                        <FaEdit className='w-4 h-4' />
                    </button>
                )}
                <button onClick={() => onDelete(index)} className='text-black px-3 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-slate-500 dark:text-white' aria-label="Delete comment">
                    <FaTrash className='w-4 h-4' />
                </button>
                <button onClick={() => setReplyIndex(index)} className='text-black px-3 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-slate-500 dark:text-white' aria-label="Reply">
                    <FaReply className='w-4 h-4' />
                </button>
            </div>

            {isReplying && (
                <div className='mt-2 flex flex-col gap-2'>
                    <textarea className='w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white' placeholder='Write a reply...' value={replyText} onChange={(e) => setReplyText(e.target.value)} />
                    <button onClick={() => onPostReply(index)} className='bg-purple-500 text-white px-3 py-1 rounded-md hover:bg-purple-600'>Post Reply</button>
                </div>
            )}

            {comment.replies && comment.replies.length > 0 && (
                <div className='ml-10 mt-3 space-y-2'>
                    {comment.replies.map((reply, rIndex) => (
                        <div key={rIndex} className='flex gap-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-md'>
                            <img src={assets.ProfileImg} alt="Reply Profile" className='w-8 h-8 rounded-full object-cover' />
                            <p className='text-gray-700 dark:text-gray-300'>{reply}</p>
                        </div>
                    ))}
                </div>
            )}
        </li>
    );
};

const Comments = () => {
    const { comments, setComments } = useContext(BlogContext);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editedComment, setEditedComment] = useState('');
    const [replyIndex, setReplyIndex] = useState(null);
    const [replyText, setReplyText] = useState('');

    const handleDelete = (index) => {
        setComments(comments.filter((_, i) => i !== index));
    };

    const handleEdit = (index, text) => {
        setEditingIndex(index);
        setEditedComment(text);
    };

    const handleSaveEdit = (index) => {
        const updatedComments = [...comments];
        updatedComments[index].text = editedComment;
        setComments(updatedComments);
        setEditingIndex(null);
    };

    const handlePostReply = (index) => {
        if (!replyText.trim()) return;
        const updatedComments = [...comments];
        if (!updatedComments[index].replies) {
            updatedComments[index].replies = [];
        }
        updatedComments[index].replies.push(replyText);
        setComments(updatedComments);
        setReplyText('');
        setReplyIndex(null);
    };

    return (
        <div className='mt-5'>
            {comments.length === 0 ? (
                <p className='text-gray-600 dark:text-gray-400'>No comments yet. Be the first to comment!</p>
            ) : (
                <ul className='space-y-3'>
                    {comments.map((comment, index) => (
                        <CommentItem
                            key={index}
                            comment={comment}
                            index={index}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                            onSaveEdit={handleSaveEdit}
                            editingIndex={editingIndex}
                            editedComment={editedComment}
                            setEditedComment={setEditedComment}
                            replyIndex={replyIndex}
                            setReplyIndex={setReplyIndex}
                            replyText={replyText}
                            setReplyText={setReplyText}
                            onPostReply={handlePostReply}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Comments;
