import React from 'react';
import BlogCard from './BlogCard';



const qnAndAns = [
    {
        id: 1,
        qn: "What is an access token and refresh token? How do they work and where should we store them on the client-side?",
        ans:""
    },
    {
        id: 2,
        qn: "Compare SQL and NoSQL databases?",
        ans:""
    },
    {
        id: 3,
        qn: "What is express js? What is Nest JS?",
        ans: ""
    },
    {
        id: 4,
        qn: "What is MongoDB aggregate and how does it work?",
        ans:""
    }
]

const Blog = () => {
    return (
        
        <div className='container mx-auto my-10'>
            <h1 className='text-center text-2xl font-bold text-slate-800'>Wellcome to blog</h1>
            
            <div>
                {qnAndAns.map(aQnAndAns =><BlogCard aQnAndAns={aQnAndAns} key={aQnAndAns.id}></BlogCard>)} 
            </div>
        </div>
    );
};

export default Blog;