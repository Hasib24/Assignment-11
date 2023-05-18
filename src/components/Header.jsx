import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsCarFront } from 'react-icons/bs';

const Header = () => {
    const navActvStyle = ({isActive}) =>{
        return({
            textDecoration: isActive ? 'underline' : 'none'
        })
    }
    return (
        <header className='flex items-center'>
            <div className='border flex justify-between container mx-auto'>
                <div className='flex border items-center'>
                    <BsCarFront className='text-6xl '></BsCarFront>
                    <div className='p-3'>
                        <h1 className='text-3xl font-bold'>ToyCar.com</h1>
                        <span>A Toy Car Marketplace</span>
                    </div>
                </div>
                <nav className='border flex items-center'>
                    <NavLink style={navActvStyle} to='/' className='px-2 text-xl font-semibold'>Home</NavLink>
                    <NavLink style={navActvStyle} to='/alltoys' className='px-2 text-xl font-semibold'>All Toys</NavLink>
                    <NavLink style={navActvStyle} to='/mytoys' className='px-2 text-xl font-semibold'>My Toys</NavLink>
                    <NavLink style={navActvStyle} to='/addatoy' className='px-2 text-xl font-semibold'>Add A Toy</NavLink>
                    <NavLink style={navActvStyle} to='/blog' className='px-2 text-xl font-semibold'>Blog</NavLink>
                    <NavLink style={navActvStyle} to='/login' className='px-2 text-xl font-semibold'>Login</NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;