import React from "react";
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
import { BsCircle, BsCircleFill } from "react-icons/bs";
const SkillContainer = ({ name }) => {
  let [state, setState] = React.useState("No");
  let skill =
    "flex flex-row my-3 mx-2 cursor-pointer justify-around items-center text-cyan-600 dark:text-cyan-400 border-solid border-2 border-cyan-200 dark:border-cyan-100 px-6 py-2 rounded-full h-20 lg:w-[20%] md:w-[25%] w-[40%]";
  const objProficiency = {
    "React.JS": (
      <>
        <BsCircleFill />
        <BsCircleFill />
        <BsCircleFill />
      </>
    ),
    "Next.JS": (
      <>
        <BsCircleFill />
        <BsCircle />
        <BsCircle />
      </>
    ),
    Javascript: (
      <>
        <BsCircleFill />
        <BsCircleFill />
        <BsCircleFill />
      </>
    ),
    CSS3: (
      <>
        <BsCircleFill />
        <BsCircleFill />
        <BsCircleFill />
      </>
    ),
    HTML5: (
      <>
        <BsCircleFill />
        <BsCircleFill />
        <BsCircleFill />
      </>
    ),
    Python: (
      <>
        <BsCircleFill />
        <BsCircleFill />
        <BsCircleFill />
      </>
    ),
    Java: (
      <>
        <BsCircleFill />
        <BsCircleFill />
        <BsCircle />
      </>
    ),
    Tailwind: (
      <>
        <BsCircleFill />
        <BsCircleFill />
        <BsCircleFill />
      </>
    ),
    Redux: (
      <>
        <BsCircleFill />
        <BsCircleFill />
        <BsCircle />
      </>
    ),
    Git: (
      <>
        <BsCircleFill />
        <BsCircleFill />
        <BsCircle />
      </>
    ),
  };
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
  return (
    <>
      {state === "No" ? (
        <div className={skill} onMouseEnter={() => setState("Yes")}>
          {obj[name]}
          <p className="pr-1 text-lg">{name}</p>
        </div>
      ) : (
        <div className={skill} onMouseLeave={() => setState("No")}>
          {objProficiency[name]}
        </div>
      )}
    </>
  );
};

export default SkillContainer;
