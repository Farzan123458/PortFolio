import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <div id='About'><section className="text-gray-600 body-font bg-gray-200">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <Image
  className="object-cover object-center rounded"
  alt="hero"
  src="/Pics/Farzan.jpg" // Use a relative path from the `public` folder root
/>

      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium  text-yellow-900">
          About Me
        </h1>
        <p className="mb-5 leading-relaxed">
         I am Farzan Ahmed Studied at FUUAST (Gulshan Campus) In 2nd Semester Of Microbiology. 
        </p>
        <p className="mb-5 leading-relaxed">
         I've also enrolled in Generative AI Governor Initiative Program at Governor House. 
        </p>
        <Link target='blank_' href="/CV/my CV.pdf">
        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          View CV
        </button>
        </Link>

      </div>
    </div>
  </section>
  </div>
  )
}

export default About
