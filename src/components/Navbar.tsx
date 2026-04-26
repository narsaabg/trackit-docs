"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Zap, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", path: "/#features" },
    { name: "Pricing", path: "/#pricing" },
    { name: "Docs", path: "/docs" },
    { name: "Changelog", path: "/changelog" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white/98 backdrop-blur-xl border-b border-zinc-100 ${scrolled ? 'py-3 shadow-lg shadow-zinc-100/50' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="group-hover:scale-105 transition-transform duration-300">
            <Image 
              src="/favicon.png" 
              alt="TrakIt Logo" 
              width={48}
              height={48}
              className="h-10 w-10 object-contain"
              priority
            />
          </div>
          <span className="text-2xl font-black tracking-tight text-zinc-900 group-hover:text-primary-500 transition-colors">
            TrakIt
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-primary-500 ${
                pathname === link.path ? "text-primary-500" : "text-zinc-500"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://apps.shopify.com/trackit-2"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-full text-sm font-black hover:bg-primary-600 transition-all shadow-lg shadow-primary-500/20 active:scale-95"
          >
            Start Free Now
          </a>

          <button
            className="md:hidden p-2 text-zinc-500 hover:text-zinc-900 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-zinc-100 p-8 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="text-lg font-black uppercase tracking-widest text-zinc-900 hover:text-primary-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://apps.shopify.com/trackit-2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-3 bg-primary-500 py-5 rounded-2xl text-white font-black shadow-xl shadow-primary-500/20"
            >
              Install App on Shopify
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
