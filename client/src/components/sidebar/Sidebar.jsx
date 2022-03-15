import React from "react";
import { BsFillChatDotsFill } from "react-icons/bs";
import { RiUser2Line } from "react-icons/ri";
import { BsChatSquareText } from "react-icons/bs";
import { BiGroup } from "react-icons/bi";
import { RiContactsLine } from "react-icons/ri";
import { AiOutlineSetting } from "react-icons/ai";
import { MdLanguage } from "react-icons/md";
import { BsMoon } from "react-icons/bs";
import Avatar from "../../assets/images/avatar.png";
import Logo from "../../assets/images/logo.svg";

function Sidebar({ selectComponentHandler }) {
  return (
    <section className="w-16 bg-secondaryDarkLight h-screen flex flex-col justify-between items-center py-6 md:w-20">
      <div className="space-y-6 flex flex-col justify-between items-center">
        <div className="p-2 rounded-md cursor-pointer md:p-3">
          {/* <BsFillChatDotsFill className="w-8 h-6 text-purple  cursor-pointer  md:h-8" /> */}
          <img
            src={Logo}
            className="w-8 h-6 text-purple  cursor-pointer  md:h-8"
            alt="logo"
          />
        </div>
      </div>
      <div className="space-y-6 flex flex-col justify-between items-center">
        <div className="p-2 rounded-md cursor-pointer active md:p-3">
          <RiUser2Line
            className="w-8 h-6 text-fontGrey cursor-pointer active-text  md:h-8"
            id="profile"
            onClick={(e) => selectComponentHandler(e)}
          />
        </div>
        <div className="p-2 rounded-md cursor-pointer md:p-3">
          <BsChatSquareText
            className="w-8 h-6 text-fontGrey  cursor-pointer  md:h-8"
            id="chats"
            onClick={(e) => selectComponentHandler(e)}
          />
        </div>
        {/* <div className="p-2 rounded-md cursor-pointer md:p-3">
          {" "}
          <BiGroup
            className="w-8 h-6 text-fontGrey  cursor-pointer md:h-8"
            id="groups"
          />
        </div> */}
        <div className="p-2 rounded-md cursor-pointer md:p-3">
          {" "}
          <RiContactsLine
            className="w-8 h-6 text-fontGrey  cursor-pointer  md:h-8"
            id="contacts"
            onClick={(e) => selectComponentHandler(e)}
          />
        </div>
        <div className="p-2 rounded-md cursor-pointer md:p-3">
          <AiOutlineSetting
            className="w-8 h-6 text-fontGrey  cursor-pointer  md:h-8"
            id="settings"
          />
        </div>
      </div>
      <div className="space-y-6 flex flex-col justify-between items-center ">
        <div className="p-2 rounded-md cursor-pointer md:p-3">
          <MdLanguage
            className="w-8 h-6 text-fontGrey  cursor-pointer  md:h-8"
            id="settings"
          />
        </div>

        {/* <BsMoon className='w-8 h-8 text-secondaryWhite ' /> */}
        <img src={Avatar} width="30px" />
      </div>
    </section>
  );
}

export default Sidebar;
