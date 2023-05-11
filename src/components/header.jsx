import React, { useState } from 'react'
import Svg from "../assets/xivTech.svg"

const header = () => {
    const [toggleServices, setToggleServices] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <>
            <nav className="bg-white sticky top-0 z-20 shadow-xl border-gray-200 dark:border-gray-600 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="#" className="z-30 flex h-12 w-12 self-end">
                        <img src={Svg} className='w-8 h-8 lg:h-14 lg:w-14 object-contain' alt="XivTech Logo" />
                        <div className='flex flex-col'>
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">XivTech
                            </span>
                            <span className='self-end font-bold text-[#e65100] text-[10px]'>
                                RPA Experts
                            </span>
                        </div>
                    </a>
                    <button onClick={() =>
                        setToggleMenu(true)
                    } data-collapse-toggle="mega-menu-full" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                    {
                        toggleMenu &&
                        <button onClick={() => { setToggleMenu(false), setToggleServices(false) }}>
                            <svg on className='absolute z-30 cursor-pointer right-5 top-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="25px" height="25px"><path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" /></svg>
                        </button>
                    }
                    <div id="mega-menu-full" className={`items-center justify-between font-medium ${toggleMenu ? "absolute top-0 left-0" : "hidden"} md:relative md:top-0 w-full md:flex md:w-auto md:order-1`}>
                        <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li className='self-center'>
                                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
                            </li>
                            <li className='self-center'>
                                <button id="mega-menu-full-dropdown-button" onClick={() => setToggleServices(!toggleServices)} data-collapse-toggle="mega-menu-full-dropdown" className="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Services <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
                            </li>
                            <li className='self-center'>
                                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Careers</a>
                            </li>
                            <li className='self-center'>
                                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                            </li>
                            <li className='self-center'>
                                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                            </li>
                            <li className='self-center'>

                                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                    Let's Talk
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                {
                    toggleServices &&
                    <div id="mega-menu-full-dropdown" className="w-full absolute top-28 md:top-14 right-5 mt-1 border-gray-200 shadow-sm bg-gray-50 px-4 lg:px-0 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600">
                        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white md:grid-cols-2 md:px-6">
                            <ul>
                                <li>
                                    <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <div className="font-semibold underline">Complete AI + RPA Automation</div>
                                    </a>
                                    <div className='flex'>
                                        <img src="https://www.xivtech.io./rp1.jpg" className='h-24 w-36 object-contain' alt="Bots image" />
                                        <span className="self-center text-sm text-gray-500 dark:text-gray-400 pl-4">Build deploy and scale bots</span>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <div className="font-semibold underline">Simplify cloud ops - Apply the new rules of ops</div>
                                    </a>
                                    <div className='flex'>
                                        <img src="https://www.xivtech.io./cl2.jpg" className="h-24 w-36 object-contain" alt="Kubernetes Image" />
                                        <div className='flex self-center pl-1 flex-col'>
                                            <span className="text-sm pb-3 text-gray-500 dark:text-gray-400">Kubernetes - Enterprise ready runtime</span>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">CCID</span>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                            <ul>
                                <li>
                                    <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <div className="font-semibold underline">Build better apps the cloud native way</div>
                                    </a>
                                    <div className='flex'>
                                        <img src="https://www.xivtech.io./a2.jpg" className="h-24 w-36 object-contain" alt="Kubernetes Image" />
                                        <div className='flex flex-col pl-1 self-center justify-between'>

                                            <span className="text-sm pb-3 text-gray-500 dark:text-gray-400">Build Apps - Deliver new apps users love
                                            </span>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                                Modernize Apps - Rearchitect valuable legacy apps
                                            </span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <div className="font-semibold underline">Cloud Services</div>
                                    </a>
                                    <div className="flex">
                                        <img src="https://www.xivtech.io./a1.jpg" className="h-24 w-36 object-contain" alt="Kubernetes Image" />
                                        <div className='flex flex-col self-center pl-1'>

                                            <span className="text-sm pb-3 text-gray-500 dark:text-gray-400">Azure
                                            </span>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                                AWS
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                }
            </nav>

        </>
    )
}

export default header
