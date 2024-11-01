import React from 'react'

const Header = () => {
    return (
        <div className='h-[180px] w-full  mt-20 '>
            <h1 className='font-bold text-5xl'>About Me</h1>
            <div className="h-[80px] w-[30%] flex justify-start items-center mt-5">
                <button className="h-[40px] w-[120px] bg-black text-white font-bold p-3 rounded-lg hover:bg-white hover:border hover:border-solid hover:border-black hover:text-black transition-all duration-300 text-sm">Get In Touch</button>
            </div>
        </div>
    )
}

export default Header
