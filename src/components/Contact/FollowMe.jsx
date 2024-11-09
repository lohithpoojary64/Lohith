import React from 'react';
import Image from 'next/image';
import { Button } from 'antd';
import linkdin from '../../../public//linkdin.png';
import gitHub from '../../../public/github.png'

const FollowMe = () => {
  return (
    <div className='h-[300px] w-full mt-8'>
      <h1 className=' text-xl'>Follow Me</h1>
      <div className='h-[100px] w-[40%] flex justify-between items-center'>
        <Button  >
          <Image src={linkdin} alt='image' height={30} width={30}></Image>
          Linkdin
        </Button>
        <Button  >
          <Image src={gitHub} alt='image' height={30} width={30}></Image>
          Linkdin
        </Button>
        <Button  >
          <Image src={linkdin} alt='image' height={30} width={30}></Image>
          Linkdin
        </Button>
      </div>
    </div>
  )
}

export default FollowMe
