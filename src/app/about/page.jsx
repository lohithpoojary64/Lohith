'use client';
import { motion } from 'framer-motion';
import About from '@/components/About/About'
import BasedIn from '@/components/About/BasedIn'
import Experience from '@/components/About/Experience'
import Header from '@/components/About/Header'
import Footer from '@/components/Footer'
import MyStack from '@/components/Home/MyStack'
import React from 'react'

const page = () => {
  const animationVariants = {
    hidden: { opacity: 0, y: 50 },  // Start 50px below with opacity 0
    visible: { opacity: 1, y: 0 },  // Animate to opacity 1 and y 0
  };

  return (
    <motion.div initial="hidden"
      animate="visible"
      transition={{ duration: 0.8, ease: "easeOut" }} // Control duration and easing
      variants={animationVariants} className='min-h-screen h-screen w-full p-2 lg:px-8 bg-slate-100  overflow-y-scroll hide-scrollbar'>
      <Header />
      <div className="border border-dashed border-gray-400"></div>
      <BasedIn />
      <About />
      <Experience />
      <MyStack />
      <Footer />
    </motion.div>
  )
}

export default page
