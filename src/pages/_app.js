import { Provider } from "react-redux";
import "../../static/tailwind.css";
import Image from "../Components/Image";
import Intro from "../Components/Intro";
import Navbar from "../Components/Navbar";
import Skills from "../Components/Skills";
import Github_Contribution from "../Components/Github_Contribution";
import LeetCode_Activity from "../Components/LeetCode_Activity";
import Projects from "../Components/Projects";
import Contact from "@/Components/Contact";
import Head from "next/head";
import Footer from "@/Components/Footer";
export default function Home() {
  return (
    <>
      <Head>
        <title>DS' Portfolio</title>
      </Head>
      <div className="bg-cyan-50 px-5 dark:bg-gray-900 md:px-20 lg:px-40 min-h-screen dark:text-slate-100 py-10">
        <Navbar />
        <Image alt="profile" />
        <Intro />
        <Skills />
        <Github_Contribution />
        <LeetCode_Activity />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
