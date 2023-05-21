import React from 'react';

const BlogCard = ({aQnAndAns}) => {
    return (
        <div className='bg-slate-50 hover:bg-gray-100 py-4 px-2 rounded-md my-4 shadow-md'>
            <h1 className='text-2xl font-semibold text-slate-700'>{aQnAndAns.qn}</h1>
            <p className='p-2 text-justify'>{aQnAndAns.ans}</p>
        </div>
    );
};

export default BlogCard;