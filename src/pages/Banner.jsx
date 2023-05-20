import React from 'react';
import bgVid from '../assets/bannar_vid.mp4';


const Banner = () => {
    return (
        <div className='mb-5 h-[100vh]'>
            <video src={bgVid} className='absolute top-0 h-[100vh] w-full object-cover -z-10' loop muted></video>
            <div className='absolute top-0 h-[100vh] w-full bg-black opacity-20'>overlay</div>
            <div className='absolute h-[100vh] w-full top-0 flex flex-col items-center justify-center border-red-500 '>
                {/* <h1 className='text-5xl text-white font-bold'>Experience the Joyride</h1> */}
                <h1 className='text-5xl text-white font-bold'>Find Your Perfect Toy Car</h1>
                <h1 className='text-5xl text-white font-bold'>at ToyCar.com!</h1>

            </div>
        </div>
    );
};

export default Banner;