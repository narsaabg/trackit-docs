import React from "react";
import Link from "next/link";
import { Search, ChevronRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation | TrakIt",
  description: "Learn how to set up and optimize TrakIt for your Shopify store.",
};

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const docsNav = [
    { title: "Getting Started", links: ["Introduction", "Quick Start", "Installation"] },
    { title: "Configuration", links: ["Connecting Shopify", "Google Ads Setup", "Facebook Pixel"] },
    { title: "Advanced", links: ["Server-Side Tracking", "Custom Events", "Consent Mode v2"] },
  ];

  return (
    <div className="min-h-screen blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-16">
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-24">
            <div className="relative mb-10">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
              <input 
                type="text" 
                placeholder="Search documentation..." 
                className="w-full bg-white border border-zinc-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all shadow-sm"
              />
            </div>
            
            <nav className="space-y-10">
              {docsNav.map((section, idx) => (
                <div key={idx}>
                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-4">{section.title}</h3>
                  <ul className="space-y-1">
                    {section.links.map((link, lidx) => (
                      <li key={lidx}>
                        <Link 
                          href="/docs" 
                          className="group flex items-center justify-between py-2 text-sm font-bold text-zinc-500 hover:text-primary-500 transition-all"
                        >
                          <span>{link}</span>
                          <ChevronRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary-500" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>

            <div className="mt-12 pt-8 border-t border-zinc-100">
              <div className="p-4 rounded-2xl bg-zinc-900 text-white">
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2">Need help?</p>
                <p className="text-xs font-medium text-zinc-400 mb-4">Can't find what you're looking for?</p>
                <Link href="/contact" className="text-xs font-bold text-primary-500 hover:text-primary-400 flex items-center gap-1">
                  Contact Support <ChevronRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 min-w-0 pb-24">
          <div className="bg-white/50 backdrop-blur-sm border border-zinc-100 rounded-[2.5rem] p-8 md:p-16 shadow-xl shadow-zinc-200/20">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
