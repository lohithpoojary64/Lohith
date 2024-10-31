"use client";
import React from "react";
import Profile from "./profile";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import SlideBarButtons from "./SlideBarButtons";
import insta from "../../public/SliderSection/instagram-svgrepo-com.svg";
import linkdin from "../../public/SliderSection/linkedin-svgrepo-com.svg";
import git from "../../public/SliderSection/github-svgrepo-com.svg";

const Slidebar = () => {
  const router = useRouter();

  return (
    <div className="relative bg-slate-100 min-h-screen h-screen w-[20%] border border-solid border-x-black">
      <div className="h-[100px] w-full p-2 flex justify-between items-center">
        <Profile />
        <div className="w-[60%] text-sm ">
          <motion.h1
            initial={{ fontSize: "small", opacity: 0 }}
            animate={{ fontSize: "large", opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="font-bold text-lg"
          >
            Lohith Poojary
          </motion.h1>
          <motion.h2
            initial={{ fontSize: "small", opacity: 0 }}
            animate={{ fontSize: "medium", opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="font-serif"
          >
            Front End Developer
          </motion.h2>
        </div>
      </div>
      <div className="w-full h-[2px] px-4">
        <div className="border border-dashed border-slate-300"></div>
      </div>
      <SlideBarButtons />
      <div className="absolute bottom-0 h-[100px] w-full p-3">
        <p className="text-slate-400">Follow Me</p>
        <div className="border border-dashed border-slate-300"></div>
        <div className="h-[50px] w-[50%] flex justify-between items-start mt-3">
          <Image
            src={insta}
            alt="image"
            height={15}
            width={15}
            className="hover:bg-black trasition-all duration-300 cursor-pointer"
            onClick={() => {
              router.push("https://www.instagram.com/lohithpoojary106");
            }}
          ></Image>
          <Image
            src={linkdin}
            alt="image"
            height={15}
            width={15}
            className="hover:bg-black trasition-all duration-300 cursor-pointer"
            onClick={() => {
              router.push(
                "https://www.linkedin.com/in/lohith-poojary-64a741238/"
              );
            }}
          ></Image>
          <Image
            src={git}
            alt="image"
            height={15}
            width={15}
            className="hover:bg-black trasition-all duration-300 cursor-pointer"
            onClick={() => {
              router.push("https://github.com/lohithpoojary64");
            }}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Slidebar;
