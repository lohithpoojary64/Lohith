import React from 'react';
import Image from 'next/image';
import next from '../../../public/next.png';
import express from '../../../public/express.png';
import antd from '../../../public/antd.svg';
import framer from '../../../public/framer.svg';
import git from '../../../public/git.png';
import gitHub from '../../../public/github.png';
import node from '../../../public/node.png';
import react from '../../../public/react.png';
import tailwind from '../../../public/tailwind.svg';
import typesctipt from '../../../public/typescript.svg';

const items = [
    { skill: "NextJs", img: next },
    { skill: "ReactJs", img: react },
    { skill: "TypeScript", img: typesctipt },
    { skill: "Tailwind Css", img: tailwind },
    { skill: "Ant Design", img: antd },
    { skill: "Framer", img: framer },
    { skill: "NodeJs", img: node },
    { skill: "ExpressJs", img: express },
    { skill: "Git", img: git },
    { skill: "GitHub", img: gitHub },

]







const MyStack = () => {
    return (
        <div className='h-[300px] w-full '>
            <h1 className='font-bold text-3xl'>My Stack</h1>
            <div className='relative h-[200px] w-full flex flex-wrap gap-2 mt-5'>
                {items.map((i) => {
                    return (
                        <div key={i.skill} className=' flex gap-3 items-center h-[80px] w-[160px] '>
                            <div className='h-[60px] w-[60px] border border-dashed border-slate-500 rounded-xl flex justify-center items-center'>
                                <Image src={i.img} alt='image' height={2000} width={2000} className='h-[50px] w-[50px]' ></Image>
                            </div>
                            <div className='h-full w-[40%] flex flex-col justify-center items-center'>
                                <h1 className=' text-md'>{i.skill}</h1>

                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MyStack
