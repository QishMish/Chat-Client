import React from "react";
import ChatHeader from "./header/ChatHeader";
import SendMessage from "./sendMessage/SendMessage";

function ChatComponent() {
  const data = [
    {
      username: "user",
      text: "please, save this pictures to your file and give it to me after you have done with editing!",
      time: "10:31",
    },
    {
      username: "user",
      text: "please, save this pictures to your file and give it to me after you have done with editing!",
      time: "10:31",
    },
    {
      username: "user",
      text: "please, save this pictures to your file and give it to me after you have done with editing!",
      time: "10:31",
    },
    {
      username: "user",
      text: "please, save this pictures to your file and give it to me after you have done with editing!",
      time: "10:31",
    },
  ];

  return (
    <section className="bg-primaryDark w-screen h-screen flex flex-col">
      <ChatHeader />
      <div className="basis-5/7">da</div>
      <SendMessage />
    </section>
  );
}

export default ChatComponent;
