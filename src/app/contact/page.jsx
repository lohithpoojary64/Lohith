import Connect from '@/components/Contact/Connect'
import FollowMe from '@/components/Contact/FollowMe'
import Header from '@/components/Contact/Header'
import React from 'react'

const contact = () => {
  return (
    <div className='min-h-screen h-screen w-full overflow-y-scroll px-8'>
      <Header />
      <div className="border border-dashed border-gray-300 "></div>
      <Connect/>
      <FollowMe/>
    </div>
  )
}

export default contact
