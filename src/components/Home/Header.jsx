"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <div className="relative h-[350px] w-full  flex flex-col justify-center items-start">
      <motion.h1
        className="font-sans text-2xl lg:text-4xl font-bold text-black relative mt-4"

      >
        Hi, I'm Lohith Poojary.
      </motion.h1>
      <motion.h1
        className="font-sans text-2xl lg:text-4xl font-bold text-black relative mt-4"

      >
        I'm a Front End Developer.
      </motion.h1>
      <p className="text-sm lg:text-lg mt-4 text-slate-500">
        {" "}
        I have been developing websites since 1 year.
      </p>
      <div className="h-[80px] w-[80%] lg:w-[30%] flex justify-between items-center mt-5">
        <button className="h-[45px] lg:h-[50px] w-[110px] lg:w-[150px] bg-black text-white font-bold p-3 rounded-lg hover:bg-white hover:border hover:border-solid hover:border-black hover:text-black transition-all duration-300" onClick={() => {
          router.push('/contact')
        }}>Get In Touch</button>
        <button className="bg-white text-black font-bold p-3 rounded-lg border border-solid border-black hover:border-slate-600 hover:text-slate-600 transtion-all duration-300" onClick={() => { router.push('/about') }} >About Me</button>
      </div>
    </div>
  );
};

export default Header;
