/** @format */

import React from 'react';
import ChatHeader from './header/ChatHeader';
import SendMessage from './sendMessage/SendMessage';
import Message from './message/Message';

function ChatComponent() {
  const messages = [
    {
      username: 'User',
      text: 'Hi !',
      time: '10:31',
    },
    {
      username: 'Admin',
      text: 'hi john',
      time: '10:31',
    },
    {
      username: 'User',
      text: 'how is going on your project?',
      time: '10:31',
    },
    {
      username: 'Admin',
      text: 'please, save this pictures to your file and give it to me after you have done with editing!',
      time: '10:31',
    },
    {
      username: 'Admin',
      text: 'please, save this pictures to your file and give it to me after you have done with editing!',
      time: '10:31',
    },
    {
      username: 'Admin',
      text: 'hi john',
      time: '10:31',
    },
    {
      username: 'User',
      text: 'how is going on your project?',
      time: '10:31',
    },
    {
      username: 'Admin',
      text: 'hi john',
      time: '10:31',
    },
    {
      username: 'User',
      text: 'how is going on your project?',
      time: '10:31',
    },
  ];

  return (
    <section className='flex flex-col w-screen h-screen bg-primaryDark'>
      <ChatHeader />
      <div className='h-full px-4 overflow-y-auto spacing-y-4 scrollbar-hide'>
        {messages.map((product, index) => {
          return <Message {...product} key={index} />;
        })}
      </div>
      <SendMessage />
    </section>
  );
}

export default ChatComponent;
