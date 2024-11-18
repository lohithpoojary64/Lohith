'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import copyImage from '../../../public/copy.png';
import copy from 'clipboard-copy';

const Connect = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToclipBoard = async () => {
    const text = 'lohithpoojary64@gmail.com';
    await copy(text); // Copies the email text to clipboard
    setIsCopied(true); // Set the state to true to show "Copied!" message

    // Optional: Reset after a short delay to show the email again
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className='relative h-[90px] w-full mt-4'>
      <h1 className='font-bold text-sm lg:text-xl'>Let's Connect</h1>
      <div 
        className='h-[40px] w-full lg:w-[280px] flex gap-3 items-center cursor-pointer p-2 bg-black text-white hover:bg-white hover:border hover:border-solid hover:border-black hover:text-black rounded-xl transition ease duration-300 mt-4' 
        onClick={copyToclipBoard}
      >
        <Image 
          className='h-[20px] w-[20px]' 
          src={copyImage} 
          alt='Copy Icon' 
          height={20} 
          width={20}
        />
        <h1 className='font-bold'>{isCopied ? 'Copied!' : 'lohithpoojary64@gmail.com'}</h1>
      </div>
    </div>
  );
};

export default Connect;
