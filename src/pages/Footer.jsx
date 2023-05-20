import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { TiSocialTwitter } from 'react-icons/ti';
import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {


    return (
            <div className='bg-slate-800'>
                <div className='container mx-auto grid grid-cols-2 md:grid-cols-6  text-white py-10 px-2'>  
                    <div className='m-2 text-center md:text-left col-span-2'>
                    
                        <div className='flex items-center'>
                            <span className='inline-block text-3xl font-semibold'>ToyCar</span> {""}
                            <span className='inline-block text-3xl ml-1 font-extralight'>.</span>
                            <span className='inline-block text-3xl ml-1 font-extralight'>com</span>
                        </div>

                        <p className='my-3 text-justify'>
                            Fuel your imagination with our exhilarating toy car collection! Discover a world of speed and adventure on our e-commerce website. From sleek sports cars to rugged off-roaders, each miniature vehicle is crafted with meticulous detail for endless hours of play.
                        </p>

                        <div className='flex sm:justify-center md:justify-start'>
                            <FaFacebookF className='inline-block text-4xl border p-1 m-1 rounded-full cursor-pointer '></FaFacebookF>
                            <TiSocialTwitter className='inline-block text-4xl border p-1 m-1 rounded-full cursor-pointer '></TiSocialTwitter>
                            <FaInstagram className='inline-block text-4xl border p-1 m-1 rounded-full cursor-pointer '></FaInstagram>
                        </div>
                    </div>

                    <div className='m-2'>
                        <h1 className='text-xl font-semibold'>Links</h1>
                        <p>
                            <Link className='font-extralight hover:underline' to={'/'}>About Us</Link> <br />
                            <Link className='font-extralight hover:underline' to={'/'}>Gellary</Link> <br />
                            <Link className='font-extralight hover:underline' to={'/'}>All Toys</Link> <br />
                            <Link className='font-extralight hover:underline' to={'/'}>Events</Link> <br />
                            <Link className='font-extralight hover:underline' to={'/'}>Become a Seller</Link> <br />
                        </p>
                    </div>

                    <div className='m-2'>
                        <h1 className='text-xl font-semibold'>Popular Cars</h1>
                        <p>
                            <Link className='font-extralight hover:underline' to={'/'}>Speed Express</Link> <br />
                            <Link className='font-extralight hover:underline' to={'/'}>Power Racers</Link> <br />
                            <Link className='font-extralight hover:underline' to={'/'}>Epic Drive</Link> <br />
                            <Link className='font-extralight hover:underline' to={'/'}>Night King v2</Link> <br />
                            <Link className='font-extralight hover:underline' to={'/'}>Netro Force</Link>
                        </p>
                    </div>

                    <div className='m-2'>
                        <h1 className='text-xl font-semibold'>Support</h1>
                        <p>
                            <a className='font-extralight' href="#">Help Desk</a> <br />
                            <a className='font-extralight' href="#">Sales</a> <br />
                            <a className='font-extralight' href="#">Become a Partner</a> <br />
                        </p>
                    </div>

                    <div className='m-2'>
                        <h1 className='text-xl font-semibold'>Contact</h1>

                        <address className='not-italic'>
                            <h1 className='font-extralight' >123 Main Street</h1>
                            <h1 className='font-extralight' >Anytown, CA 12345</h1>
                            <h1 className='font-extralight' >+1 777 - 978 - 5570</h1>
                            <h1 className='font-extralight' >Puran Polton, Dhaka</h1>
                        </address>
                    </div>

                </div>
                    <div className='text-white text-center md:flex md:justify-between container mx-auto py-6 border-t border-slate-700'>
                        <div> &copy; 2023 <span className='cursor-pointer font-semibold'>ToyCar.com</span> || All Right Researved </div>
                        <div>Powered by <span className='font-bold cursor-pointer'>Company Name</span></div>
                    </div>
            </div>
        
        
        
    );
};

export default Footer;