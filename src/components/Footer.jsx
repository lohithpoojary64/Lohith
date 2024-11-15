import React from 'react'

const Footer = () => {
    return (
        <div className='h-[60px] w-full mt-10'>
            <div className="border border-dashed border-gray-500"></div>
            <div className='h-[40px] w-full flex justify-between items-center text-xs lg:text-sm'>
                <h1 className='text-slate-400'>Developed Using NextJs</h1>
                <h1 className='text-slate-400'>@Copyright2024</h1>

            </div>
        </div>
    )
}

export default Footer
