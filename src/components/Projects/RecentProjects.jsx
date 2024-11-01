import React from 'react';
import Image from "next/image";
import img1 from '../../../public/Projects/1.jpg';
import img2 from '../../../public/Projects/2.jpg';
import img3 from '../../../public/Projects/3.jpg';

const items = [
  { name: "Ecommerce", skill:"Front-End", img: img1 },
  { name: "Netflix Clone", skill:"Front-End", img: img2 },
  { name: "Spotify Clone", skill:"Front-End", img: img3 },
];

const recentProjects = () => {
    return (
        <div className='h-[300px] w-full mt-20'>
            <h1 className='font-bold text-5xl'>Recent Projects</h1>
            <div>
                {items.map((item) => {
                    return (
                        <div
                            key={item.name}
                            className="relative h-[100%] w-[50%] overflow-hidden border border-solid border-slate-400 rounded-2xl"
                        >
                            <Image src={item.img} alt="image" height={2000} width={2000} className="h-full w-full transform transition-transform duration-300 hover:scale-110" ></Image>
                            <div className="absolute flex justify-center items-center w-full  h-8 bottom-3  ">
                                <div className="w-[92%] h-full border border-solid border-slate-500 rounded-xl p-2 flex justify-between items-center">
                                    <h1 className="text-white">{item.name}</h1>
                                    <h1 className="text-white">{item.skill}</h1>
                                </div>
                            </div>
                        </div>
                    )
                })};

            </div>
        </div>
    );
}

export default recentProjects
