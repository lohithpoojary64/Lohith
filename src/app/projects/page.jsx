import React from 'react';
import RecentProjects from '@/components/Projects/RecentProjects';
import Footer from '@/components/Footer';

const page = () => {
  return (
    <div className='min-h-screen h-screen w-full overflow-y-scroll px-8'>
      <RecentProjects />
      <Footer/>
    </div>
  )
}

export default page;
