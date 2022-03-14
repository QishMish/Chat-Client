/** @format */

import React from 'react';
import { RiUser2Line } from 'react-icons/ri';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <section className='h-screen w-full bg-primaryDark flex flex-col justify-center	items-center'>
      <h2 className='font-semibold text-2xl text-green'>Sign In</h2>
      <p className='m-3 text-lg text-primaryWhite'>Sign In To Continiue</p>
      <form className='flex flex-col p-10 bg-secondaryDark'>
        <div className='flex flex-col my-3'>
          <label className='my-1 text-primaryWhite font-medium	 '>
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
          <label className='my-1 text-primaryWhite font-medium'>Password</label>
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
        <Link to='/chat'>
          <input
            type='submit'
            value='Sign Up'
            className='h-10 mt-4 w-72 rounded-sm text-primaryWhite bg-purple font-semibold cursor-pointer '
          />
        </Link>
        <div className='flex flex-row justify-start items-center mt-6 '>
          <input type='checkbox' className='text-ms ' />
          <label for='checkbox' className='pl-2 text-primaryWhite text-md'>
            Remember Me
          </label>
        </div>
        <Link
          to='/reset'
          className='flex justify-end text-sm text-primaryWhite'>
          Forgot Password?
        </Link>
      </form>
      <p className='m-3 text-primaryWhite '>
        Do Not Have An Account?{' '}
        <Link to='/register' className='text-green cursor-pointer'>
          Sign Up
        </Link>
      </p>
    </section>
  );
}

export default Login;
