import Lenis from '@studio-freight/lenis';
import './App.css'
import CustomCursor from './components/CustomCursor'
import ParticlesBackground from './components/ParticlesBackground';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {

  const lenis = new Lenis({
    duration: 1.2, 
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true, 
    smoothTouch: true, 
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);

  return (
    <>
     <CustomCursor/>
    <div className='relative z-100'>
      <About/>
      <Experience/>
      <Skills/>
      <Education/>
      <Projects/>
      <Contact/>
    </div>
    </>
  )
}

export default App
