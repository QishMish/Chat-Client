/** @format */

import React, { useState } from 'react';
import ChatSidebar from '../components/chatSidebar/ChatSidebar';
import Profile from '../components/profile/Profile';
import Sidebar from '../components/sidebar/Sidebar';
import ChatComponent from '../components/chat/ChatComponent';

function Chat() {
  const enums = {
    profile: 'profile',
    chat: 'chats',
    contact: 'contacts',
  };
  const [selected, setSelected] = useState('profile');

  const selectComponentHandler = e => {
    let id = e.target.id ? e.target.id : e.target.farthestViewportElement.id;
    console.log(id);
    setSelected(id);
  };

  return (
    <section className='flex flex-row'>
      <Sidebar selectComponentHandler={selectComponentHandler} />
      {/* {selected === enums.profile && <Profile />}
      {selected === enums.chat && <ChatSidebar />}
      {selected === enums.contact && <Profile />} */}
      <ChatComponent />
    </section>
  );
}

export default Chat;
