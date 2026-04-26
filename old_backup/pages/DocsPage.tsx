
import React, { useState } from 'react';
import { Search, ChevronRight, Hash, Copy, Check, Info, AlertCircle } from 'lucide-react';

const sidebarData = [
  { title: "Getting Started", items: ["Introduction", "Quick Setup", "GTM Verification"] },
  { title: "Guides", items: ["Server-Side Tagging", "Consent Mode v2", "Event Schema"] },
  { title: "Platform", items: ["GA4 Configuration", "Meta CAPI", "TikTok Ads"] },
  { title: "Reference", items: ["API Reference", "Privacy Compliance", "Troubleshooting"] }
];

const CodeSnippet = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-8">
      <div className="absolute top-3 right-3 z-10">
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-md border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
        >
          {copied ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
          <span className="text-[10px] font-bold uppercase tracking-widest">{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>
      <pre className="mono p-6 bg-[#09090b] text-zinc-300 text-xs sm:text-sm rounded-xl overflow-x-auto leading-relaxed border border-zinc-800 shadow-xl">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const mockSearchResults = searchQuery.length > 2 ? [
    { title: "GTM Integration", cat: "Guides" },
    { title: "Pixel Setup", cat: "Reference" }
  ] : [];

  return (
    <div className="flex min-h-[calc(100vh-64px)]">
      {/* Sidebar Navigation */}
      <aside className="hidden lg:block w-72 shrink-0 border-r border-zinc-100 p-8 h-[calc(100vh-64px)] sticky top-16 overflow-y-auto">
        <div className="relative mb-8">
          <div className={`flex items-center gap-3 px-3 py-2 rounded-lg border transition-all ${isSearchFocused ? 'border-blue-600 ring-4 ring-blue-50' : 'border-zinc-200'}`}>
            <Search size={14} className="text-zinc-400" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-xs font-medium focus:outline-none w-full"
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 200) }
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span className="text-[10px] font-bold text-zinc-300">⌘K</span>
          </div>

          {isSearchFocused && searchQuery.length > 2 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-zinc-100 rounded-lg shadow-xl p-2 z-20">
              {mockSearchResults.map((res, i) => (
                <button key={i} className="w-full text-left p-2 rounded hover:bg-zinc-50 flex items-center justify-between group">
                  <span className="text-xs font-bold text-zinc-950">{res.title}</span>
                  <span className="text-[10px] font-bold text-zinc-300 uppercase">{res.cat}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <nav className="space-y-10">
          {sidebarData.map((section) => (
            <div key={section.title}>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item}>
                    <a href="#" className={`block text-xs font-medium py-1 transition-colors ${item === 'Introduction' ? 'text-blue-600' : 'text-zinc-500 hover:text-zinc-950'}`}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex gap-0 xl:gap-16">
        <div className="flex-1 max-w-3xl mx-auto px-6 py-12 lg:px-12">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-8">
            <span>Docs</span> <ChevronRight size={10} /> <span>Getting Started</span> <ChevronRight size={10} /> <span className="text-zinc-950">Introduction</span>
          </div>

          <article className="prose prose-zinc max-w-none">
            <h1 className="text-4xl font-black tracking-tight text-zinc-950 mb-6">Introduction</h1>
            <p className="text-lg text-zinc-500 leading-relaxed font-medium mb-12">
              TrackIt is the developer-preferred standard for server-side event orchestration on Shopify.
              Our platform ensures your marketing data is accurate, compliant, and unaffected by client-side browser restrictions.
            </p>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 flex gap-4 mb-12">
              <Info className="text-blue-600 shrink-0" size={20} />
              <div>
                <h4 className="text-sm font-bold text-blue-900 mb-1">How it works</h4>
                <p className="text-xs text-blue-700 leading-relaxed">
                  TrackIt uses a custom Web Pixel to capture events server-side, ensuring 100% data accuracy even when cookies are blocked or iOS 14.5 restrictions are active.
                </p>
              </div>
            </div>

            <h2 className="text-xl font-bold text-zinc-950 mb-4 flex items-center gap-2 group">
              <Hash size={18} className="text-zinc-300 opacity-0 group-hover:opacity-100" /> Key Features
            </h2>
            <p className="text-sm text-zinc-600 leading-relaxed mb-6">
              Unlike traditional GTM apps, TrackIt processes data on our secure edge servers before delivering it to your destinations.
            </p>

            <ul className="grid sm:grid-cols-2 gap-4 mb-12">
              {["No manual theme edits", "Automatic CAPI deduplication", "GA4 data enhancement", "GDPR/CCPA privacy gates"].map(feat => (
                <li key={feat} className="flex items-center gap-3 text-xs font-bold text-zinc-700 bg-zinc-50 p-4 rounded-lg border border-zinc-100">
                  <div className="h-2 w-2 rounded-full bg-blue-600" /> {feat}
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-bold text-zinc-950 mb-4 flex items-center gap-2 group">
              <Hash size={18} className="text-zinc-300 opacity-0 group-hover:opacity-100" /> Developer Snippet
            </h2>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Use the following snippet to manually push custom events to the server-side datalayer if needed:
            </p>

            <CodeSnippet code={`// Manual server-side event push
window.TrackIt.push({
  event: 'custom_conversion',
  data: {
    revenue: 14.99,
    source: 'custom_button'
  }
});`} />

            <div className="bg-amber-50 border border-amber-100 rounded-xl p-6 flex gap-4 my-12">
              <AlertCircle className="text-amber-600 shrink-0" size={20} />
              <div>
                <h4 className="text-sm font-bold text-amber-900 mb-1">Privacy First</h4>
                <p className="text-xs text-amber-700 leading-relaxed">
                  Always ensure Consent Mode v2 is enabled for European Union traffic to maintain compliance with Google's latest policies.
                </p>
              </div>
            </div>

            <div className="mt-20 pt-10 border-t border-zinc-100 flex justify-between items-center">
               <button className="text-xs font-bold text-zinc-400 uppercase tracking-widest hover:text-zinc-950 transition-colors">Previous: Overview</button>
               <button className="text-xs font-bold text-blue-600 uppercase tracking-widest hover:text-blue-700 transition-colors">Next: Quick Setup</button>
            </div>
          </article>
        </div>

        {/* Table of Contents / Secondary Sidebar */}
        <aside className="hidden xl:block w-64 shrink-0 py-12 pr-8 h-[calc(100vh-64px)] sticky top-16 overflow-y-auto">
          <div className="pl-6 border-l border-zinc-100">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-6">On this page</h4>
            <ul className="space-y-4">
              {["Introduction", "How it works", "Key Features", "Developer Snippet", "Privacy First"].map(item => (
                <li key={item}>
                  <a href="#" className="text-xs font-medium text-zinc-500 hover:text-blue-600 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
