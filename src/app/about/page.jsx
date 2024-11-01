import About from '@/components/About/About'
import BasedIn from '@/components/About/BasedIn'
import Experience from '@/components/About/Experience'
import Header from '@/components/About/Header'
import Footer from '@/components/Footer'
import MyStack from '@/components/Home/MyStack'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen h-screen w-full px-8 bg-slate-100  overflow-y-scroll '>
      <Header />
      <div className="border border-dashed border-gray-400"></div>
      <BasedIn/>
      <About/>
      <Experience/>
      <MyStack/>
      <Footer/>
    </div>
  )
}

export default page
