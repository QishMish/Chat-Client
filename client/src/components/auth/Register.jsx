/** @format */

import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { RiUser2Line } from 'react-icons/ri';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <section className='h-screen w-full bg-primaryDark flex flex-col justify-center	items-center'>
      <h2 className='font-semibold text-2xl text-green'>Sign Up</h2>
      <p className='m-3 text-lg text-primaryWhite'>Get Your Account Now</p>
      <form className='flex flex-col p-10 bg-secondaryDark'>
        <div className='flex flex-col my-3'>
          <label className='my-1 text-primaryWhite font-medium	'> Email</label>
          <div className='flex rounded h-10 w-72  border-solid border-2 border-primaryWhite'>
            <div className='w-full h-full basis-1/6 bg-secondaryWhite flex justify-center	items-center'>
              <AiOutlineMail className='text-secondaryDark' />
            </div>

            <input
              type='text'
              name='email'
              id='email'
              placeholder='Enter Email'
              className='  bg-secondaryWhite outline-none p-3 w-full'
            />
          </div>
        </div>
        <div className='flex flex-col my-3'>
          <label className='my-1 text-primaryWhite font-medium	 '>
            {' '}
            UserName
          </label>
          <div className='flex rounded h-10 w-72  border-solid border-2 border-primaryWhite'>
            <div className='w-full h-full basis-1/6 bg-secondaryWhite flex justify-center	items-center '>
              <RiUser2Line className='text-secondaryDark' />
            </div>
            <input
              type='text'
              name='username'
              id='username'
              placeholder='Enter Username'
              className='  bg-secondaryWhite outline-none p-3 w-full '
            />
          </div>
        </div>
        <div className='flex flex-col my-3'>
          <label className='my-1 text-primaryWhite font-medium'>
            {' '}
            Password
          </label>
          <div className='flex rounded h-10 w-72 border-solid border-2 border-primaryWhite'>
            <div className='w-full h-full basis-1/6 bg-secondaryWhite flex justify-center	items-center'>
              <RiLockPasswordLine className='text-secondaryDark' />
            </div>
            <input
              type='text'
              name='password'
              id='password'
              placeholder='Enter Password'
              className='  bg-secondaryWhite outline-none p-3 w-full'
            />
          </div>
        </div>
        <Link to="/chat">
          <input
            type='submit'
            value='Sign Up'
            className='h-10 mt-4 w-72 rounded-sm text-primaryWhite bg-purple font-semibold cursor-pointer '
          />
        </Link>
      </form>
      <p className='m-3 text-primaryWhite '>
        Already Have An Account?{' '}
        <Link to='/login' className='text-green cursor-pointer'>
          Sign In
        </Link>
      </p>
    </section>
  );
}

export default Register;
