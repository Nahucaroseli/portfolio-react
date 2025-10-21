import React from 'react'

function Projects() {
  return (
    <>
      <h1 className="pl-3 pt-20 text-3xl font-bold md:text-4xl">Proyectos</h1>  

      <div className="w-full flex flex-col items-center pt-1">
        <div className="flex flex-col md:pl-3 gap-8 pt-4 w-full items-center justify-center">
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
                <a href="https://github.com/Nahucaroseli/prog3_tpe" target='_blank' className='md:text-xl font-bold underline'>Ver codigo</a>
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
              <h2 className="text-lg font-bold">Vimeo API</h2>
              <h2 className="text-lg font-bold">Mercado Pago Implementation</h2>
              <h2 className="text-lg font-bold">Lucide</h2>
              <h2 className="text-lg font-bold">Lenis</h2>
            </div>
            <div className='p-4 flex flex-row text-white gap-x-5'>
                <a href="https://nicotrainer.pages.dev/" target='_blank' className='md:text-xl font-bold underline'>Ver sitio</a>
            </div>
          </div>
          <div className="flex flex-col w-full max-w-[70rem] h-[500px] md:h-[600px] shadow-lg rounded-lg justify-between" id="project_5">

            <div className="p-4 text-white flex flex-col">
              <h1 className="text-white text-3xl md:text-6xl  font-bold">PORTAL EMPLEO LOBERIA</h1>
              <div className='flex flex-col h-[21rem] md:h-full -mt-5'>
                <h2 className="text-lg mt-10 font-bold">Angular</h2>
                <h2 className="text-lg font-bold">Material</h2>
                <h2 className="text-lg font-bold">Node.js</h2>
                <h2 className="text-lg font-bold">Express.js</h2>
                <h2 className="text-lg font-bold">Supabase</h2>
                <h2 className="text-lg font-bold">JWT</h2>
                <h2 className="text-lg font-bold">PostgreSQL</h2>
                <h2 className="text-lg font-bold">PDFKit</h2>
                <h2 className="text-lg font-bold">BCrypt</h2>
                <h2 className="text-lg font-bold">Joi</h2>
                <h2 className="text-lg font-bold">Multer</h2>
                <h2 className="text-lg font-bold">Nodemailer</h2>
              </div>
            </div>
            <div className='p-4 flex flex-row text-white gap-x-5'>
                <a href="https://empleo.loberia.gob.ar" target='_blank' className='md:text-xl font-bold underline'>Ver Sitio</a>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default Projects