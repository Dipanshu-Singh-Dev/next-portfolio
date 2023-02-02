import React from "react";
import SkillContainer from "./SkillContainer";
import { v4 as uuid } from "uuid";
import { motion } from "framer-motion";
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
  const variants = {
    inView: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.25,
      },
    },
    hidden: {
      opacity: 0.5,
      x: 10,
    },
  };
  return (
    <motion.div
      variants={variants}
      whileInView="inView"
      initial="hidden"
      className="pb-10"
    >
      <h1 className="text-4xl text-cyan-700 dark:text-cyan-300">Skills :</h1>
      <div
        id="skills-container"
        className="flex flex-row gap-4 flex-wrap justify-center py-10"
      >
        {skillsArr.map((elem) => {
          return <SkillContainer key={uuid()} name={elem} />;
        })}
      </div>
    </motion.div>
  );
};

export default Skills;
