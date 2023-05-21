import React from 'react';


const Banner = () => {
    return (
        <div className='h-[100vh]'>
            <img src='https://images.pexels.com/photos/54277/pexels-photo-54277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='absolute top-0 h-[100vh] w-full object-cover -z-10' ></img>
            <div className='absolute top-0 h-[100vh] w-full bg-black opacity-20'>overlay</div>
            <div className='absolute h-[100vh] w-full top-0 flex flex-col items-center justify-center border-red-500 '>
                {/* <h1 className='text-5xl text-white font-bold'>Experience the Joyride</h1> */}
                <h1 className='text-2xl md:text-5xl text-white font-bold'>Find Your Perfect Toy Car</h1>
                <h1 className='text-2xl md:text-5xl text-white font-bold'>at ToyCar.com!</h1>

            </div>
        </div>
    );
};

export default Banner;