import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import GoogleBtn from '../components/GoogleBtn';
import { FcGoogle } from 'react-icons/fc';
import { AuthContex } from '../providers/AuthContextProvider';
import useTitle from '../hooks/useTitle';


const Login = () => {

    const navigate = useNavigate();
    const location = useLocation

    const from = location.state?.from?.pathname || '/';

    useTitle('Login')
    const {signInUser, setUser} = useContext(AuthContex)
    let [show, setShow] = useState(false);

    const handleLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        let email = form.email.value;
        let password = form.password.value;

        signInUser(email, password)
        .then(res =>{
            setUser(res.user)
            form.reset()
            navigate(from, {replace: true})
        })
    }

        

    return (
        <div className='p-8 my-10 max-w-md mx-auto justify-center border rounded-md shadow-lg'>

            <form className='p-8' onSubmit={handleLogin}>
                <input className='outline-none border rounded-md my-3 w-full md:mx-auto' type="email" name="email" id="email" placeholder='Enter email' required /> <br />
                <input className='outline-none border rounded-md my-3 w-full md:mx-auto' type={show ? 'password' : 'text'} name="password" id="password" placeholder='Password' required /> <br />
                <p onClick={()=>{setShow(!show)}}>{show ? <span>show password</span> : <span>hide password</span> }</p>
                <input className='bg-blue-600 border border-blue-600 duration-700 text-white active:bg-blue-500 hover:bg-white hover:text-slate-800 cursor-pointer outline-none rounded-md my-3 w-full md:mx-auto py-2 font-semibold disabled:bg-slate-200' type="submit" name="submit" id="submit" value="Login" />
              
                <p>Do not have a account ? <Link to='/register' className='text-blue-600 underline'>Registeration</Link></p>


            </form>
            <div className='px-8'>
                <h1 className=' text-center font-bold text-slate-700'>OR</h1>
                <GoogleBtn><FcGoogle className='inline text-xl mx-2'></FcGoogle>Login with Google</GoogleBtn>
            </div>
            
        </div>
    );
};

export default Login;