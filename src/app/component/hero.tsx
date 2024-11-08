"use client";
import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import Link from 'next/link';


const Hero = () => {
  return (
    <div><section className="text-gray-600 body-font bg-slate-300">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-yellow-900">
          Hello! Assalam o alaikum
        </h1>
        <span className="mb-8 leading-relaxed text-4xl ">
        <Typewriter
  options={{
    strings: ['I Am Farzan','Back-end Developer', 'Microbiology Student'],
    autoStart: true,
    loop: true,
  }}
/>
        </span>
        <div className="flex justify-center">
          <Link href={"#Contact"}>
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Contact
          </button>
          </Link>
          
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Image
          className="object-cover object-center rounded-full"
          alt="hero"
          src={require("../../../Public/Pics/Farzan.jpg")}
          
        />
      </div>
    </div>
  </section>
  </div>
  )
}

export default Hero