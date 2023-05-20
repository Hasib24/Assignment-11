import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsCarFront } from 'react-icons/bs';

const Header = () => {
    const [myScroll, setMyScrollY] = useState(false)
    
    window.addEventListener("scroll", ()=>{
        setMyScrollY(true)
        if(scrollY==0){
            setMyScrollY(null)
        }
        
    })
    
   

    const navActvStyle = ({isActive}) =>{
        return({
            textDecoration: isActive ? 'underline' : 'none'
        })
    }
    return (
        <header className={myScroll ? `z-10 flex items-center sticky top-0 bg-slate-50 duration-700 shadow-md`: `z-10 flex sticky top-0 items-center bg-none duration-700`}>
            <div className=' flex justify-between container mx-auto'>
                <div className='flex items-center'>
                    <BsCarFront className='text-6xl text-red-800'></BsCarFront>
                    <div className='p-3'>
                        <h1 className='text-3xl font-bold text-red-800'>ToyCar.com</h1>
                        <span className='font-thin text-slate-600'>A Toy Car Marketplace</span>
                    </div>
                </div>
                <nav className=' flex items-center'>
                    <NavLink style={navActvStyle} className='px-3 text-xl text-red-700 tracking-tight font-semibold active:text-slate-500' to='/'>Home</NavLink>
                    <NavLink style={navActvStyle} className='px-3 text-xl text-red-700 tracking-tight font-semibold active:text-slate-500' to='/alltoys'>All Toys</NavLink>
                    <NavLink style={navActvStyle} className='px-3 text-xl text-red-700 tracking-tight font-semibold active:text-slate-500' to='/mytoys'>My Toys</NavLink>
                    <NavLink style={navActvStyle} className='px-3 text-xl text-red-700 tracking-tight font-semibold active:text-slate-500' to='/addatoy'>Add A Toy</NavLink>
                    <NavLink style={navActvStyle} className='px-3 text-xl text-red-700 tracking-tight font-semibold active:text-slate-500' to='/blog'>Blog</NavLink>
                    <NavLink style={navActvStyle} className='px-3 text-xl text-red-700 tracking-tight font-semibold active:text-slate-500' to='/login'>Login</NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;