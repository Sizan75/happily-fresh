import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/login/signup.png'
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import {GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const {singInGoogle} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleSubmit = event =>{
        event.preventDefault();
        const form=event.target;
        const email= form.email.value;
        const password= form.password.value;

    }
    const handleGoogleSignIn = () => {
        singInGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center ">
                    <img src={login} className='w-3/5 h-3/5 ' alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <h3 className='text-xl font-bold'>Log In</h3>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered input-info w-full max-w-xs" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered input-info w-full max-w-xs" required />
                            <label className="label">
                                <Link to="/signup" className="label-text-alt link link-hover">
                                    Not registered yet? <span className=' text-orange-700'>Sign Up</span></Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Log In</button>
                        </div>
                            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary mt-1 text-dark"><FcGoogle></FcGoogle>  Google Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;