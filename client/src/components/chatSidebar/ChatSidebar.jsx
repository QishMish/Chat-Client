import React from "react";
import Avatar from "../../assets/images/avatar.png";
import { RiUser2Line } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";

function ChatSidebar() {
  return (
    <section className="flex flex-col items-center w-full h-screen p-3 bg-secondaryDark md:w-80">
      <h2 className="p-4 text-lg text-center text-fontLightGrey">Chats</h2>
      <div className="mb-3 xl:w-96">
        <div className="relative flex flex-wrap items-stretch w-full mb-4 rounded input-group">
          <div className="flex flex-row items-center">
            <div className="flex items-center justify-center h-full basis-1/4 bg-secondaryDarkLight rounded-l-md ">
              <BiSearch className="text-fontGrey" />
            </div>
            <input
              type="search"
              className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal  bg-secondaryDarkLight bg-white bg-clip-padding  rounded-r-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Search Users"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
          </div>
        </div>
      </div>
      <p className="p-4 text-left text-fontLightGrey text-md">Recent</p>
    </section>
  );
}

export default ChatSidebar;
