import React from 'react';
import Image from 'next/image';
import lohith from '../../../public/lohithP.jpeg';

const About = () => {
    return (
        <div className='h-[340px] lg:h-[350px] w-full flex justify-between items-center mt-20'>
            <div className='h-full w-full lg:w-[40%]'>
                <h1 className='font-bold text-xl'>Hello, I'm Lohith Poojary</h1>
                <h1 className='text-md text-slate-500 mt-4'>A passionate Junior Product Designer with a strong background in motion design and illustration. With a deep love for creativity and innovation, I’ve crafted engaging visual experiences and intuitive, user-friendly interfaces.<br />

                    Previously, I created animated content on Instagram, which allowed me to refine my skills in storytelling through motion. My work focuses on delivering designs that exceed user expectations while staying updated with the latest trends to ensure fresh and relevant results.</h1>
            </div>
            <div className='hidden lg:block h-full lg:w-[40%] rounded-xl overflow-hidden'>
                <Image src={lohith} alt='My-Image' height={5000} width={5000} className='h-full w-full bg-cover' ></Image>
            </div>
        </div>
    )
}

export default About
