import React, { useState } from 'react'
import ChevronDownIcon from '@heroicons/react/24/solid/ChevronDownIcon'
import MapPinIcon from '@heroicons/react/24/solid/MapPinIcon'

export default function Navbar() {
    const [dropdown, setDropdown] = useState(false)
    return (
        <div>
            <nav>
                <div className='bg-slate-100 w-full md:w-full h-16 shadow-md md:p-3 '>
                    <div className='flex flex-row justify-between items-center md:px-3'>
                        <div className='flex flex-row gap-1'>
                            <h3 className='text-xl font-bold'>Firorial</h3>
                            <MapPinIcon className='w-5 text-blue-500'/>
                        </div>
                        <div className='flex flex-row gap-5'>
                            <a className='text-gray-700 hover:text-gray-800' href='#'>About</a>
                            <a href='#' onClick={() => { setDropdown(!dropdown) }} className='flex flex-row items-center gap-1'>
                                <p>Service</p>
                                <ChevronDownIcon className={"w-5 text-blue-500"} />
                            </a>
                            <a className='text-gray-700 hover:text-gray-800' href='#'>Pricing</a>
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
                dropdown ?
                    <div className='bg-white h-auto shadow-lg md:p-2 w-auto transition duration-300 ease-in-out'>
                        <a className='text-gray-700 hover:text-gray-800' href='#'>About</a>
                        <a className='text-gray-700 hover:text-gray-800' href='#'>About</a>
                    </div> : ""
            }
        </div>
    )
}
