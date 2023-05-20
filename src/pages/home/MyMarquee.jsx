import React from 'react';
import Marquee from "react-fast-marquee";

const MyMarquee = () => {
    return (
        <section className='container mx-auto my-16'>
            <h1 className='text-4xl font-bold text-center my-10'>Connected Brands</h1>
            <Marquee speed={30}>
                <img className='h-40 mx-4' src="https://img.freepik.com/free-vector/illustration-creative-ideas-concept-icon_53876-7971.jpg?w=740&t=st=1684586049~exp=1684586649~hmac=4e3ffc6a671659da587c341d15aa19a7410bfd308ca327227a113b7e981b740a" alt="" />
                <img className='h-40 mx-4' src="https://img.freepik.com/free-vector/business-logo-template-minimal-branding-design-vector_53876-136228.jpg?t=st=1684586034~exp=1684586634~hmac=72a66d1a2f56a53b16087aabcac2f34a557ce672d2d0de28e05c2762c07571e4" alt="" />
            </Marquee>
        </section>
    );
};

export default MyMarquee;