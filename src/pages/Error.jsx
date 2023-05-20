import React from 'react';

const Error = () => {
    return (
        <section className='container mx-auto'>
            <div className='flex justify-center'><img className=' border w-auto object-cover' src="https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_1150-55450.jpg?w=740&t=st=1684527006~exp=1684527606~hmac=5232955252e97be88c3032838becd9426b17367f2d53f14eae7331e2f03d3a0d" alt="" /></div>
            <div className='text-center '>
                <h1 className='font-bold tracking-widest text-6xl'>404</h1>
                <h1 className='tracking-wider text-2xl md:text-6xl'>Error has been occurred!</h1>
            </div>
        </section>
    );
};

export default Error;