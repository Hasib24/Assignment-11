import React, { useState } from 'react';
import GoogleBtn from '../components/GoogleBtn';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Regestation = () => {
    let [show, setShow] = useState(false);

    const handleRegster = (e) =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);
    }

   

    return (
        <div className='p-8 my-10 max-w-md mx-auto justify-center border rounded-md shadow-lg'>

            <form className='p-8' onSubmit={handleRegster}>
                {/* something wrong with name field style  */}
                <input className='outline-none border rounded-md my-3 w-full md:mx-auto' type="name" name="name" id="name" placeholder='Enter name' required /> <br />
                <input className='outline-none border rounded-md my-3 w-full md:mx-auto' type="email" name="email" id="email" placeholder='Enter email' required /> <br />
                <input className='outline-none border rounded-md my-3 w-full md:mx-auto' type={show ? 'password' : 'text'} name="password" id="password" placeholder='Password' required /> <br />
                <p onClick={()=>{setShow(!show)}}>{show ? <span>show password</span> : <span>hide password</span> }</p>
                <input className='outline-none border rounded-md my-3 w-full md:mx-auto' type="url" name="url" id="url" placeholder='url' />
                <input className='bg-blue-600 border border-blue-600 duration-700 text-white active:bg-blue-500 hover:bg-white hover:text-slate-800 cursor-pointer outline-none rounded-md my-3 w-full md:mx-auto py-2 font-semibold disabled:bg-slate-200' type="submit" name="submit" id="submit" value="Register" />

                <p>Already have an accounte ? <Link to='/login' className='text-blue-600 underline'>Login</Link></p>
                

            </form>
            <div className='px-8'>
                <GoogleBtn>login with <FcGoogle className='inline'></FcGoogle></GoogleBtn>
            </div>

           
            
            
        </div>
    );
};

export default Regestation;