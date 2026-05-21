import React from 'react';

interface Project {
  title: string;
  tags: string[];
  linkText: string;
  linkUrl: string;
  type: 'code' | 'live';
}

const projectsList: Project[] = [
  {
    title: 'MULTIPROCESSOR SCHEDULING',
    tags: ['Java', 'Backtracking', 'Greedy Algorithm', 'Graphs', 'Trees', 'LinkedList'],
    linkText: 'Ver código',
    linkUrl: 'https://github.com/Nahucaroseli/prog3_tpe',
    type: 'code',
  },
  {
    title: 'NICO TRAINER WEBSITE',
    tags: ['React.js', 'TailwindCSS', 'Node.js', 'Express.js', 'Brevo API', 'Vimeo API', 'Mercado Pago', 'Lenis'],
    linkText: 'Ver sitio',
    linkUrl: 'https://nicotrainer.pages.dev/',
    type: 'live',
  },
  {
    title: 'PORTAL EMPLEO LOBERIA',
    tags: ['Angular', 'Material', 'Node.js', 'Express.js', 'Supabase', 'JWT', 'PostgreSQL', 'PDFKit', 'BCrypt'],
    linkText: 'Ver sitio',
    linkUrl: 'https://empleo.loberia.gob.ar',
    type: 'live',
  },
  {
    title: 'VIMIX',
    tags: ['React', 'TailwindCSS', 'SpringBoot', 'TypeScript', 'Supabase', 'PostgreSQL'],
    linkText: 'Ver código',
    linkUrl: 'https://github.com/Nahucaroseli',
    type: 'code',
  },
];

function Projects() {
  return (
    <section id="projects" className="min-h-screen w-full flex items-center justify-center bg-black px-6 md:px-12 py-24">
      <div className="max-w-6xl w-full flex flex-col space-y-12">
        
      
        <div className="flex flex-col space-y-2">
          <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
            // Producción y Algoritmia
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white uppercase">
            Proyectos
          </h2>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {projectsList.map((project, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-6 md:p-8 min-h-[320px] bg-zinc-950/40 border border-zinc-900 rounded-xl transition-all duration-300 hover:border-zinc-700/80 hover:bg-zinc-900/10 group"
            >
          
              <div className="flex flex-col space-y-6">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-100 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                
            
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-[10px] md:text-xs font-mono px-2.5 py-1 rounded bg-zinc-900 text-zinc-400 border border-zinc-800/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-zinc-900/80 mt-6 flex justify-between items-center">
                <a
                  href={project.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs md:text-sm font-mono tracking-wider text-zinc-400 group-hover:text-white transition-colors flex items-center gap-1.5 uppercase underline decoration-zinc-700 underline-offset-4 group-hover:decoration-white"
                >
                  {project.linkText}
                  <svg 
                    className="w-3 h-3 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-zinc-500 group-hover:text-white" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                
        
                <span className="text-[10px] font-mono tracking-widest text-zinc-600 uppercase">
                  [{project.type}]
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
