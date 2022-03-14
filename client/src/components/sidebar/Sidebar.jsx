import React from 'react';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { RiUser2Line } from 'react-icons/ri';
import { BsChatSquareText } from 'react-icons/bs';
import { BiGroup } from 'react-icons/bi';
import { RiContactsLine } from 'react-icons/ri';
import { AiOutlineSetting } from 'react-icons/ai';
import { MdLanguage } from 'react-icons/md';
import { BsMoon } from 'react-icons/bs';
import Avatar from '../../assets/images/avatar.png';

function Sidebar() {
  return (
    <section className='w-20 bg-secondaryDark h-screen flex flex-col justify-between items-center py-6'>
      <div className='space-y-6 flex flex-col justify-between items-center'>
        <BsFillChatDotsFill className='w-8 h-8 text-purple  cursor-pointer' />
      </div>
      <div className='space-y-6 flex flex-col justify-between items-center'>
        <RiUser2Line
          className='w-8 h-8 text-secondaryWhite cursor-pointer '
          id='profile'
        />
        <BsChatSquareText
          className='w-8 h-8 text-secondaryWhite  cursor-pointer'
          id='chats'
        />
        <BiGroup
          className='w-8 h-8 text-secondaryWhite  cursor-pointer'
          id='groups'
        />
        <RiContactsLine
          className='w-8 h-8 text-secondaryWhite  cursor-pointer'
          id='contacts'
        />
        <AiOutlineSetting
          className='w-8 h-8 text-secondaryWhite  cursor-pointer'
          id='settings'
        />
      </div>
      <div className='space-y-6 flex flex-col justify-between items-center'>
        <MdLanguage className='w-8 h-8 text-secondaryWhite  cursor-pointer' />
        {/* <BsMoon className='w-8 h-8 text-secondaryWhite ' /> */}
        <img src={Avatar} width='40px' />
      </div>
    </section>
  );
}

export default Sidebar;
