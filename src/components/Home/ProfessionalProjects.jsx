'use client';
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import img1 from '../../../public/Projects/1.jpg';
import img2 from '../../../public/Projects/2.jpg';
import img3 from '../../../public/Projects/3.jpg';

const items = [
  { name: "Spotify Clone", skill: "Front-End", img: img1 , link:'https://spotify-clone1-snowy.vercel.app/' },
  { name: "Rejoice", skill: "Front-End", img: img2 ,link:"https://animated-website-liard-tau.vercel.app/"},
  { name: "Netflix Clone", skill: "Front-End", img: img3,link:"/" },
];

const SelectedProjects = () => {
  const router = useRouter();
  return (
    <div className="h-[650px] lg:h-[400px] w-[100%] flex flex-col justify-center items-start mt-6 lg:mt-0">
      <h1 className="font-bold text-xl lg:text-3xl dark:text-white">Selected Projects</h1>
      <div className="relative lg:flex lg:flex-row flex-col justify-between items-center h-full lg:h-[300px] w-full border border-dashed border-slate-400 rounded-xl mt-5 px-3">
        {items.map((item) => {
          return (
            <div
              key={item.name}
              onClick={()=>{router.push(item.link)}}
              className="relative h-[30%] mt-3 lg:mt-0 w-full lg:h-[80%] lg:w-[33%] overflow-hidden cursor-pointer border border-solid border-slate-400 rounded-2xl"
            >
              <Image src={item.img} alt="image" height={2000} width={2000} className="h-full w-full transform transition-transform duration-300 hover:scale-110" ></Image>
              <div className="absolute flex justify-center items-center w-full  h-8 bottom-3  ">
                <div className=" w-[92%] h-full border border-solid border-slate-500 rounded-xl p-2 flex justify-between items-center bg-white">
                  <h1 className=" text-black">{item.name}</h1>
                  <h1 className=" text-black">{item.skill}</h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectedProjects;
