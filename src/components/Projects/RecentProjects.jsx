import React from 'react';
import Image from "next/image";
import img1 from '../../../public/Projects/1.jpg';
import img2 from '../../../public/Projects/2.jpg';
import img3 from '../../../public/Projects/3.jpg';
import SearchBar from './SearchBar';

const items = [
    { name: "Spotify Clone", skill: "Front-End", img: img1 },
    { name: "Rejoice Animated website", skill: "Front-End", img: img2 },
    { name: "Netflix clone", skill: "Front-End", img: img3 },
];

const recentProjects = () => {
    return (
        <div className='relative h-[810px] lg:h-[800px] w-full mt-20'>
            <h1 className='font-bold text-3xl lg:text-5xl dark:text-white'>Recent Projects</h1>
            {/* <SearchBar /> */}
            <div className='relative flex flex-wrap h-[60%] lg:h-[50%] w-full'>
                {items.map((item) => {
                    return (
                        <div key={item.name} className='h-[200px] lg:h-[300px] w-full lg:w-[50%] flex justify-between items-center mt-4 border border-dashed border-slate-400 rounded-xl p-2'>
                            <div
                                className="relative h-[100%] w-full overflow-hidden border border-solid border-slate-400 rounded-xl "
                            >
                                <Image src={item.img} alt="image" height={2000} width={2000} className="h-full w-full transform transition-transform duration-300 hover:scale-110" ></Image>
                                <div className="absolute flex justify-center items-center w-full  h-8 bottom-3  ">
                                    <div className="w-[92%] h-full border border-solid dark:bg-white  border-slate-500 rounded-xl p-2 flex justify-between items-center">
                                        <h1 className="text-white dark:text-black">{item.name}</h1>
                                        <h1 className="text-white dark:text-black">{item.skill}</h1>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    )
                })}

            </div>
        </div>
    );
}

export default recentProjects
