import Link from 'next/link';
import { useState } from "react";
import { Menu, X } from "lucide-react";
import classess from './navbar.module.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from("#brand", { duration: 1, y: 50, opacity: 0 });
    tl.from(["#nav-home", "#nav-about", "#nav-project", "#nav-skill", "#nav-contact"], {
      duration: 0.5,
      y: 30,
      opacity: 0,
      stagger: 0.1,
      ease: "power2.out",
    });
  }, []);

  return (
    <nav className="bg-transparent text-white">
      <div className='flex justify-around text-xl h-[70px] w-full font-semibold items-center'>

        {/* Brand / Logo */}
        <div id='brand' className='text-3xl font-semibold'>
          <Link href="/" className={classess.my}>Akhilesh Kumar</Link>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex justify-end space-x-7 items-center w-[50%]'>
          <Link id='nav-home' className={classess.home} href="/">Home</Link>
          <Link id='nav-about' className={classess.home} href="/about">About</Link>
          <Link id='nav-project' className={classess.home} href="/latestProject">Project</Link>
          <Link id='nav-skill' className={classess.home} href="/skill">Skill</Link>
          <Link id='nav-contact' className={classess.home} href="/contact">Contact</Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-[70px] right-0 w-full bg-gray-700 flex flex-col items-center justify-center space-y-4 py-4 z-50">
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/latestProject" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link href="/skill" onClick={() => setIsOpen(false)}>Skill</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
