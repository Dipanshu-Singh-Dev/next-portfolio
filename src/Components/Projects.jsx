import React from "react";
import MotionDiv from "./MotionDiv";
const Projects = () => {
  return MotionDiv(
    <div className="text-4xl text-cyan-700 dark:text-cyan-300 pb-20">
      <h1 className="pb-10">Projects :</h1>
      <a href="http://elgoog-enolc.netlify.app">
        <h3 className="text-2xl pb-1">Google Clone</h3>

        <p className="text-base">
          A simple design language, eye candy animations and a ton of
          functionality. My take on google.
        </p>
      </a>
    </div>
  );
};

export default Projects;
