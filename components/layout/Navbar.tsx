"use client";

import { useState, useEffect } from "react";
import { Download, Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white border-b-2 border-black ${
        scrolled ? "py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" : "py-4"
      }`}
    >
      <nav className="flex justify-between items-center w-full px-6 md:px-10 max-w-[1200px] mx-auto">
        {/* Logo */}
        <span className="font-headline font-extrabold text-2xl text-black">
          RA
        </span>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-headline text-xs font-bold text-black hover:text-primary transition-colors duration-200 tracking-[0.2em] uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Resume button - Updated to open PDF */}
        <a
          href="/resume.pdf" // Ensure this matches your filename in /public
          target="_blank" // Opens in a new tab for viewing
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-black text-white border-2 border-black font-headline text-[10px] font-bold px-6 py-2 hover:bg-white hover:text-black transition-all uppercase tracking-widest active:scale-95"
        >
          Resume
          <Download size={14} />
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-black"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t-2 border-black px-6 py-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-headline text-sm font-bold text-black hover:text-primary uppercase tracking-widest"
            >
              {link.label}
            </a>
          ))}
          {/* Mobile Resume Link */}
          <a
            href="/resume.pdf"
            download="Ramanidas_Abeseg_Resume.pdf"
            target="_blank"
            className="flex items-center justify-center gap-2 bg-black text-white p-4 font-headline text-xs font-bold uppercase tracking-widest"
          >
            Download Resume <Download size={16} />
          </a>
        </div>
      )}
    </header>
  );
}
