import React, { useState } from 'react';

function Contact() {
  const [copiedText, setCopiedText] = useState<boolean>(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('nahucaroseli2100@gmail.com');
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2500);
  };

  return (
    <section id="contact" className="min-h-screen w-full flex items-center justify-center bg-black px-6 md:px-12 py-24 relative overflow-hidden">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-start">
        
    
        <div className="md:col-span-7 flex flex-col space-y-4">
          <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
            // ¿Tenés un proyecto en mente?
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white uppercase">
            Contactame
          </h2>
          
      
          <div className="relative inline-block pt-4 group">
            <p
              onClick={copyToClipboard}
              className="text-xl sm:text-2xl md:text-3xl font-medium text-zinc-300 hover:text-white transition-colors duration-300 cursor-pointer inline-flex items-center gap-2 select-all"
            >
              nahucaroseli2100@gmail.com
              <span className="text-xs font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors uppercase">
                [Clic para copiar]
              </span>
            </p>

          
            <div
              className={`absolute -bottom-8 left-0 text-xs font-mono text-emerald-400 transition-all duration-300 ${
                copiedText ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              ✓ ¡Copiado al portapapeles con éxito!
            </div>
          </div>
        </div>

      
        <div className="md:col-span-4 md:col-start-9 flex flex-col space-y-4">
          <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
            // Redes y CV
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white uppercase">
            Socials
          </h2>

          <div className="flex flex-col space-y-3 pt-4 border-t border-zinc-900">
            <a
              href="https://www.linkedin.com/in/nahuel-caroseli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-mono text-zinc-400 hover:text-white transition-colors duration-300 w-fit"
            >
              → LinkedIn
            </a>
            <a
              href="https://github.com/Nahucaroseli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-mono text-zinc-400 hover:text-white transition-colors duration-300 w-fit"
            >
              → GitHub
            </a>
            <a
              href="/Nahuel_Caroseli_CV.pdf"
              download="Nahuel_Caroseli_CV"
              className="text-base font-mono text-zinc-400 hover:text-white transition-colors duration-300 pt-2 border-t border-zinc-900/60 w-fit text-emerald-400/90 hover:text-emerald-300"
            >
              ↓ Descargar Currículum
            </a>
          </div>
        </div>

      </div>

      
      <div className="absolute bottom-8 left-6 md:left-12 right-6 md:right-12 flex justify-between items-center border-t border-zinc-900/50 pt-4">
        <span className="text-[10px] font-mono text-zinc-600">
          © {new Date().getFullYear()} Nahuel Caroseli
        </span>
      </div>
    </section>
  );
}

export default Contact;
