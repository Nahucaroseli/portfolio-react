import React from 'react';

interface Degree {
  title: string;
  institution: string;
  period?: string; 
}

const educationList: Degree[] = [
  {
    title: 'Ingenieria en Sistemas',
    institution: 'UNICEN',
    period: 'En curso',
  },
  {
    title: 'Técnico Universitario en Desarrollo de Aplicaciones Informáticas',
    institution: 'UNICEN',
    period: 'Completado',
  },
  {
    title: 'Técnico en Informática Personal y Profesional',
    institution: 'Educación Secundaria',
    period: 'Completado',
  },
];

function Education() {
  return (
    <section id="education" className="min-h-screen w-full flex items-center justify-center bg-black px-6 md:px-12 py-24">
      <div className="max-w-6xl w-full flex flex-col space-y-12">
        
     
        <div className="flex flex-col space-y-2">
          <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
            // Formación
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white uppercase">
            Educación
          </h2>
        </div>

        <div className="flex flex-col border-t border-zinc-800/60">
          {educationList.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-zinc-800/60 transition-all duration-300 hover:bg-zinc-900/20 px-2 -mx-2 rounded-lg"
            >
     
              <div className="flex flex-col space-y-1 max-w-2xl">
                <h3 className="text-lg font-medium text-zinc-100 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors">
                  {item.institution}
                </p>
              </div>

      
              <div className="mt-2 md:mt-0 text-left md:text-right">
                <span className="text-xs font-mono tracking-wider text-zinc-500 group-hover:text-zinc-300 transition-colors uppercase">
                  {item.period}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;
