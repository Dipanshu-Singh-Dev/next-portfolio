import React from "react";
import MotionDiv from "./MotionDiv";

const LeetCode_Activity = () => {
  return MotionDiv(
    <div className="text-4xl text-cyan-700 dark:text-cyan-300 pb-20">
      <h1 className="pb-10">LeetCode Activity :</h1>
      <img
        className="mx-auto"
        src="https://leetcard.jacoblin.cool/dipanshu_singh_dev?ext=heatmap&font=Poppins&theme=light,dark&width=1000&height=400"
      />
    </div>
  );
};

export default LeetCode_Activity;
