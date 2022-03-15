import React from "react";
import Avatar from "../../assets/images/avatar.png";
import { RiUser2Line } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";

function ChatSidebar() {
  return (
    <section className="bg-secondaryDark flex flex-col items-center p-3 w-full h-screen md:w-80">
      <h2 className="text-fontLightGrey p-4 text-lg text-center">Chats</h2>
      <div class="mb-3 xl:w-96">
        <div class="input-group relative flex flex-wrap items-stretch w-full mb-4 rounded">
          <div className="flex flex-row items-center">
            <div className="basis-1/4 flex items-center justify-center bg-secondaryDarkLight h-full rounded-l-md ">
              <BiSearch className="text-fontGrey" />
            </div>
            <input
              type="search"
              class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal  bg-secondaryDarkLight bg-white bg-clip-padding  rounded-r-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Search Users"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
          </div>
        </div>
      </div>
      <p className="text-fontLightGrey p-4 text-md text-left">Recent</p>
    </section>
  );
}

export default ChatSidebar;
