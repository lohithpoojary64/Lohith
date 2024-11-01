import React from 'react'

const BasedIn = () => {
    return (
        <div className='h-[100px] w-full'>
            <div className='relative h-full w-[55%] shadow-sm rounded-xl bg-white mt-5 p-3 flex justify-between items-center'>
                <div className='h-full w-[30%] flex flex-col justify-center items-center'>
                    <h1 className='font-bold'>Based In</h1>
                    <h1 className='text-md text-slate-400 mt-2'>Manglore , Karnataka</h1>

                </div>
                <div className="border border-dashed border-gray-900  h-full"></div>
                <div className='h-full w-[35%] flex flex-col justify-center items-center'>
                    <h1 className='font-bold'>1+</h1>
                    <h1 className='text-md text-slate-400 mt-2'>years Of Experience</h1>

                </div>
                <div className="border border-dashed border-gray-900  h-full"></div>

                <div className='h-full w-[30%] flex flex-col justify-center items-center'>
                    <h1 className='font-bold'>4+</h1>
                    <h1 className='text-md text-slate-400 mt-2'>Projects Completed</h1>

                </div>
            </div>


        </div>
    )
}

export default BasedIn
