'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import copyImage from '../../../public/copy.png';
import copy from 'clipboard-copy';

//Used copy-clipboard library for allowing users to copy email.

const Connect = () => {
  const [copyText, setcopyText] = useState('')

  const copyToclipBoard = async () => {
    const text = 'lohithpoojary64@gmail.com';
    let copied = await copy(text);
    setcopyText(copied);
  }

  return (
    <div className='relative h-[90px] w-full mt-4'>
      <h1 className='font-bold text-xl'>Let's Connect</h1>

      {copyText ? <div className='h-[40px] w-[280px] flex gap-3  items-center cursor-pointer p-2 bg-black text-white hover:bg-white hover:border hover:border-solid hover:border-black hover:text-black rounded-xl transition:ease duration-300 mt-4' onClick={copyToclipBoard}>
        <Image className=' h-[20px] w-[20px]' src={copyImage} alt='image' height={2000} width={2000}></Image>
        <h1 className='font-bold'>Copied!</h1>
      </div> : <div className='h-[40px] w-[280px] flex gap-3  items-center cursor-pointer p-2 bg-black text-white hover:bg-white hover:border hover:border-solid hover:border-black hover:text-black rounded-xl transition:ease duration-300 mt-4' onClick={copyToclipBoard}>
        <Image className=' h-[20px] w-[20px]' src={copyImage} alt='image' height={2000} width={2000}></Image>
        <h1 className='font-bold'>lohithpoojary64@gmail.com</h1>
      </div>}
    </div>
  )
}

export default Connect;
