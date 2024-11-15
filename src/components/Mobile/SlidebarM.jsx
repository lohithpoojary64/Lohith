'use client';
import React, { useState } from 'react'
import Profile from '../profile';
import { Button, Popup } from 'antd-mobile';
import SlideBarButtons from '../SlideBarButtons';
import menu from '../../../public/menu.png';
import Image from 'next/image';



const SlidebarM = () => {

    const [visible, setVisible] = useState(false);

    const togglePopup = () => {
        setVisible(!visible);
    };
    return (
        <div className='relative h-[80px] w-full flex gap-4 items-center p-3 lg:hidden shadow-sm'>
            <Profile />
            <div className="w-[50%] text-sm ">
                <h1
                    className="font-bold text-xs"
                >
                    Lohith Poojary
                </h1>
                <h2
                    className="font-serif text-xs"
                >
                    Front End Developer
                </h2>
            </div>
            <div className='w-[50%] h-full flex justify-center items-center'>
                <Button onClick={togglePopup} style={{ height: "40px", width: "50px", fontSize:"small", }}><Image src={menu} alt='image' height={20} width={20}></Image></Button>
                <Popup
                    visible={visible}
                    onMaskClick={() => setVisible(false)}
                    position="bottom" // This makes it slide up from the bottom
                    bodyStyle={{ height: '40vh' }}
                >
                    <SlideBarButtons />
                </Popup>
            </div>


        </div>
    )
}

export default SlidebarM
