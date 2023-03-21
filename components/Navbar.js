import React, { useState } from 'react'
import ChevronDownIcon from '@heroicons/react/24/solid/ChevronDownIcon'
import MapPinIcon from '@heroicons/react/24/solid/MapPinIcon'
import { pinmapIcon } from '@/assets'
import Image from 'next/image'

export default function Navbar() {
    const [dropdown, setDropdown] = useState(false)
    const [dropdown2, setDropdown2] = useState(false)
    return (
        <div>
            <nav>
                <div className='bg-slate-100 w-full md:w-full h-16 shadow-md md:p-3 '>
                    <div className='flex flex-row justify-between items-center md:px-3'>
                        <div className='flex flex-row gap-1'>
                            <h3 className='text-xl font-bold'>Firorial</h3>
                            <Image src={pinmapIcon} alt="pin" className='w-5 h-5' />
                        </div>
                        <div className='flex flex-row gap-10'>
                            <a className='text-gray-700 hover:text-gray-800' href='#'>About</a>
                            <a href='#' onMouseOver={() => {
                                setDropdown(!dropdown)
                                setDropdown2(false)
                            }} className='flex flex-row items-center gap-1'>
                                <p>Service</p>
                                <ChevronDownIcon className={`w-5 text-blue-500 ${dropdown ? 'rotate-180 transition duration-300' : ''}`} />
                            </a>
                            <div className={`bg-white h-auto shadow-lg md:p-2 md:w-56 transition duration-300 ease-in-out z-10 ${dropdown ? 'block' : 'hidden'}`}>
                                <a className='text-gray-700 hover:text-gray-800' href='#'>About</a>
                                <a className='text-gray-700 hover:text-gray-800' href='#'>About</a>
                            </div>
                            <a href='#' onMouseOver={() => {
                                setDropdown(false)
                                setDropdown2(!dropdown2)
                            }} className='flex flex-row items-center gap-1'>
                                <p>Pricing</p>
                                <ChevronDownIcon className={`w-5 text-blue-500 ${dropdown2 ? 'rotate-180 transition duration-300' : ''}`} />
                            </a>
                            <a className='text-gray-700 hover:text-gray-800' href='#'>Contact</a>
                        </div>
                        <div className='flex flex-row gap-5 items-center justify-center'>
                            <a className='text-gray-700 hover:text-gray-800' href='#'>Login</a>
                            <button
                                className='bg-blue-500 hover:bg-blue-700 transition-colors rounded-full w-28 h-10 text-white'
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {
                dropdown2 ?
                    <div className='bg-white h-auto shadow-lg md:p-2 md:w-56 transition duration-300 ease-in-out z-10'>
                        <a className='text-gray-700 hover:text-gray-800' href='#'>About</a>
                        <a className='text-gray-700 hover:text-gray-800' href='#'>About</a>
                    </div> : ""
            }
        </div>
    )
}
