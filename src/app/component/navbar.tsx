import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MdDownload } from "react-icons/md";



const Navbar = () => {
    return (
        <div className='bg-white z-50 sticky top-0'>
            <header className="text-orange-600 body-font bg-black">
            <div className="container mx-auto flex flex-wrap p-7 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-purple-900 mb-4 md:mb-0">
                    <Image src="/Pics/Dev.jpg"
                    alt="Farzan Ahmed"
                    width={100}
                    height={100}
                    className='w-[51px] rounded-full'
                    />
                    
                    <span className="ml-3 text-xl">FarzanDev</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href="/"className="mr-5 hover:text-yellow-900">Home</Link>
                    <Link href="#About" className="mr-5 hover:text-yellow-900">About</Link>
                    <Link href="#Skills"className="mr-5 hover:text-yellow-900">Skills</Link>
                    <Link href="#Projects"className="mr-5 hover:text-yellow-900">Projects</Link>
                    <Link href="#Contact"className="mr-5 hover:text-yellow-900">Contact</Link>

                </nav>
                    <a target='blank_' href="/CV/my CV.pdf">
                <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-
                focus-outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                    Download CV
                    <MdDownload />


                </button>
                    </a>
            </div>
        </header></div>
    )
}

export default Navbar
