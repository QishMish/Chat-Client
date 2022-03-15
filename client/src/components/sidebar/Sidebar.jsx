import React from "react";
import { BsFillChatDotsFill } from "react-icons/bs";
import { RiUser2Line } from "react-icons/ri";
import { BsChatSquareText } from "react-icons/bs";
import { BiGroup } from "react-icons/bi";
import { RiContactsLine } from "react-icons/ri";
import { AiOutlineSetting } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { BsMoon } from "react-icons/bs";
import Avatar from "../../assets/images/avatar.png";
import Logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

function Sidebar({ selectComponentHandler }) {
  return (
    <section className="flex flex-col items-center justify-between w-16 h-screen py-6 bg-secondaryDarkLight md:w-20">
      <div className="flex flex-col items-center justify-between space-y-6">
        <div className="p-2 rounded-md cursor-pointer md:p-3">
          {/* <BsFillChatDotsFill className="w-8 h-6 cursor-pointer text-purple md:h-8" /> */}
          <img
            src={Logo}
            className="w-8 h-6 cursor-pointer text-purple md:h-8"
            alt="logo"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-between space-y-6">
        <div className="p-2 rounded-md cursor-pointer active md:p-3">
          <RiUser2Line
            className="w-8 h-6 cursor-pointer text-fontGrey active-text md:h-8"
            id="profile"
            onClick={(e) => selectComponentHandler(e)}
          />
        </div>
        <div className="p-2 rounded-md cursor-pointer md:p-3">
          <BsChatSquareText
            className="w-8 h-6 cursor-pointer text-fontGrey md:h-8"
            id="chats"
            onClick={(e) => selectComponentHandler(e)}
          />
        </div>
        {/* <div className="p-2 rounded-md cursor-pointer md:p-3">
          {" "}
          <BiGroup
            className="w-8 h-6 cursor-pointer text-fontGrey md:h-8"
            id="groups"
          />
        </div> */}
        <div className="p-2 rounded-md cursor-pointer md:p-3">
          {" "}
          <RiContactsLine
            className="w-8 h-6 cursor-pointer text-fontGrey md:h-8"
            id="contacts"
            onClick={(e) => selectComponentHandler(e)}
          />
        </div>
        <div className="p-2 rounded-md cursor-pointer md:p-3">
          <AiOutlineSetting
            className="w-8 h-6 cursor-pointer text-fontGrey md:h-8"
            id="settings"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-between space-y-6 ">
        <Link to="/login" className="p-2 rounded-md cursor-pointer md:p-3">
          <FiLogIn
            className="w-8 h-6 cursor-pointer text-red md:h-8"
            id="settings"
          />
        </Link>

        {/* <BsMoon className='w-8 h-8 text-secondaryWhite ' /> */}
        <img src={Avatar} width="30px" />
      </div>
    </section>
  );
}

export default Sidebar;
