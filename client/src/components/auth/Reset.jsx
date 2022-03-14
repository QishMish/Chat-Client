/** @format */

import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Reset() {
  return (
    <section className='h-screen w-full bg-primaryDark flex flex-col justify-center	items-center'>
      <h2 className='font-semibold text-2xl text-green'>Reset Password</h2>
      <p className='m-3 text-lg text-primaryWhite'>Easy Steps To Go Through</p>
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
        <input
          type='submit'
          value='Reset'
          className='h-10 mt-4 w-72 rounded-sm text-primaryWhite bg-purple font-semibold cursor-pointer '
        />
      </form>
      <p className='m-3 text-primaryWhite '>
        Remember It?{' '}
        <Link to='/register' className='text-green cursor-pointer'>
          Sign In
        </Link>
      </p>
    </section>
  );
}

export default Reset;
