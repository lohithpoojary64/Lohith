"use client";
import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="relative h-[350px] w-full p-5 flex flex-col justify-center items-start">
      <motion.h1
        className="font-sans text-3xl font-bold text-black relative mt-4"
        initial={{ fontSize: "10px", opacity: 0 }}
        animate={{ fontSize: "40px", opacity: 1 }}
        transition={{ duration: 1, ease: "easeIn" }}
      >
        Hi, I'm Lohith Poojary.
      </motion.h1>
      <motion.h1
        className="font-sans text-7xl font-bold text-black relative mt-4"
        initial={{ fontSize: "10px", opacity: 0 }}
        animate={{ fontSize: "40px", opacity: 1 }}
        transition={{ duration: 1, ease: "easeIn" }}
      >
        I'm a Front End Developer.
      </motion.h1>
      <p className="text-lg mt-4 text-slate-500">
        {" "}
        I have been developing websites since 1 year.
      </p>
      <div className="h-[80px] w-[25%] flex justify-between items-center mt-5">
        <button className="h-[50px] w-[150px] bg-black text-white font-bold p-3 rounded-lg hover:bg-white hover:border hover:border-solid hover:border-black hover:text-black transition-all duration-300">Get In Touch</button>
        <button className="bg-white text-black font-bold p-3 rounded-lg border border-solid border-black hover:border-slate-600 hover:text-slate-600 transtion-all duration-300" >About Me</button>
      </div>
    </div>
  );
};

export default Header;
