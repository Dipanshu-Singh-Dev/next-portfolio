import { Provider } from "react-redux";
import "../../static/tailwind.css";
import Image from "./Components/Image";
import Intro from "./Components/Intro";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import Github_Contribution from "./Components/Github_Contribution";
import LeetCode_Activity from "./Components/LeetCode_Activity";
import Projects from "./Components/Projects";
import Google_Clone from "./Components/Google_Clone";

export default function Home() {
  return (
    <div className="bg-cyan-50 px-5 dark:bg-gray-900 md:px-20 lg:px-40 min-h-screen dark:text-slate-100 py-10">
      <Navbar />
      <Image />
      <Intro />
      <Skills />
      <Github_Contribution />
      <LeetCode_Activity />
      <Projects />
    </div>
  );
}
