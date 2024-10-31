'use client'
import React from "react";
import { motion } from "framer-motion";
import profilePic from "../../public/lohith.jpeg";
import Image from "next/image";

const Profile = () => {
  return (
    <motion.div
      className="h-[100px] w-[100px] flex justify-center items-center lg:h-[200px] lg:w-[200px] border border-solid border-white rounded-full overflow-hidden"
      style={{
        textShadow:
          "0 0 10px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 0, 0, 0.6)",
      }}
      initial={{ width: "10px", height: "10px", opacity: 0 }}
      animate={{ width: "70px", height: "70px", opacity: 1 }}
      transition={{ duration: 1, ease: "easeIn" }}
    >
      <Image
        src={profilePic}
        height={200}
        width={200}
        alt="Profile-picture"
      ></Image>
    </motion.div>
  );
};

export default Profile;
