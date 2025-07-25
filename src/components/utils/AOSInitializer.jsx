"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({

      duration: 1000, 
      once: true, 
      mirror: false, 
      anchorPlacement: 'top-bottom', 
    });

  }, []);

  return null; 
};

export default AOSInitializer;