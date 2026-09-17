"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#1B3A5C] text-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          <span className="text-[#F5C518]">Punch</span> List
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/services" className="hover:text-[#F5C518] transition-colors">Services</Link>
          <Link href="/blog" className="hover:text-[#F5C518] transition-colors">Blog</Link>
          <Link href="/about" className="hover:text-[#F5C518] transition-colors">About</Link>
          <Link
            href="/contact"
            className="bg-[#F5C518] text-[#1B3A5C] font-bold px-5 py-2 rounded hover:bg-[#D4A800] transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={"block w-6 h-0.5 bg-white transition-transform " + (open ? "rotate-45 translate-y-2" : "")} />
          <span className={"block w-6 h-0.5 bg-white transition-opacity " + (open ? "opacity-0" : "")} />
          <span className={"block w-6 h-0.5 bg-white transition-transform " + (open ? "-rotate-45 -translate-y-2" : "")} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#2a5280] px-6 py-4 flex flex-col gap-4 text-sm font-medium">
          <Link href="/services" onClick={() => setOpen(false)} className="hover:text-[#F5C518]">Services</Link>
          <Link href="/blog" onClick={() => setOpen(false)} className="hover:text-[#F5C518]">Blog</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="hover:text-[#F5C518]">About</Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="bg-[#F5C518] text-[#1B3A5C] font-bold px-5 py-2 rounded text-center hover:bg-[#D4A800]"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
