import React from "react";
import { BsMoonStarsFill } from "react-icons/bs";
const Navbar = () => {
  let theme = "light";
  return (
    <div className="flex flex-row items-center justify-between pb-40">
      <h1 className="font-burtons text-xl">Portfolio</h1>
      <div className="flex flex-row items-center gap-10 md:gap-15">
        <BsMoonStarsFill
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
        />
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
