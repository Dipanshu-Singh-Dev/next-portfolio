import React from "react";
import {
  TbBrandNextjs,
  TbBrandReactNative,
  TbBrandJavascript,
  TbBrandCss3,
  TbBrandHtml5,
  TbBrandPython,
} from "react-icons/tb";
import { SiJava } from "react-icons/si";

const SkillContainer = ({ name }) => {
  let skill =
    "flex flex-row gap-2 items-center text-cyan-600 dark:text-cyan-400 border-solid border-4 border-emerald-200 dark:border-emerald-100 px-6 py-2 rounded-full min-h-18 min-w-[20%]";
  const obj = {
    "React.JS": <TbBrandReactNative size={75} />,
    "Next.JS": <TbBrandNextjs size={75} />,
    Javascript: <TbBrandJavascript size={75} />,
    CSS3: <TbBrandCss3 size={75} />,
    HTML5: <TbBrandHtml5 size={75} />,
    Python: <TbBrandPython size={75} />,
    Java: <SiJava size={75} />,
  };
  console.log(obj[name]);
  return (
    <>
      <div className={skill}>
        {obj[name]}
        <p className="pr-1 text-lg">{name}</p>
      </div>
    </>
  );
};

export default SkillContainer;
