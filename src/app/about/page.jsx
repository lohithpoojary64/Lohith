import BasedIn from '@/components/About/BasedIn'
import Header from '@/components/About/Header'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen h-screen w-full px-8 bg-slate-100 '>
      <Header />
      <div className="border border-dashed border-gray-400"></div>
      <BasedIn/>

    </div>
  )
}

export default page
