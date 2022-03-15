import React from "react";
import Avatar from "../../../assets/images/avatar.png";
import { BsThreeDots } from "react-icons/bs";

function ChatHeader() {
  return (
    <div className="w-full basis-1/6 bg-primaryDark flex justify-between items-center px-8 border-secondaryDarkLight border-b-2 ">
      <div className="flex justify-between items-center space-x-2 ">
        <img src={Avatar} alt="icon" className="w-12 h-12" />
        <span className="text-md font-semibold text-fontLightGrey">
          John Doe
        </span>
      </div>
      <BsThreeDots className="w-8 h-8 text-fontLightGrey cursor-pointer"/>
    </div>
  );
}

export default ChatHeader;
