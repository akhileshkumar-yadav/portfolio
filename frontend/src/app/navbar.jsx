import Link from 'next/link';
import { useState } from "react";
import { Menu, X } from "lucide-react";
import classess from './navbar.module.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar = () => {
  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from("#p", { duration: 1, y: 50, opacity: 0 });
    tl.from("#home", { duration: 0.5, y: 30, opacity: 0 });
    tl.from("#about", { duration: 0.4, y: 30, opacity: 0 });
    tl.from("#project", { duration: 0.4, y: 30, opacity: 0 });
    tl.from("#skill", { duration: 0.4, y: 30, opacity: 0 });
    tl.from("#contact", { duration: 0.4, y: 30, opacity: 0 });
  });

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar bg-transparent text-white navbar-expand-lg navbar-light bg-light">
      <div className='flex justify-around text-xl h-[70px] w-full font-semibold items-center'>
        <div id='p' className='text-3xl font-semibold'>
          <Link href="/" className={classess.my}>Akhilesh Kumar</Link>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex justify-end space-x-7 items-center w-[50%]'>
          <Link className={classess.home} id='home' href="/">Home</Link>
          <Link className={classess.home} id='about' href="/about">About</Link>
          <Link className={classess.home} id='project' href="/latestProject">Project</Link>
          <Link className={classess.home} id='skill' href="/skill">Skill</Link>
          <Link className={classess.home} id='contact' href="/contact">Contact</Link>
        </div>

        {/* Mobile menu toggle */}
        <div>
          <button
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-[70px] right-0 w-full bg-gray-700 flex flex-col items-center justify-center space-y-4 py-4 z-50">
            <Link key="mobile-home" href="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link key="mobile-about" href="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link key="mobile-project" href="/latestProject" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link key="mobile-skill" href="/skill" onClick={() => setIsOpen(false)}>Skill</Link>
            <Link key="mobile-contact" href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
