import React from 'react';

interface Job {
  role: string;
  company: string;
  period: string;
  description?: string; 
}

const experiences: Job[] = [
  {
    role: 'Freelance full-stack developer',
    company: 'Vimix',
    period: 'Feb 2026 — Abr 2026',
  },
  {
    role: 'Freelance full-stack developer',
    company: 'Nico Trainer Website',
    period: 'Feb 2025 — Oct 2025',
  },
  {
    role: 'Backend developer',
    company: 'Municipalidad de Loberia',
    period: 'Jun 2025 — Sep 2025',
  },
];

function Experience() {
  return (
    <section id="experience" className="min-h-screen w-full flex items-center justify-center bg-black px-6 md:px-12 py-24">
      <div className="max-w-6xl w-full flex flex-col space-y-12">
        
      
        <div className="flex flex-col space-y-2">
          <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
            // Trayectoria
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white uppercase">
            Experiencia
          </h2>
        </div>

        <div className="flex flex-col border-t border-zinc-800/60">
          {experiences.map((job, index) => (
            <div
              key={index}
              className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-zinc-800/60 transition-all duration-300 hover:bg-zinc-900/20 px-2 -mx-2 rounded-lg"
            >
             
              <div className="flex flex-col space-y-1">
                <h3 className="text-lg font-medium text-zinc-100 group-hover:text-white transition-colors">
                  {job.role}
                </h3>
                <p className="text-sm font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors">
                  {job.company}
                </p>
              </div>

             
              <div className="mt-2 md:mt-0 text-left md:text-right">
                <span className="text-xs font-mono tracking-wider text-zinc-500 group-hover:text-zinc-300 transition-colors uppercase">
                  {job.period}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;
