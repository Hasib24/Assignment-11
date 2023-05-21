import React from 'react';
import BlogCard from './BlogCard';



const qnAndAns = [
    {
        id: 1,
        qn: "What is an access token and refresh token? How do they work and where should we store them on the client-side?",
        ans:"In JSON Web Token (JWT) authentication, an access token and a refresh token are two separate components used for user authentication and authorization.  we store them on .env file of the client-side. "
    },
    {
        id: 2,
        qn: "Compare SQL and NoSQL databases?",
        ans:"SQL databases use SQL as the standardized query language and scale vertically by upgrading hardware resources. NoSQL databases provide flexible data models, such as key-value, document, columnar, or graph, which can handle unstructured or evolving data more effectively. They allow dynamic schema changes, making it easier to adapt to varying data structures. "
    },
    {
        id: 3,
        qn: "What is express js? What is Nest JS?",
        ans: "Express.js is a fast and minimalist web application framework for Node.js, a runtime environment for executing JavaScript code on the server-side. Express.js simplifies the process of building web applications and APIs by providing a set of robust features and utilities. NestJS is a TypeScript-based web application framework built on top of Express.js. It follows a modular architecture, promotes decorators and dependency injection, and provides seamless integration with various libraries."
    },
    {
        id: 4,
        qn: "What is MongoDB aggregate and how does it work?",
        ans:"MongoDB's aggregate function is used to perform advanced data analysis and manipulation operations on collections. It allows you to apply a series of pipeline stages to transform and aggregate data, including filtering, grouping, sorting, projecting, and performing calculations. It provides powerful capabilities for data aggregation and processing within MongoDB."
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