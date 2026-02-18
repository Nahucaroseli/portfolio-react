import { useEffect } from 'react';
import Lenis from 'lenis';
import './App.css';

import CustomCursor from './components/CustomCursor';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) =>
        Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <div className="relative z-100">
        <About />
        <Experience />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;