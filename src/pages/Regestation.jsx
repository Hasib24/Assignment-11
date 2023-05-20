import React, { useContext, useState } from 'react';
import GoogleBtn from '../components/GoogleBtn';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { AuthContex } from '../providers/AuthContextProvider';
import { getAuth, updateProfile } from 'firebase/auth';
import { app } from '../../firebase.config';

const auth = getAuth(app);

const Regestation = () => {
    const { createUser, setUser } = useContext(AuthContex)
    const [show, setShow] = useState(false);
    const [ inputError, setInputError ] = useState('')
    const [ inputSucess, setInputSucess ] = useState('')

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        let name = form.name.value;
        let email = form.email.value;
        let password = form.password.value;
        let photoURL = form.url.value;

        if(!/(?=.*[a-z])/.test(password)){

            setInputError('use alteast one lower case')
            return
        }else if(!/(?=.*[A-Z])/.test(password)){
            setInputError('use at least one uppercase')
            return
        }
        else if(!/(?=.*[!#$%&? "])/.test(password)){
            setInputError('use at least one special charecter')
            return
        }


        createUser(email, password)
        .then((res) =>{

            updateProfile(auth.currentUser, { displayName: name, photoURL: photoURL })
            .then(()=>{
                // profile updated 
            })
            .catch(error => console.log(error.message))


            setInputError('');
            setInputSucess('Input sucess');

            res.user.displayName = name;
            res.user.photoURL = photoURL;
            setUser(res.user)
            
            form.reset()
        } )
        .catch(error => {
            setInputError(error.message)
            console.log(error.message)
        })

    }

   

    return (
        <div className='p-8 my-10 max-w-md mx-auto justify-center border rounded-md shadow-lg'>

            <form className='p-8' onSubmit={handleOnSubmit}>
                {/* something wrong with name field style  */}
                <input className='outline-none border rounded-md my-3 w-full md:mx-auto' type="name" name="name" id="name" placeholder='Enter name' required /> <br />
                <input className='outline-none border rounded-md my-3 w-full md:mx-auto' type="email" name="email" id="email" placeholder='Enter email' required /> <br />
                <input className='outline-none border rounded-md my-3 w-full md:mx-auto' type={show ? 'password' : 'text'} name="password" id="password" placeholder='Password' required /> <br />
                <p onClick={()=>{setShow(!show)}}>{show ? <span>show password</span> : <span>hide password</span> }</p>
                <input className='outline-none border rounded-md my-3 w-full md:mx-auto' type="url" name="url" id="url" placeholder='url' />
                <input className='bg-blue-600 border border-blue-600 duration-700 text-white active:bg-blue-500 hover:bg-white hover:text-slate-800 cursor-pointer outline-none rounded-md my-3 w-full md:mx-auto py-2 font-semibold disabled:bg-slate-200' type="submit" name="submit" id="submit" value="Register" />

                <div>
                    <h1 className='text-red-400'>{inputError.length ? inputError : ''}</h1>
                    <h1 className='text-green-600'>{inputSucess.length ? inputSucess : '' }</h1>
                </div>

                <p>Already have an accounte ? <Link to='/login' className='text-blue-600 underline'>Login</Link></p>
                
                
            </form>
            <div className='px-8'>
                <GoogleBtn>login with <FcGoogle className='inline'></FcGoogle></GoogleBtn>
            </div>

           
            
            
        </div>
    );
};

export default Regestation;