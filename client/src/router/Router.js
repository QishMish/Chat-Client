import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';
import Reset from '../components/auth/Reset';
import Chat from '../screens/Chat';

function Router() {
  return (
    <>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/reset' element={<Reset />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </>
  );
}

export default Router;
