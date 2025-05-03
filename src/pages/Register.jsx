import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const {createUser, setUser, updateUser} = use(AuthContext)
    const [nameError, setNameError] =useState("");

    const navigate = useNavigate();


    const handleRegister = (e) =>{
        e.preventDefault()
        console.log(e.target);
        const form = e.target;
        const name = form.name.value;
        if(name.length < 5){
            setNameError('name should be more then 5 character');
            return;
        }else{
            setNameError("")
        }
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log({name,photo,email,password});

        createUser(email, password).then((result) => {
            const user = result.user;
            // console.log(user);
            updateUser({displayName: name, photoURL: photo})
            .then(()=>{
                setUser({...user,displayName: name, photoURL: photo })
                navigate("/")
            }).catch((error) =>{
                console.log(error);
                setUser(user)
            })
           
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ..
        });
           
    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='text-2xl font-semibold text-center p-5'>Register your account</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                         {/* Name */}
                    <label className="label">Your Name</label>
                    <input type="name" name='name' className="input" placeholder="Name" />
                    {
                        nameError && <p className='text-red-500 text-xs'>{nameError}</p>
                    }
                         {/* Photo URL */}
                    <label className="label">Photo URL</label>
                    <input type="text" name='photo' required className="input" placeholder="Photo url" />
                        {/* email */}
                    <label className="label">Email</label>
                    <input type="email" name='email' required className="input" placeholder="Email" />
                        {/* Password */}
                    <label className="label">Password</label>
                    <input type="password" name='password' required className="input" placeholder="Password" />
                    <button type='submit' className="btn btn-neutral mt-4">Register </button>
                    <p className='text-center'>Already Have An Account ?<Link className='text-blue-500 font-semibold' to="/auth/login"> Login</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;