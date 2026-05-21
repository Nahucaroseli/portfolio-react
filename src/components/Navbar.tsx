import { useState, useEffect } from 'react';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Sobre mí', href: '#about' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Educación', href: '#education' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'auto' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/70 dark:bg-black/70 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
      
        <a 
          href="#about" 
          onClick={(e) => handleScrollTo(e, '#about')}
          className="text-sm font-mono tracking-tight font-bold text-zinc-900 dark:text-zinc-100 hover:opacity-70 transition-opacity"
        >
          NC.FOLIO
        </a>

   
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-xs font-mono tracking-wider text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

    
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-end space-y-1.5 w-6 h-6 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 bg-zinc-900 dark:bg-zinc-100 transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
          <span className={`h-0.5 bg-zinc-900 dark:bg-zinc-100 transition-all duration-300 ${isOpen ? 'w-0 opacity-0' : 'w-4'}`} />
          <span className={`h-0.5 bg-zinc-900 dark:bg-zinc-100 transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`} />
        </button>
      </div>

   
      <div
        className={`fixed top-[60px] left-0 w-full h-[calc(100vh-60px)] bg-white dark:bg-black transition-all duration-300 ease-in-out md:hidden flex flex-col justify-center items-center space-y-8 px-6 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleScrollTo(e, link.href)}
            className="text-xl font-mono tracking-widest text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-50 uppercase"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
