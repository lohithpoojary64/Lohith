'use client';
import React from 'react';
import RecentProjects from '@/components/Projects/RecentProjects';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const page = () => {

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },  // Start 50px below with opacity 0
    visible: { opacity: 1, y: 0 },  // Animate to opacity 1 and y 0
  };

  return (
    <motion.div className="min-h-screen h-screen w-full p-2 lg:px-8 overflow-y-scroll hide-scrollbar"
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8, ease: "easeOut" }} // Control duration and easing
      variants={animationVariants}>
      <RecentProjects />
      <Footer />
    </motion.div>
  )
}

export default page;
