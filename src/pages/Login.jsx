import React, { use, useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const [error, setError] = useState("")
    const { signIn } =use(AuthContext)
    const location = useLocation();
    // console.log(location);
    const handleLogin = (e) =>{
        e.preventDefault(e.target);
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({email,password});
        signIn()
        .then((result)=>{
            const user = result.user;
            // console.log(user);
            Navigate(`${location.state? location.state : "/"}`)
        })
        .catch((error)=>{
            const errorCode = error.code;
            // const errorMessage = error.message;
            // alert(errorCode, errorMessage)
            setError(errorCode)
        })
    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='text-2xl font-semibold text-center p-5'>Login your account</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                        {/* email */}
                    <label className="label">Email</label>
                    <input type="email" name='email' required className="input" placeholder="Email" />
                             {/* password */}
                    <label className="label">Password</label>

                    <input type="password" name='password' className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>

                    {
                        error && <p className='text-red-500 text-sm'>{error}</p>
                    }

                    <button type='submit' className="btn btn-neutral mt-4">Login</button>
                    <p className='text-center'>Dont’t Have An Account ?<Link className='text-blue-500 font-semibold' to="/auth/register"> Register</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;