import { useEffect, useState } from 'react'
import Lenis from '@studio-freight/lenis';
import './App.css'
import CustomCursor from './components/CustomCursor'

function App() {

  const lenis = new Lenis({
    duration: 1.2, 
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true, 
    smoothTouch: true, 
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);

  return (
    < >
    <CustomCursor></CustomCursor>
        <div className='w-full flex flex-wrap justify-center items-center flex-col pt-20 '>
          <div className='text-center'>
            <h1 className='text-4xl md:text-8xl font-bold'>I’M NAHUEL CAROSELI</h1>
            <p className='text-3xl pt-5 md:text-6xl'>a passionate fullstack developer</p>
          </div>
          <div className='flex md:flex-row md:gap-x-5 flex-wrap justify-center'>
            <img src="/img2.jpg" className='hidden w-100 h-100 object-cover mt-20 md:block transition duration-200 hover:scale-105' alt="" id="about_1"  draggable="false"/>
            <img src="/about.jpeg" className='w-70 h-70 md:w-100 h-100 object-cover mt-20 transition duration-200 hover:scale-105' alt="" id="about_2"  draggable="false"/>
          </div>
        </div>

      <div className='w-80 flex pl-3 mt-40 md:pt-0 flex-col max-w-[90%] md:w-full'>
        <h1 className='text-2xl font-bold md:text-4xl'>1- Experience</h1>
        <p className='pt-3 leading-relaxed text-xl md:text-2xl'>
          Freelance fullstack developer
          <strong className=''> (march 2025) - Nico Trainer website</strong>
        </p>
      </div>

      <div className='w-80 flex  pl-3 pt-20 flex-col max-w-[90%] md:w-full'>
        <h1 className='text-2xl font-bold md:text-4xl'>2- Skills</h1>
        <div className="flex flex-col flex-wrap gap-1 pt-3">

          <span className="text-xl md:text-2xl">React.js</span>
          <span className="text-xl md:text-2xl">Node.js</span>
          <span className="text-xl md:text-2xl">Express.js</span>
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
      <h1 className="pl-3 pt-20 text-2xl font-bold md:text-4xl">4- Projects</h1>  
      <div className="w-full flex flex-col items-center pt-1">

          <div className="flex flex-col md:flex-row flex-wrap md:pl-3 gap-8 pt-4">
            <a href="https://compra-facil.netlify.app/" target='_blank' className='cursor-none'>
              <div className="flex flex-col w-80 md:w-96 shadow-lg transition duration-150 hover:shadow-2xl hover:scale-105 rounded-lg">
                <img src="/project1.png" className="w-full h-56 object-cover" alt="E-commerce store" />
                <div className="p-4">
                  <h1 className="text-xl md:text-2xl font-bold">Compra facil e-commerce</h1>
                  <h1 className="text-lg">React.js - TailwindCSS - MongoDB</h1>
                </div>
              </div>
            </a>
            <a href="https://n-react.netlify.app/" target='_blank' className='cursor-none'>
              <div className="flex flex-col w-80 md:w-96 shadow-lg transition duration-150 hover:shadow-2xl hover:scale-105 rounded-lg">
                <img src="/project2.jpg" className="w-full h-56 object-cover" alt="Note app" />
                <div className="p-4">
                  <h1 className="text-xl md:text-2xl font-bold">Note app</h1>
                  <h1 className="text-lg">React.js - TailwindCSS - Springboot - PostgreSQL</h1>
                </div>
              </div>
            </a>
            <a href="https://github.com/Nahucaroseli/prog3_tpe" target='_blank' className='cursor-none'>
              <div className="flex flex-col w-80 md:w-96 shadow-lg transition duration-150 hover:shadow-2xl hover:scale-105 rounded-lg">
                <img src="/project3.jpg" className="w-full h-56 object-cover" alt="Multiprocessor scheduling" />
                <div className="p-4">
                  <h1 className="text-xl md:text-2xl font-bold">Multiprocessor scheduling</h1>
                  <h1 className="text-lg">Java - Data structures - Backtracking - Greedy Algorithm</h1>
                </div>
              </div>
            </a>
            <a href="https://nicotrainer.pages.dev/" target='_blank' className='cursor-none'>
              <div className="flex flex-col w-80 md:w-96 shadow-lg transition duration-150 hover:shadow-2xl hover:scale-105 rounded-lg">
                <img src="/project4.webp" className="w-full h-56 object-cover" alt="Nico Trainer Website" />
                <div className="p-4">
                  <h1 className="text-xl md:text-2xl font-bold">Nico Trainer Website</h1>
                  <h1 className="text-lg">React.js - TailwindCSS - Node.js</h1>
                </div>
              </div>
            </a>
          </div>
      </div>
      <div>
      <div className='flex flex-row justify-between'> 
        <div>
            <div className='pl-3 w-80 flex  mt-40 md:pt-0 flex-col max-w-[90%] md:w-full md:flex-row justify-between'>
                    <div>
                      <h1 className='text-2xl font-bold md:text-4xl'>Contact me</h1>
                      <p className='pt-3 leading-relaxed text-xl md:text-2xl hover:underline hover:underline-lg'>
                        nahucaroseli2100@gmail.com
                      </p>
                    </div>
                </div>
                <div className='pl-3 w-80 mt-10 flex md:pt-0 flex-col max-w-[90%] md:w-full md:flex-row'>
                  <div className='flex flex-col'>
                      <h1 className='text-2xl font-bold md:text-4xl'>Socials</h1>
                      <a href='https://www.linkedin.com/in/nahuel-caroseli' className='pt-3 leading-relaxed text-xl md:text-2xl hover:underline hover:underline-lg cursor-none'>
                        Linkedin
                      </a>
                      <a href='https://www.instagram.com/nahu_caroseli' className='pt-3 leading-relaxed text-xl md:text-2xl hover:underline hover:underline-lg cursor-none'>
                        Instagram
                      </a>
                      <a href='https://github.com/Nahucaroseli' className='pt-3 leading-relaxed text-xl md:text-2xl hover:underline hover:underline-lg cursor-none'>
                        Github
                      </a>
                      <a href='/resume-nahuel-caroseli.pdf' download="cv" className='pt-3 leading-relaxed text-xl md:text-2xl hover:underline hover:underline-lg cursor-none'>
                        Download resume
                      </a>
                  </div>
             </div>
        </div>
        <img src="/img.jpg" className='object-cover mt-40 mr-5 hidden md:flex md:w-90 h-90 transition duration-200 hover:scale-105' alt="" />    
      </div>
      </div>

    </>
  )
}

export default App
