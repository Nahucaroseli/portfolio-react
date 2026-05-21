import React from 'react';

interface SkillCategory {
  category: string;
  skills: string[];
}

const skillSets: SkillCategory[] = [
  {
    category: 'Backend & Core',
    skills: ['Node.js', 'Express.js', 'Java', 'Spring Boot'],
  },
  {
    category: 'Frontend & UI',
    skills: ['JavaScript', 'React.js', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    category:'Database & Tools',
    skills:['PostgreSQL','JPA','GIT','Jira']
  },
  {
    category:'Testing',
    skills:['JUnit','TestNG','Mockito']
  }
];

function Skills() {
  return (
    <section id="skills" className="min-h-screen w-full flex items-center justify-center bg-black px-6 md:px-12 py-24">
      <div className="max-w-6xl w-full flex flex-col space-y-12">
        
  
        <div className="flex flex-col space-y-2">
          <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
            // Stack Técnico
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white uppercase">
            Habilidades
          </h2>
        </div>

    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
          {skillSets.map((set, index) => (
            <div 
              key={index} 
              className="flex flex-col space-y-4 border-l border-zinc-800 pl-6 py-2 transition-colors duration-300 hover:border-zinc-500"
            >
          
              <h3 className="text-sm font-mono tracking-wider text-zinc-400 uppercase">
                {set.category}
              </h3>

       
              <div className="flex flex-wrap gap-2.5">
                {set.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="text-xs font-mono px-3 py-1.5 rounded bg-zinc-900/50 border border-zinc-800/80 text-zinc-300 hover:text-white hover:border-zinc-600 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
