import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";



const SocialLogin = () => {
    return (
        <div className='pt-5'>
            <h2 className='font-bold '>Login With</h2>
            <div className='space-y-5'>
                <button className='btn btn-outline w-full text-blue-500'><FcGoogle  size={20}/>
                Login with Google</button>
                <button className='btn btn-outline w-full'><FaGithub size={20}/>
                Login with GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;