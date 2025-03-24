import { useState } from 'react'

import './App.css'
import CustomCursor from './components/CustomCursor'

function App() {


  return (
    <>
    <CustomCursor></CustomCursor>
      <div className='text-center w-full pl-3 flex flex-col pt-20 gap-5 md:w-full gap-y-20'>
        <div className='w-auto'>
          <h1 className='text-4xl md:text-8xl font-bold'>I’M NAHUEL CAROSELI</h1>
          <p className='text-3xl pt-5 md:text-6xl'>a passionate fullstack developer</p>
        </div>
        <div className='flex flex-row gap-x-5 justify-center'>
          <img src="/img.jpg" className='hidden w-100 h-100 object-cover md:block' alt="" />
          <img src="/img2.jpg" className='hidden w-100 h-100 object-cover md:block' alt="" />
          <img src="/about.jpeg" className='w-80 h-80 md:w-100 h-100 object-cover' alt="" />
        </div>
      </div>

      <div className='w-80 flex pl-3 mt-40 md:pt-0 flex-col max-w-[90%] md:w-full'>
        <h1 className='text-2xl font-bold md:text-4xl'>1- Experience</h1>
        <p className='pt-3 leading-relaxed text-xl md:text-2xl'>
          freelance fullstack developer
          <strong className=''> (march 2025) - Nico Trainer website</strong>
        </p>
      </div>

      <div className='w-80 flex  pl-3 pt-20 flex-col max-w-[90%] md:w-full'>
        <h1 className='text-2xl font-bold md:text-4xl'>2- Skills</h1>
        <div className="flex flex-col flex-wrap gap-1 pt-3">

          <span className="text-xl md:text-2xl">React.js</span>
          <span className="text-xl md:text-2xl">Node.js</span>
          <span className="text-xl md:text-2xl">TailwindCSS</span>
          <span className="text-xl md:text-2xl">HTML</span>
          <span className="text-xl md:text-2xl">CSS</span>
          <span className="text-xl md:text-2xl">Javascript</span>
          <span className="text-xl md:text-2xl">Springboot</span>
          <span className="text-xl md:text-2xl">Java</span>
          <span className="text-xl md:text-2xl">PostgreSQL</span>
          <span className="text-xl md:text-2xl">MongoDB</span>

        </div>
      </div>
      <div className='w-80 flex pl-3 pt-20 flex-col max-w-[90%] md:w-full'>
        <h1 className='text-2xl font-bold md:text-4xl'>3- Education</h1>
        <p className='pt-3 text-xl leading-relaxed md:text-2xl'>
          UNICEN University Degree in Computer Application Development (TUDAI)
          <strong className=''> (2021-2025)</strong>
        </p>
        <p className='pt-3 text-xl leading-relaxed md:text-2xl'>
        Personal and Professional IT Technician
          <strong className=''> (2013-2020)</strong>
        </p>
      </div>  
      <div className='w-80 flex pl-3 pt-20 flex-col max-w-[90%] md:w-full'>
        <h1 className='text-xl font-bold md:text-4xl'>4- Projects</h1>
        <div className='flex flex-col flex-wrap md:flex-row pt-4 gap-8'>
            <div className='flex flex-col shadow transition duration-150 hover:shadow hover:shadow-2xl h-80 hover:scale-102 rounded-lg'>
              <img src="/project1.png" className='md:w-100 h-80 object-cover' alt="" />
              <div className='pl-4 h-40'>
                <h1 className='pt-3 text-xl md:text-2xl font-bold'>e-commerce online store</h1>
                <h1 className='text-xl'>React.js - TailwindCSS - MongoDB</h1>
              </div>
            </div>
            <div className='flex flex-col shadow transition duration-200 hover:shadow hover:shadow-2xl h-80 hover:scale-102 rounded-lg'>
              <img src="/project2.jpg" className='md:w-90 h-80' alt="" />
              <div className='pl-4 h-40 w-90'>
                <h1 className='pt-3 text-xl md:text-2xl font-bold'>note app</h1>
                <h1 className='text-xl'>React.js - TailwindCSS - Springboot - PostgreSQL</h1>
              </div>
            </div>
            <div className='flex flex-col shadow transition duration-150 hover:shadow hover:shadow-2xl h-80 hover:scale-102 rounded-lg'>
              <img src="/project1.png" className='md:w-100 h-80 object-cover' alt="" />
              <div className='pl-4 h-40'>
                <h1 className='pt-3 text-xl md:text-2xl font-bold'>e-commerce online store</h1>
                <h1 className='text-xl'>React.js - TailwindCSS - MongoDB</h1>
              </div>
            </div>
            <div className='flex flex-col shadow transition duration-150 hover:shadow hover:shadow-2xl h-80 hover:scale-102 rounded-lg'>
              <img src="/project1.png" className='md:w-100 h-80 object-cover' alt="" />
              <div className='pl-4 h-40'>
                <h1 className='pt-3 text-xl md:text-2xl font-bold'>e-commerce online store</h1>
                <h1 className='text-xl'>React.js - TailwindCSS - MongoDB</h1>
              </div>
            </div>
        </div>
      </div>  
    </>
  )
}

export default App
