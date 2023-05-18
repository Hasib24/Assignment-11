import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleBtn from '../components/GoogleBtn';
import { FcGoogle } from 'react-icons/fc';


const Login = () => {
    let [show, setShow] = useState(false);

    const handleLogin = (e) =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);
    }

        

    return (
        <div className='border flex justify-center'>

            <form className='py-5 border' onSubmit={handleLogin}>
                <input className='m-2 p-1 border rounded-md outline-none' type="email" name="email" id="email" placeholder='Enter email' required /> <br />
                <input className='m-2 p-1 border rounded-md outline-none' type={show ? 'password' : 'text'} name="password" id="password" placeholder='Password' required /> <br />
                <p onClick={()=>{setShow(!show)}}>{show ? <span>show password</span> : <span>hide password</span> }</p>
                <input className='m-2 p-1 border rounded-md cursor-pointer' type="submit" name="submit" id="submit" value="Login" />
              
                <p>Do not have a account ? <Link to='/register'>Registeration</Link></p>
                <GoogleBtn>login with <FcGoogle className='inline'></FcGoogle></GoogleBtn>


            </form>
            
        </div>
    );
};

export default Login;