import React from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { VscSmiley } from "react-icons/vsc";
import MotionDiv from "./MotionDiv";
const Navbar = () => {
  let theme = "light";
  return MotionDiv(
    <div className="flex flex-row items-center justify-between pb-24">
      <h1 className="font-burtons text-xl flex flex-row items-center bg-gradient-to-r from-cyan-500 to-teal-500 inline-block text-transparent bg-clip-text dark:bg-gradient-to-r dark:from-cyan-200 dark:to-teal-200 pb-5">
        Welcome to my Portfolio
        <VscSmiley />
      </h1>
      <div className="flex flex-row items-center gap-10 md:gap-15">
        {/* <BsMoonStarsFill
          style={{ cursor: "pointer" }}
          size={"28px"}
          onClick={() => {
            if (theme == "dark") {
              theme = "light";
              document.querySelector("body").className = "light";
            } else {
              theme = "dark";
              document.querySelector("body").className = "dark";
            }
          }}
        /> */}
        <a href="">
          <button className="text-white bg-gradient-to-r from-cyan-500 to-teal-500 rounded-md py-1.5 px-5">
            Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
