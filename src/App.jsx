import { useEffect, useState } from 'react'
import Lenis from '@studio-freight/lenis';
import './App.css'
import CustomCursor from './components/CustomCursor'
import ParticlesBackground from './components/ParticlesBackground';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {

  const [copiedText, setCopiedText] = useState(false);

  const copyToClipboard = ()=>{
    navigator.clipboard.writeText("nahucaroseli2100@gmail.com");
    setCopiedText(true);
    setTimeout(()=>setCopiedText(false),3000)
  }

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
    <>
     <ParticlesBackground></ParticlesBackground>
     <CustomCursor></CustomCursor>
    <div className='relative z-100'>
        <div className='pl-3 w-full flex md:flex-row items-center flex-col pt-5'>
          <div className='text-center md:text-left max-w-[70%]'>
            <h1 className='text-6xl md:text-7xl font-bold'>NAHUEL CAROSELI</h1>
            <p className='text-3xl pt-10 md:text-4xl font-bold'>full-stack developer</p>
            <p className='text-2xl pt-10 md:text-3xl'>I am a full-stack web application developer. I specialize in applying design patterns and sound programming principles to create efficient and scalable solutions. I am passionate about learning new technologies and applying best practices in software development.</p>
          </div>
          <div className='flex md:flex-row md:gap-x-5 md:pl-30 flex-wrap justify-center'>
            <img src="/about.jpeg" className='w-50 h-50 md:w-70 h-70 rounded-4xl object-cover mt-20 transition duration-200 hover:scale-105' alt="" id="about_2"  draggable="false"/>
          </div>
        </div>
      <div className='w-80 flex pl-3 mt-40 md:pt-0 flex-col max-w-[90%] md:w-full'>
        <h1 className='text-3xl font-bold md:text-4xl'>1- Experience</h1>
        <p className='pt-3 leading-relaxed text-xl md:text-2xl'>
          Freelance full-stack developer
          <strong className=''> (February 2025 - April 2025) - Nico Trainer</strong>
        </p>
      </div>
      
      <Skills></Skills>
      <div className='w-80 flex pl-3 pt-20 flex-col max-w-[90%] md:w-full'>
        <h1 className='text-3xl font-bold md:text-4xl'>3- Education</h1>
        <p className='pt-3 text-xl leading-relaxed md:text-2xl'>
          UNICEN University Degree in Computer Application Development (TUDAI)
        </p>
        <p className='pt-3 text-xl leading-relaxed md:text-2xl'>
        Personal and Professional IT Technician
        </p>
      </div>
      <div>
      <Projects></Projects>
      <div className='flex flex-row justify-between'> 
        <div>
            <div className='pl-3 w-80 flex  mt-40 md:pt-0 flex-col max-w-[90%] md:w-full md:flex-row justify-between'>
                    <div>
                      <h1 className='text-3xl font-bold md:text-4xl'>Contact me</h1>
                      <p onClick={copyToClipboard} className='pt-3 leading-relaxed text-xl md:text-2xl hover:underline hover:underline-lg'>
                        nahucaroseli2100@gmail.com
                      </p>
                      {copiedText &&
                        <div className='email_copy'>
                          <h1>Copied to Clipboard!</h1>
                          </div>
                        }
                    </div>
                </div>
                <div className='pl-3 w-80 mt-10 flex md:pt-0 flex-col max-w-[90%] md:w-full md:flex-row'>
                  <div className='flex flex-col'>
                      <h1 className='text-3xl font-bold md:text-4xl'>Socials</h1>
                      <a href='https://www.linkedin.com/in/nahuel-caroseli' target='_blank' className='pt-3 leading-relaxed text-xl md:text-2xl hover:underline hover:underline-lg cursor-none'>
                        Linkedin
                      </a>
                      <a href='https://www.instagram.com/nahu_caroseli' target='_blank' className='pt-3 leading-relaxed text-xl md:text-2xl hover:underline hover:underline-lg cursor-none'>
                        Instagram
                      </a>
                      <a href='https://github.com/Nahucaroseli' target='_blank' className='pt-3 leading-relaxed text-xl md:text-2xl hover:underline hover:underline-lg cursor-none'>
                        Github
                      </a>
                      <a href='/Nahuel_Caroseli_CV.pdf' download="cv" className='pt-3 leading-relaxed text-xl md:text-2xl hover:underline hover:underline-lg cursor-none'>
                        Download resume
                      </a>
                  </div>
             </div>
        </div>
        <img src="/img.jpg" className='object-cover mt-40 mr-5 hidden md:flex md:w-90 h-90 transition duration-200 hover:scale-105' alt="" />    
      </div>
      </div>

    </div>
    </>
  )
}

export default App
