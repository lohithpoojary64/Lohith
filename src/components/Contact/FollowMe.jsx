'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import linkdin from '../../../public/linkdin.png'
import gitHub from '../../../public/github.png';
import email from '../../../public/SliderSection/email.png'

const FollowMe = () => {
  const router = useRouter();
  return (
    <div className='h-[160px] w-full mt-8'>
      <h1 className=' text-xl'>Follow Me</h1>
      <div className='h-[100px] w-[40%] flex justify-between items-center'>
        <div className='w-[100px] h-[40px] rounded-lg p-2 flex gap-2 items-center border border-solid border-black hover:border-blue-500 cursor-pointer' onClick={() => {
          router.push("https://www.instagram.com/lohithpoojary106");
        }} >
          <Image src={email} alt='image' height={20} width={20}></Image>
          Email
        </div>
        <div className='w-[100px] h-[40px] rounded-lg p-2 flex gap-2 items-center border border-solid border-black hover:border-blue-500 cursor-pointer' onClick={() => {
          router.push(
            "https://www.linkedin.com/in/lohith-poojary-64a741238/"
          );
        }} >
          <Image src={linkdin} alt='image' height={20} width={20}></Image>
          Linkdin
        </div>
        <div className='w-[100px] h-[40px] rounded-lg p-2 flex gap-2 items-center border border-solid border-black hover:border-blue-500 cursor-pointer' onClick={() => {
          router.push("https://github.com/lohithpoojary64");
        }} >
          <Image src={gitHub} alt='image' height={20} width={20}></Image>
          GitHub
        </div>
      </div>
    </div>
  )
}

export default FollowMe
