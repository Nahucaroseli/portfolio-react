import { useState } from 'react'

import './App.css'
import HeaderFooter from './components/HeaderFooter'

function App() {


  return (
    <>
      <HeaderFooter></HeaderFooter>
      <div className='w-80 md:w-full pl-3 flex flex-col pt-20 gap-5 md:w-full md:flex-row md:justify-between'>
        <div className='w-auto'>
          <h1 className='text-3xl'>NAHUEL CAROSELI</h1>
          <p className='md:text-xl pt-5'>Hola, soy un desarrollador fullstack de la ciudad de Tandil, Argentina</p>
        </div>
        <img src="/about.jpeg" className="pr-5 w-60 h-60 object-cover" alt="" />
      </div>


      <div className='w-80 flex pl-3 pt-20 md:pt-0 flex-col max-w-[90%] md:w-full'>
        <h1 className='text-xl font-bold text-gray-300'>1- Experiencia</h1>
        <p className='pt-3 text-gray-400 leading-relaxed'>
          desarrollador fullstack freelance 
          <strong className='text-slate-400'> (marzo 2025) - Nico Trainer website</strong>
        </p>
      </div>

      <div className='w-80 flex  pl-3 pt-20 flex-col max-w-[90%] md:w-full'>
        <h1 className='text-xl font-bold text-gray-300'>2- Habilidades</h1>
        <div className="flex flex-col flex-wrap gap-1 pt-3">

          <span className="text-gray-400">React.js</span>
          <span className="text-gray-400">Node.js</span>
          <span className="text-gray-400">TailwindCSS</span>
          <span className="text-gray-400">HTML</span>
          <span className="text-gray-400">CSS</span>
          <span className="text-gray-400">Javascript</span>
          <span className="text-gray-400">Springboot</span>
          <span className="text-gray-400">Java</span>
          <span className="text-gray-400">PostgreSQL</span>

        </div>
      </div>
      <div className='w-80 flex pl-3 pt-20 flex-col max-w-[90%] md:w-full'>
        <h1 className='text-xl font-bold text-gray-300'>3- Educacion</h1>
        <p className='pt-3 text-gray-400 leading-relaxed'>
          UNICEN Tecnicatura Universitaria en Desarrollo de Aplicaciones Informaticas (TUDAI)
          <strong className='text-slate-400'> (2021-2025)</strong>
        </p>
        <p className='pt-3 text-gray-400 leading-relaxed'>
          Tecnico en Informatica Personal y Profesional
          <strong className='text-slate-400'> (2013-2020)</strong>
        </p>
      </div>  
    </>
  )
}

export default App
