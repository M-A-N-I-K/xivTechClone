import React from 'react'
import FramerMotionAnimation from "./framerMotionAnimation"
const intro = () => {
    return (
        <FramerMotionAnimation>
            <div className='flex justify-center items-center font-serif h-[70vh] w-[100vw]'>
                <div className='flex flex-col w-[85vw] h-[40vh] justify-between'>
                    <p className='font-bold text-lg'>Bot, Process, Efficiency</p>
                    <h1 className='text-4xl lg:text-7xl py-4'>Robotic Process Automation that unifies people, process and technology</h1>
                    <p className='text-lg lg:text-2xl pt-4'>We help business leaders embrace AI-Powered Automation as they endeavor to visualize the future.</p>
                </div>
            </div>
        </FramerMotionAnimation>
    )
}

export default intro
