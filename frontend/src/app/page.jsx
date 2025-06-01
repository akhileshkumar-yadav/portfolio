'use client';
import React, { useRef, useEffect } from 'react';
import HeroSection from './heroSection/page';
import About from './about/page';
import MyServices from './myservices/page';
import Skill from './skill/page';
import LatestProject from './latestProject/page';
import Contact from './contact/page';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = containerRef.current.querySelectorAll('section');

    sections.forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out',
      });
    });

    // Cleanup function to kill all scrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden">
      {/* Wrap each component in a section tag for animation targeting */}
      <section>
        <HeroSection />
      </section>
      <hr className="text-white" />
      <section>
        <About />
      </section>
      <hr className="text-white" />
      <section>
        <MyServices />
      </section>
      <hr className="text-white" />
      <section>
        <Skill />
      </section>
      <hr className="text-white" />
      <section>
        <LatestProject />
      </section>
      <hr className="text-white" />
      <section>
        <Contact />
      </section>
    </div>
  );
};

export default Page;
