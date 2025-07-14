import React from 'react'

function Projects() {
  return (
    <>
      <h1 className="pl-3 pt-20 text-3xl font-bold md:text-4xl">Projects</h1>  

      <div className="w-full flex flex-col items-center pt-1">
        <div className="flex flex-col md:pl-3 gap-8 pt-4 w-full items-center justify-center">
          <div className="flex flex-col w-full max-w-[70rem] h-[500px] md:h-[600px] shadow-lg rounded-lg justify-between" id="project_1">
            <div className="p-4 text-white flex flex-col">
            <h1 className="text-white text-3xl md:text-6xl  font-bold">COMPRA FACIL</h1>
              <h2 className="text-lg mt-10 font-bold">React.js</h2>
              <h2 className="text-lg font-bold">TailwindCSS</h2>
              <h2 className="text-lg font-bold">MongoDB</h2>
              <h2 className="text-lg font-bold">React Hot Toast</h2>
              <h2 className="text-lg font-bold">Node.js</h2>
              <h2 className="text-lg font-bold">Express.js</h2>
              <h2 className="text-lg font-bold">MongoDB</h2>
              <h2 className="text-lg font-bold">Mongoose</h2>
              <h2 className="text-lg font-bold">JWT</h2>
            </div>
            <div className='p-4 flex flex-row text-white gap-x-5'>
                <a href="https://github.com/Nahucaroseli/e-commerce-react" target='_blank' className='md:text-xl font-bold underline'>FRONTEND CODE</a>
                <a href="https://github.com/Nahucaroseli/e-commerce-backend" target='_blank' className='md:text-xl font-bold underline'>BACKEND CODE</a>
                <a href="https://compra-facil.netlify.app/" target='_blank' className='md:text-xl font-bold underline'>WEBSITE</a>
            </div>
          </div>
          <div className="flex flex-col w-full max-w-[70rem] h-[500px] md:h-[600px] shadow-lg rounded-lg justify-between" id="project_3">

            <div className="p-4 text-white flex flex-col">
            <h1 className="text-white text-3xl md:text-6xl  font-bold">MULTIPROCESSOR SCHEDULING</h1>
              <h2 className="text-lg mt-10 font-bold">Java</h2>
              <h2 className="text-lg font-bold">Backtracking Algorithm</h2>
              <h2 className="text-lg font-bold">Greedy Algorithm</h2>
              <h2 className="text-lg font-bold">Graphs</h2>
              <h2 className="text-lg font-bold">Trees</h2>
              <h2 className="text-lg font-bold">LinkedList</h2>
            </div>
            <div className='p-4 flex flex-row text-white gap-x-5'>
                <a href="https://github.com/Nahucaroseli/prog3_tpe" target='_blank' className='md:text-xl font-bold underline'>CODE</a>
            </div>
          </div>
          <div className="flex flex-col w-full max-w-[70rem] h-[500px] md:h-[600px] shadow-lg rounded-lg justify-between" id="project_4">

            <div className="p-4 text-white flex flex-col">
            <h1 className="text-white text-3xl md:text-6xl  font-bold">NICO TRAINER WEBSITE</h1>
              <h2 className="text-lg mt-10 font-bold">React.js</h2>
              <h2 className="text-lg font-bold">TailwindCSS</h2>
              <h2 className="text-lg font-bold">Node.js</h2>
              <h2 className="text-lg font-bold">Express.js</h2>
              <h2 className="text-lg font-bold">Brevo API</h2>
            </div>
            <div className='p-4 flex flex-row text-white gap-x-5'>
                <a href="https://nicotrainer.pages.dev/" target='_blank' className='md:text-xl font-bold underline'>WEBSITE</a>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default Projects