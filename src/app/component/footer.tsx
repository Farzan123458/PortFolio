import React from 'react'
import { FaGithub } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <div>
<footer className="text-gray-600 body-font bg-black">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image src={require("../../../Public/Pics/Dev.jpg")} 
                    alt="Farzan Ahmed"
                    width={100}
                    height={100}
                    className='w-[51px] rounded-full'
                    />
      <span className="ml-3 text-xl">FarzanDev</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2020 Copyright All rights have been reserved
      <a
        href="https://twitter.com/knyttneve"
        className="text-gray-600 ml-1"
        rel="noopener noreferrer"
        target="_blank"
      >
      
      </a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
    <Link 
      target="blank_"
      href={"https://github.com/Farzan123458"}
      className= "text-gray-500">
      <FaGithub className='text-3xl hover:text-purple-800 mx-5'/>
      </Link>
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer