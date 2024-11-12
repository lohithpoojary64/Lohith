'use client';
import Connect from '@/components/Contact/Connect'
import FollowMe from '@/components/Contact/FollowMe'
import Header from '@/components/Contact/Header'
import Footer from '@/components/Footer'
import React from 'react';
import { motion } from 'framer-motion';

const contact = () => {

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },  // Start 50px below with opacity 0
    visible: { opacity: 1, y: 0 },  // Animate to opacity 1 and y 0
  };

  return (
    <motion.div className="min-h-screen h-screen w-full px-8 overflow-y-scroll hide-scrollbar"
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8, ease: "easeOut" }} // Control duration and easing
      variants={animationVariants}>
      <Header />
      <div className="border border-dashed border-gray-300 "></div>
      <Connect />
      <FollowMe />
      <Footer />
    </motion.div>
  )
}

export default contact
