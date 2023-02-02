import React from "react";

const Intro = () => {
  return (
    <div className="pb-20">
      <h1
        className={
          "text-[40px] md:text-[50px] font-burtons font-thin bg-gradient-to-r from-cyan-500 to-teal-500 inline-block text-transparent bg-clip-text dark:bg-gradient-to-r dark:from-cyan-300 dark:to-teal-300 pb-5"
        }
      >
        Hey There!
        <br /> I'm Dipanshu Singh.
      </h1>
      <br />
      <p className="text-cyan-500 dark:text-cyan-200 text-xl md:text-4xl  font-light">
        I'm a Front-End Web Developer.
        <br />I learnt my skills online and from fine instructors at Masai.
      </p>
    </div>
  );
};

export default Intro;
