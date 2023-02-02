import React from "react";
import { motion } from "framer-motion";
const MotionDiv = (children) => {
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
    <motion.div whileInView="inView" initial="hidden" variants={variants}>
      {children}
    </motion.div>
  );
};

export default MotionDiv;
