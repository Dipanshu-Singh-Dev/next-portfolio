import React from "react";

const Intro = () => {
  let cls =
    "bg-gradient-to-r from-cyan-500 to-teal-500 inline-block text-transparent bg-clip-text";
  return (
    <div>
      <h1 className={"text-[60px] font-burtons font-thin " + cls}>
        Hey There! I'm Dipanshu Singh.
      </h1>
      <br />
      <p className="text-cyan-500 text-2xl font-medium font-poppins">
        I'm a Front-End Web Developer.
      </p>
    </div>
  );
};

export default Intro;
