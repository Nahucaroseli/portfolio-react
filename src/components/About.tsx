import React from 'react';

function About() {
  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center bg-black px-6 md:px-12 py-24">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
        
    
        <div className="md:col-span-8 flex flex-col justify-center space-y-6 text-left">
          
        
          <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
            // Full-Stack Developer
          </span>
          
       
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white uppercase">
            Nahuel Caroseli
          </h1>
          
        
          <p className="text-base md:text-lg text-zinc-400 font-light leading-relaxed max-w-2xl pt-2">
            Soy desarrollador de aplicaciones web full-stack. Me especializo en aplicar patrones de 
            diseño y principios de programación sólidos para crear soluciones eficientes y escalables. 
            Me apasiona aprender nuevas tecnologías y aplicar las mejores prácticas en el desarrollo de software.
          </p>

        
          <div className="flex items-center space-x-2 pt-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono text-zinc-500">Disponible para nuevos proyectos</span>
          </div>
        </div>

      
        <div className="md:col-span-4 md:col-start-9 flex justify-center md:justify-end">
          <div className="relative group w-full max-w-[280px] aspect-square">
         
            <div className="absolute -inset-2 rounded-xl bg-zinc-900 opacity-0 group-hover:opacity-100 transition duration-500 blur-sm" />
            
            <img 
              src="/about-1.jpg" 
              className="relative w-full h-full object-cover rounded-lg grayscale hover:grayscale-0 border border-zinc-800 transition-all duration-500" 
              alt="Nahuel Caroseli" 
              id="about_2"  
              draggable="false"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
