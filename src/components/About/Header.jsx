'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const Header = () => {
    const router = useRouter();
    return (
        <div className='h-[180px] w-full  mt-20 '>
            <h1 className='font-bold text-3xl lg:text-5xl dark:text-white'>About Me</h1>
            <div className="h-[80px] -[60%] lg:w-[30%] flex justify-start items-center mt-5">
                <button className="h-[40px] w-[100px] lg:h-[40px] lg:w-[120px] bg-black text-white font-bold p-3 rounded-lg hover:bg-white hover:border hover:border-solid hover:border-black hover:text-black transition-all duration-300 text-xs lg:text-sm dark:border dark:border-solid dark:border-white" onClick={() => {router.push('/contact') }}>Get In Touch</button>
            </div>
        </div>
    )
}

export default Header
