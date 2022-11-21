import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Spinner from '../../Components/Spinner/Spinner';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import googleLogin from './googleLogin';

export default function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { user, loading, providerLogin, signIn } = useContext(AuthContext);
    const [spin, SetSpin] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const [err, setErr] = useState('');

    const from = location.state?.from?.pathname || '/'
    const onSubmit = data => {
        SetSpin(true);
        console.log(data);
        signIn(data.email, data.password)
            .then(result => {
                console.log(result);
                toast('Login successfull')
                console.log('vitore')
                SetSpin(false)
                navigate(from, { replace: true })
            })
            .catch(err => {
                setErr(err.message)
                SetSpin(false)
                console.log(err)
            })
    }

    console.log('baire')
    if (loading) return <Spinner />
    // if (spin) return <Spinner />
    if (user?.uid) return <Navigate to='/' />
    return (
        <div className='lg:mt-36 mx-4'>
            <div className='flex justify-center'>
                <div className='w-96 shadow-lg -shadow-lg p-8 rounded-lg'>
                    <h3 className='text-center mb-9'>Login</h3>
                    <p className=' text-red-500'>{err}</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className=' text-sm' htmlFor="email">Email</label> <br />
                        <input type="email" placeholder="Email" className="input input-bordered w-full mb-3"
                            {...register('email', { required: true })}
                        />
                        <p className=' text-red-500'> {errors?.email && 'Email is required'} </p>
                        <label htmlFor="password" className=' text-sm'>Password</label> <br />
                        <input type="password" placeholder="Password" className="input input-bordered w-full"
                            {...register('password', { required: true })}
                        />
                        <small>Forgot password?</small>
                        <p className=' text-red-500'> {errors?.email && 'Email is required'} </p>
                        {
                            spin ?
                                <div className='btn w-full mt-4'><div className='border-4 w-4 h-4 border-dashed bg-red-500 animate-spin rounded-full'></div></div>
                                :
                                <input type="submit" className='btn w-full mt-4' value="Login" />

                        }
                        <p className=' text-center text-xs mt-2'>New to Doctors Portal?
                            <Link to='/register'><span className='ml-2 text-green-700'>Create account?</span></Link></p>
                        <div className='flex justify-center items-center mt-4'>
                            <div className='h-px w-1/3 bg-slate-500'></div>
                            <div className='mx-2'>Or</div>
                            <div className=' h-px w-1/3 bg-slate-500'></div>
                        </div>
                        <div onClick={() => googleLogin(providerLogin)} className="btn btn-outline w-full mt-4">Sign In with Google</div>
                    </form>
                </div>
            </div>
        </div>
    )
}
