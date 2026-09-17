"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#1B3A5C] text-white border-b border-white/10">
      {/* Yellow accent line */}
      <div className="h-0.5 bg-[#F5C518] w-full" />
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-black tracking-tight">
            <span className="text-[#F5C518]">Punch</span>
            <span className="text-white">List</span>
          </span>
          <span className="hidden sm:inline text-[10px] font-bold uppercase tracking-widest text-white/40 border border-white/20 px-2 py-0.5 rounded">
            Ops & AI
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/services" className="text-white/70 hover:text-white transition-colors">Services</Link>
          <Link href="/blog" className="text-white/70 hover:text-white transition-colors">Blog</Link>
          <Link href="/about" className="text-white/70 hover:text-white transition-colors">About</Link>
          <Link href="/contact" className="bg-[#F5C518] text-[#1B3A5C] font-bold px-5 py-2 rounded hover:bg-[#D4A800] transition-colors">
            Book a Free Audit
          </Link>
        </div>

        {/* Mobile */}
        <button className="md:hidden flex flex-col gap-1.5" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span className={"block w-6 h-0.5 bg-white transition-all " + (open ? "rotate-45 translate-y-2" : "")} />
          <span className={"block w-6 h-0.5 bg-white transition-opacity " + (open ? "opacity-0" : "")} />
          <span className={"block w-6 h-0.5 bg-white transition-all " + (open ? "-rotate-45 -translate-y-2" : "")} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 px-6 py-4 flex flex-col gap-4 text-sm font-medium">
          <Link href="/services" onClick={() => setOpen(false)} className="text-white/70 hover:text-white">Services</Link>
          <Link href="/blog" onClick={() => setOpen(false)} className="text-white/70 hover:text-white">Blog</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="text-white/70 hover:text-white">About</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="bg-[#F5C518] text-[#1B3A5C] font-bold px-5 py-2 rounded text-center">
            Book a Free Audit
          </Link>
        </div>
      )}
    </nav>
  );
}
