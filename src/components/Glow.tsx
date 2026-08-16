import React, { useEffect, useRef } from 'react';

export const Glow = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      const mousex = e.clientX - 45;
      const mousey = e.clientY - 40;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${mousex}px`;
        cursorRef.current.style.top = `${mousey}px`;
      }
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);


    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none', 
        zIndex: 10000000,
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        backgroundColor: 'rgba(212, 218, 223, 0.5)',
        filter: 'blur(75px)',
      }}
    />
  );
};