import React from 'react';
import RecentProjects from '@/components/Projects/RecentProjects';

const page = () => {
  return (
    <div className='min-h-screen h-screen w-full overflow-y-scroll px-8'>
      <RecentProjects />
    </div>
  )
}

export default page;
