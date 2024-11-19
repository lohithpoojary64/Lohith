import React from 'react';
import Image from 'next/image';
import lohith from '../../../public/lohithP.jpeg';

const About = () => {
    return (
        <div className='h-[300px] lg:h-[350px] w-full flex justify-between items-center mt-20'>
            <div className='h-full w-full lg:w-[40%]'>
                <h1 className='font-bold text-xl dark:text-white'>Hello, I'm Lohith Poojary</h1>
                <h1 className='text-md text-slate-500 mt-4 dark:text-slate-300'>A passionate Front End Developer. I am constantly exploring new technologies and frameworks to stay ahead in the ever-evolving landscape of web development. My goal is to create seamless and visually appealing applications that not only meet client needs but also provide an enjoyable user experience.<br />

                    I am always open to networking and collaboration opportunities. Feel free to reach out if you want to discuss projects, share ideas, or explore potential partnerships!</h1>
            </div>
            <div className='hidden lg:block h-full lg:w-[40%] rounded-xl overflow-hidden'>
                <Image src={lohith} alt='My-Image' height={5000} width={5000} className='h-full w-full bg-cover' ></Image>
            </div>
        </div>
    )
}

export default About
