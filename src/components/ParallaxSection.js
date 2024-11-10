import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ParallaxSection.css';

gsap.registerPlugin(ScrollTrigger);

const ParallaxSection = ({ id, image, children }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;

    // ScrollTrigger configuration for snapping each section into view
    ScrollTrigger.create({
      trigger: element,
      start: 'top top',
      end: '+=100%',
      pin: true,
      scrub: 1,
      snap: 1,
    });

    // Slide-in animations for content within each section
    gsap.fromTo(
      element.querySelectorAll('.slide-in-left, .slide-in-right'),
      { opacity: 0, x: (i, target) => (target.classList.contains('slide-in-left') ? -50 : 50) },
      { opacity: 1, x: 0, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top center' } }
    );
  }, []);

  return (
    <div id={id} ref={sectionRef} className="parallax-section" style={{ backgroundImage: `url(${image})` }}>
      {children}
    </div>
  );
};

export default ParallaxSection;
