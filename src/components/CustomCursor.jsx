import React, { useState, useEffect } from 'react';

function CustomCursor() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div
      className="md:fixed pointer-events-none w-5 h-5 md:bg-green-900 z-101  rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
      style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
    />
  );
}

export default CustomCursor;