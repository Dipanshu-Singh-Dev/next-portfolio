import React from "react";
import { AiFillLinkedin, AiOutlineLinkedin } from "react-icons/ai";
import MotionDiv from "./MotionDiv";
const Contact = () => {
  let open = "{";
  let close = "}";

  return MotionDiv(
    <div className=" text-left mx-8 text-xl lg:mx-48 font-poppins md:mx-24 text-cyan-700 dark:text-cyan-200 flex flex-col gap-8">
      <p className="text-left">if (You want to work with me) {open}</p>
      <p className="text-left">Lets get in touch.</p>
      <a href="https://www.linkedin.com/in/dipanshu-singh-645821153/">
        <AiFillLinkedin size={50} />
      </a>
      <p className="text-left">{close}</p>
      <p className="text-left">else {open}</p>
      <p className="text-left">
        Connect on LinkedIn anyway. I appreciate you taking the time to know
        more about me.
      </p>
      <p className="text-left">{close};</p>
    </div>
  );
};

export default Contact;
