import React from 'react'

const Experience = () => {
    return (
        <div className='h-[310px] lg:h-[300px] w-full mt-3 lg:mt-20'>
            <h1 className='font-bold text-xl lg:text-3xl dark:text-white'>Work Experience</h1>
            <div className='h-[200px] w-full flex justify-between items-center mt-10'>
                <div className='h-full w-[40%] lg:w-[50%] flex flex-col'>
                    <p className='text-slate-500 text-xs lg:text-lg'>Tikanga Private Limited (Internship) | <span className='text-[10px] lg:text-sm'>JUL-2024 - OCT-2024</span></p>
                    <h1 className='text-xs lg:text-md dark:text-slate-300'>Front End Developer</h1>
                </div>
                <div className='h-full w-[50%] text-xs lg:text-lg dark:text-slate-300'>
                   <ul className='list-disc'>
                    <li>Worked with Team Lead and core developers to build multiple projects.</li>
                    <li>Collaborated with Backend Team Lead and Developers for API integration.</li>
                    <li>Presented a Demo of MyPayLink app in front of all office members.</li>
                    <li>Technologies used : NextJs , Tailwind Css , Antd , Framer motion.</li>
                   </ul>
                </div>
            </div>
        </div>
    )
}

export default Experience
