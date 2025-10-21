import React from 'react'

function About() {
  return (
    <div className='pl-3 w-full flex md:flex-row items-center flex-col pt-5'>
    <div className='text-center md:text-left max-w-[70%]'>
      <h1 className='text-5xl md:text-7xl font-bold'>NAHUEL CAROSELI</h1>
      <p className='text-3xl pt-10 md:text-4xl font-bold'>full-stack developer</p>
      <p className='text-2xl pt-10 md:text-3xl'>Soy desarrollador de aplicaciones web full-stack. Me especializo en aplicar patrones de diseño y principios de programación sólidos para crear soluciones eficientes y escalables. Me apasiona aprender nuevas tecnologías y aplicar las mejores prácticas en el desarrollo de software.</p>
    </div>
    <div className='flex md:flex-row md:gap-x-5 md:pl-30 flex-wrap justify-center'>
      <img src="/about.jpg" className='w-50 h-50 md:w-70 h-70 rounded-4xl object-cover mt-20 transition duration-200 hover:scale-105' alt="" id="about_2"  draggable="false"/>
    </div>
  </div>
  )
}

export default About