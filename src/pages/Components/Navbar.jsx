import React from "react";
import { BsMoonStarsFill } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <h1 className="font-burtons text-xl">Dipanshu Singh</h1>
      <div className="flex flex-row items-center gap-10 md:gap-15">
        <BsMoonStarsFill size={"30px"} />
        <a href="">
          <button className="text-white bg-gradient-to-r from-cyan-500 to-teal-500 rounded px-4 py-2">
            Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
