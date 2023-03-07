import React from "react";
import { AiFillLinkedin, AiFillMail, AiFillGithub } from "react-icons/ai";
import MotionDiv from "./MotionDiv";
const Contact = () => {
  let open = "{";
  let close = "}";

  return MotionDiv(
    <div className=" text-left mx-8 text-xl lg:mx-48 font-poppins md:mx-24 text-cyan-700 dark:text-cyan-200 flex flex-col gap-8">
      <p className="text-left">
        if (You'd like to know more or get in touch) {open}
      </p>

      <a href="https://www.linkedin.com/in/dipanshu-singh-645821153/">
        <AiFillLinkedin size={50} />
      </a>
      <a href="mailto:work.dipanshu.singh@gmail.com">
        <AiFillMail size={50} />
      </a>
      <a href="https://github.com/Dipanshu-Singh-Dev">
        <AiFillGithub size={50} />
      </a>
      <p className="text-left">{close}</p>
      <p className="text-left">else {open}</p>
      <p className="text-left">Connect on LinkedIn anyway.</p>
      <p className="text-left">{close};</p>
    </div>
  );
};

export default Contact;
