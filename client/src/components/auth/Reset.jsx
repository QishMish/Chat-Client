/** @format */

import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

function Reset() {
  return (
    <section className="h-screen w-full bg-secondaryDark flex flex-col justify-center	items-center">
      <h2 className="font-semibold text-2xl text-fontLightGrey">Sign Up</h2>
      <p className="m-3 text-lg text-fontGrey">Get Your Account Now</p>
      <form className="flex flex-col p-12 bg-primaryDark rounded-sm">
        <div className="flex flex-col my-3">
          <label className="my-1 text-fontGrey font-medium	"> Email</label>
          <div className="flex rounded h-12 w-80   border-primaryWhite">
            <div className="w-full h-full basis-1/6 bg-secondaryDarkLight flex justify-center	items-center rounded-l-md">
              <AiOutlineMail className="text-fontLightGrey" />
            </div>

            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter Email"
              className="  bg-primaryDarkLight outline-none p-3 w-full rounded-r-md"
            />
          </div>
        </div>
        <input
          type="submit"
          value="Reset"
          className="h-10 mt-4 w-80 rounded-sm text-primaryWhite bg-purple font-semibold cursor-pointer "
        />
      </form>
      <p className="m-3 text-fontGrey ">
        Remember It?{" "}
        <Link
          to="/register"
          className="text-green cursor-pointer text-fontLightGrey"
        >
          Sign In
        </Link>
      </p>
    </section>
  );
}

export default Reset;
