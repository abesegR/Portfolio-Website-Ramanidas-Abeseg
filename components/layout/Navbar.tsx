"use client";

import { useState, useEffect } from "react";
import { contact } from "@/lib/data";
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
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-surface border-b-2 border-primary ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="flex justify-between items-center w-full px-6 md:px-10 py-4 max-w-[1200px] mx-auto">
        {/* Logo */}
        <span className="font-headline font-extrabold text-2xl text-on-background">
          RA
        </span>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-label text-sm font-semibold text-secondary hover:text-primary transition-colors duration-200 tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Resume button */}
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-primary text-on-primary font-label text-sm font-semibold px-6 py-2 hover:opacity-80 transition-opacity uppercase tracking-widest"
        >
          Resume
          <Download size={14} />
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-t-2 border-primary px-6 py-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-label text-sm font-semibold text-secondary hover:text-primary uppercase tracking-widest"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
