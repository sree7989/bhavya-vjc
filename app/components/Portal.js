// components/Portal.js (CREATE THIS FILE)
"use client";
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // This ensures the Portal target (document.body) is available
    setMounted(true); 
    return () => setMounted(false);
  }, []);

  // Renders children directly into document.body, outside the current DOM hierarchy.
  return mounted
    ? createPortal(children, document.body)
    : null;
};

export default Portal;