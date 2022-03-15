import React from "react";
import { BiImage } from "react-icons/bi";
import { AiOutlineSend } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { MdAttachFile } from "react-icons/md";

function SendMessage() {
  return (
    <div className="w-full basis-1/6 bg-primaryDark flex justify-between items-center px-8 border-secondaryDarkLight border-b-2  border-secondaryDarkLight border-t-2 ">
      <input
        type="search"
        class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal  bg-secondaryDarkLight bg-white bg-clip-padding  rounded-r-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none  h-12"
        placeholder="Enter New Message"
        aria-label="Search"
        aria-describedby="button-addon2"
      />
      <BsEmojiSmile className="w-8 text-purple cursor-pointer md:w-12" />
      <MdAttachFile className="w-8 text-purple cursor-pointer md:w-12" />
      <BiImage className="w-8 text-purple cursor-pointer md:w-12" />
      <div className="bg-purple p-4 rounded-md text-primaryWhite cursor-pointer ">
        <AiOutlineSend />
      </div>
    </div>
  );
}

export default SendMessage;
