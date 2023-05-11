import React from 'react'
import FramerMotionAnimation from "./framerMotionAnimation"
const child = ({ title, buttonName, textContent, imgSrc }) => {
    return (
        <div className='flex flex-col w-full mb-8 p-4 lg:p-0 lg:flex-row font-serif justify-between'>
            <FramerMotionAnimation>

                <div className='flex flex-col justify-evenly lg:justify-between h-[50vh] w-[95vw] lg:w-[25vw] lg:h-[60vh]'>
                    <h1 className='text-4xl lg:text-6xl  leading-normal'>{title}</h1>
                    <p className='text-lg lg:text-2xl text-[#1f2529d9]'>{textContent}</p>
                    <button className='flex text-lg'>
                        <strong>{buttonName}</strong>
                        <span className='pl-4'>

                            <svg className='h-6 w-6 hover:animate-pulse ' xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 243.58"><path fillRule="nonzero" d="M373.57 0 512 120.75 371.53 243.58l-20.92-23.91 94.93-83L0 137.09v-31.75l445.55-.41-92.89-81.02z" />
                            </svg>
                        </span>
                    </button>
                </div>
            </FramerMotionAnimation>
            <FramerMotionAnimation>

                <div >
                    <img className='h-[50vh] w-[95vw] lg:w-[30vw] object-cover' src={imgSrc} alt="image" />
                </div>
            </FramerMotionAnimation>
        </div>
    )
}

export default child
