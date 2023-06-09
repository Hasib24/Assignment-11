import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { BsCarFront } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
import { GoThreeBars } from 'react-icons/go';
import { AuthContex } from '../providers/AuthContextProvider';

const Header = () => {

    const navigate = useNavigate();

    const [ responsiveMenu, setResponsiveMenu ] = useState(false);
    const [ profileMenu, setProfileMenu ] = useState(false);
    const [hoverMenu, setHoverMenu] = useState(false)
    
    const [myScroll, setMyScrollY] = useState(false)
    const { user, setUser, logOut } = useContext(AuthContex)
    
    
    window.addEventListener("scroll", ()=>{
        setMyScrollY(true)
        if(scrollY==0){
            setMyScrollY(null)
        }
        
    })

    const handleLogOut = () =>{
        
        logOut()
        .then(() => {
            setUser(null)
            navigate('/')
        }).catch((error) => {
          console.log(error.message);
        });
    }
    
    const handleHoverMenu = ()=>{
        setHoverMenu(!hoverMenu)
    }
   

    const navActvStyle = ({isActive}) =>{
        return({
            textDecoration: isActive ? 'underline' : 'none'
        })
    }
    return (
        <header className={myScroll ? `z-10 px-5 flex items-center sticky top-0 bg-slate-50 duration-700 shadow-md`: `z-10 px-5 flex sticky top-0 items-center bg-none duration-700`}>
            <div className=' flex justify-between items-center container mx-auto'>
                <div className='flex items-center'>
                    <Link to='/'><BsCarFront className='text-6xl text-red-800'></BsCarFront></Link>
                    <div className='p-3'>
                        <h1 className='text-3xl font-bold text-red-800'>ToyCar.com</h1>
                        <span className='font-thin text-slate-600'>A Toy Car Marketplace</span>
                    </div>
                </div>
                <div className='text-3xl p-1 border  rounded-md md:hidden'>
                    { responsiveMenu ? <MdClose onClick={()=>setResponsiveMenu(!responsiveMenu)}></MdClose> : <GoThreeBars onClick={()=>setResponsiveMenu(!responsiveMenu)}></GoThreeBars> }
                </div>
                <nav className={`text-xl flex flex-col md:block  p-2 ${responsiveMenu ? `absolute right-4 top-20 bg-[#363636de] rounded-md` : `absolute right-2 -top-48`} md:static md:bg-inherit duration-500`}>
                    <NavLink style={navActvStyle} className='px-3 text-xl text-red-700 tracking-tight font-semibold active:text-slate-500' to='/'>Home</NavLink>
                    <NavLink style={navActvStyle} className='px-3 text-xl text-red-700 tracking-tight font-semibold active:text-slate-500' to='/alltoys'>All Toys</NavLink>
                    <NavLink style={navActvStyle} className='px-3 text-xl text-red-700 tracking-tight font-semibold active:text-slate-500' to='/blog'>Blog</NavLink>
                    {
                        user ? <>
                            <NavLink style={navActvStyle} className='px-3 text-xl text-red-700 tracking-tight font-semibold active:text-slate-500' to='/mytoys'>My Toys</NavLink>
                            <NavLink style={navActvStyle} className='px-3 text-xl text-red-700 tracking-tight font-semibold active:text-slate-500' to='/addatoy'>Add A Toy</NavLink>
                            <div className='inline'>
                                <img className='w-10 border-2 border-slate-500 cursor-pointer rounded-full  inline' src={user.photoURL} alt="Photo" onClick={()=>setProfileMenu(!profileMenu)} onMouseEnter={handleHoverMenu} onMouseLeave={handleHoverMenu}/>
                                <p className={hoverMenu ? `inline absolute right-0 top-20 pr-5 text-sm font-extralight `: `hidden`}>
                                    <span>{user.displayName}</span>
                                    <br />
                                    <span>Click on head</span>

                                </p>
                            </div>
                            <div className={profileMenu ? `absolute top-30 right-0 bg-slate-100 shadow-md p-5 rounded-md`:`absolute -top-60 right-0 bg-slate-100 shadow-md p-5 rounded-md`}>
                                <h1>{user.displayName}</h1>
                                <button onClick={handleLogOut}>Logout</button>
                            </div>
                        </>:<>
                            <NavLink style={navActvStyle} className='px-3 text-xl text-red-700 tracking-tight font-semibold active:text-slate-500' to='/login'>Login</NavLink>
                        </>
                    }
                </nav>
            </div>
        </header>
    );
};

export default Header;