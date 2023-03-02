import React from "react";
import MotionDiv from "./MotionDiv";
import {
  TbBrandNextjs,
  TbBrandReactNative,
  TbBrandJavascript,
  TbBrandCss3,
  TbBrandHtml5,
  TbBrandPython,
  TbBrandTailwind,
} from "react-icons/tb";
import { SiJava, SiRedux, SiGit } from "react-icons/si";
import Image from "next/image";
const Projects = () => {
  const obj = {
    "React.JS": <TbBrandReactNative size={50} />,
    "Next.JS": <TbBrandNextjs size={50} />,
    Javascript: <TbBrandJavascript size={50} />,
    CSS3: <TbBrandCss3 size={50} />,
    HTML5: <TbBrandHtml5 size={50} />,
    Python: <TbBrandPython size={50} />,
    Java: <SiJava size={50} />,
    Tailwind: <TbBrandTailwind size={50} />,
    Redux: <SiRedux size={40} />,
    Git: <SiGit size={50} />,
  };
  return MotionDiv(
    <div className="text-4xl text-cyan-700 dark:text-cyan-300 pb-20">
      <h1 className="pb-10">Projects :</h1>
      <a className="flex flex-row gap-8" href="http://goggol.netlify.app">
        <Image src="/google_clone.png" width={500} height={100} />
        <div>
          <h3 className=" text-2xl pb-4">Google Clone</h3>

          <p className="text-base">
            A simple design language, eye candy animations and a ton of
            functionality. My take on google.
          </p>
          <p className="text-base pt-2">Technologies used</p>
          <div className="flex justify-around pt-6">
            {obj["React.JS"]}
            {obj["Redux"]}
          </div>
        </div>
      </a>
    </div>
  );
};

export default Projects;
