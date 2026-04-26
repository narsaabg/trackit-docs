import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Zap, Sparkles, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-600/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 group mb-8">
              <div className="group-hover:scale-105 transition-transform duration-300">
                <Image 
                  src="/favicon.png" 
                  alt="TrakIt Logo" 
                  width={48}
                  height={48}
                  className="h-10 w-10 object-contain"
                />
              </div>
              <span className="text-2xl font-black tracking-tight text-white group-hover:text-primary-500 transition-colors">
                TrakIt
              </span>
            </Link>
            <p className="text-zinc-500 font-medium leading-relaxed mb-8 max-w-xs">
              The industry standard for server-side tracking on Shopify. Capture 100% of your data and boost your ROAS.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-8">Product</h4>
            <ul className="space-y-4">
              <li><Link href="/#features" className="text-sm font-bold text-zinc-400 hover:text-primary-500 transition-colors">Features</Link></li>
              <li><Link href="/#pricing" className="text-sm font-bold text-zinc-400 hover:text-primary-500 transition-colors">Pricing</Link></li>
              <li><Link href="/changelog" className="text-sm font-bold text-zinc-400 hover:text-primary-500 transition-colors">Changelog</Link></li>
              <li><a href="https://apps.shopify.com/trackit-2" className="text-sm font-bold text-zinc-400 hover:text-primary-500 transition-colors">Shopify App Store</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-8">Support</h4>
            <ul className="space-y-4">
              <li><Link href="/docs" className="text-sm font-bold text-zinc-400 hover:text-primary-500 transition-colors">Documentation</Link></li>
              <li><Link href="/contact" className="text-sm font-bold text-zinc-400 hover:text-primary-500 transition-colors">Contact Support</Link></li>
              <li><Link href="/privacy" className="text-sm font-bold text-zinc-400 hover:text-primary-500 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm font-bold text-zinc-400 hover:text-primary-500 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-8">Stay Updated</h4>
            <p className="text-sm text-zinc-500 mb-6 font-medium">Join our newsletter for the latest in e-commerce tracking.</p>
            <form className="relative group">
              <input 
                type="email" 
                placeholder="Email address"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-primary-500 transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-all">
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600">
            © {new Date().getFullYear()} TRAKIT. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600">All systems online</span>
            </div>
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 flex items-center gap-2">
              Made for Shopify <Sparkles size={12} className="text-primary-500 fill-primary-500" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
