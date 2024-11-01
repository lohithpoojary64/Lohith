"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import home from "../../public/SliderSection/home.png";
import about from "../../public/SliderSection/about.png";
import project from "../../public/SliderSection/visualization.png";
import contact from "../../public/SliderSection/email.png";

const SlideBarButtons = () => {
  const router = useRouter();
  return (
    <motion.div
      className="mt-8 h-[200px] w-full px-6 flex flex-col justify-between items-start"
      initial={{ width: "100px", opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      transition={{ duration: 1, ease: "easeIn" }}
    >
      <button
        className="h-[20%] w-full flex justify-start items-center gap-3 hover:border hover:border-solid hover:border-slate-400 hover:rounded-md transition-all-ease duration-300 p-2"
        onClick={() => {
          router.push("/home");
        }}
      >
        <Image src={home} alt="Images" height={20} width={20}></Image>
        Home
      </button>
      <button
        className="h-[20%] w-full flex justify-start items-center gap-3 hover:border hover:border-solid hover:border-slate-400 hover:rounded-md transition-all-ease duration-300 p-2"
        onClick={() => {
          router.push("/about");
        }}
      >
        <Image src={about} alt="Images" height={20} width={20}></Image>About
      </button>
      <button
        className="h-[20%] w-full flex justify-start items-center gap-3 hover:border hover:border-solid hover:border-slate-400 hover:rounded-md transition-all-ease duration-300 p-2"
        onClick={() => {
          router.push("/home");
        }}
      >
        <Image src={project} alt="Images" height={20} width={20}></Image>
        Projects
      </button>
      <button
        className="h-[20%] w-full flex justify-start items-center gap-3 hover:border hover:border-solid hover:border-slate-400 hover:rounded-md transition-all-ease duration-300 p-2"
        onClick={() => {
          router.push("/home");
        }}
      >
        <Image src={contact} alt="Images" height={20} width={20}></Image>Contact
      </button>
    </motion.div>
  );
};

export default SlideBarButtons;
