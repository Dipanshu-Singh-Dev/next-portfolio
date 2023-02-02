import React from "react";
import SkillContainer from "./SkillContainer";
import { v4 as uuid } from "uuid";

const Skills = () => {
  let skillsArr = [
    "React.JS",
    "Javascript",
    "CSS3",
    "HTML5",
    "Python",
    "Java",
    "Tailwind",
    "Redux",
    "Git",
    "Next.JS",
  ];
  return (
    <div className="pb-10">
      <h1 className="text-4xl text-cyan-700 dark:text-cyan-300">Skills :</h1>
      <div
        id="skills-container"
        className="flex flex-row gap-4 flex-wrap justify-center py-10"
      >
        {skillsArr.map((elem) => {
          return <SkillContainer key={uuid()} name={elem} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
