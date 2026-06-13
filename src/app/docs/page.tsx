import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Terminal, Shield, Zap, CheckCircle2 } from "lucide-react";

export default function DocsPage() {
  return (
    <article className="prose prose-zinc max-w-none prose-headings:text-zinc-900 prose-headings:font-black prose-p:text-zinc-500 prose-p:font-medium prose-p:leading-relaxed prose-li:text-zinc-500 prose-li:font-medium prose-strong:text-zinc-900 prose-strong:font-black">
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
          Documentation
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-6">Introduction</h1>
        <p className="text-xl text-zinc-500 font-medium leading-relaxed">
          TrakIt is the industry standard for server-side tracking on Shopify. This guide will help you get started with the platform and optimize your data collection.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-16">
        <div className="glass-card p-8 rounded-2xl border border-zinc-100 flex flex-col items-start bg-white hover:border-primary-500/30 transition-all">
          <div className="p-3 bg-primary-500/10 rounded-xl mb-6">
            <BookOpen className="text-primary-500" size={24} />
          </div>
          <h3 className="text-xl font-black text-zinc-900 mb-2">Quick Start</h3>
          <p className="text-sm text-zinc-500 font-medium mb-6">Get TrakIt up and running in under 5 minutes with our no-code setup.</p>
          <Link href="/docs/shopify-multi-pixel-tracking-quick-start-guide" className="text-sm font-black text-primary-500 flex items-center gap-1 hover:gap-2 transition-all">
            Read Guide <ArrowRight size={16} />
          </Link>
        </div>
        <div className="glass-card p-8 rounded-2xl border border-zinc-100 flex flex-col items-start bg-white hover:border-purple-500/30 transition-all">
          <div className="p-3 bg-purple-500/10 rounded-xl mb-6">
            <Terminal className="text-purple-500" size={24} />
          </div>
          <h3 className="text-xl font-black text-zinc-900 mb-2">App Installation</h3>
          <p className="text-sm text-zinc-500 font-medium mb-6">Comprehensive instructions for installing TrakIt and configuring pricing plans.</p>
          <Link href="/docs/shopify-pixels-conversions-app-installation-pricing" className="text-sm font-black text-purple-500 flex items-center gap-1 hover:gap-2 transition-all">
            View Guide <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <h2 className="text-3xl font-black text-zinc-900 mt-16 mb-6">Why Server-Side Tracking?</h2>
      <p>
        Modern browsers and ad-blockers are increasingly aggressive towards client-side tracking (scripts running in the browser). This leads to data loss, inaccurate attribution, and difficulty in optimizing marketing spend.
      </p>
      
      <div className="bg-primary-500/5 border-l-4 border-primary-500 p-8 my-10 rounded-r-2xl not-prose">
        <div className="flex gap-4 mb-4">
          <div className="p-2 bg-primary-500 rounded-lg">
             <Shield className="text-white" size={20} />
          </div>
          <h4 className="text-zinc-900 text-xl font-black m-0">The TrakIt Advantage</h4>
        </div>
        <p className="text-zinc-600 text-base font-medium m-0 leading-relaxed">
          By processing tracking events on the server, TrakIt ensures that 100% of your order data is captured and sent to your marketing partners, regardless of browser settings or ad-blockers.
        </p>
      </div>

      <h2 className="text-3xl font-black text-zinc-900 mt-16 mb-8">Core Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
         {[
           { title: "Real-time UTM Attribution", desc: "Cross-reference every order with UTM parameters to accurately find and log the original marketing source." },
           { title: "Event Monitoring & Logs", desc: "Detailed diagnostic logs of every server event payload sent to Google Ads, Facebook, TikTok, and other platforms." },
           { title: "GTM-Less Direct Tracking", desc: "Enable direct custom pixel server-side integrations for Meta Pixel, Snapchat, Pinterest, TikTok, and Clarity to maximize page load speeds." },
           { title: "Google & GTM Auto-Setup", desc: "Use Google OAuth to automatically construct GTM variables, triggers, tags, and instantly publish container versions." },
           { title: "Multi-Platform Channels", desc: "Out-of-the-box tracking compatibility for Google Analytics 4, Meta Conversions API, TikTok Ads, Snapchat, Pinterest, Clarity, Bing Ads, and Klaviyo." },
           { title: "GDPR Consent Alignment", desc: "Automatically reads Shopify's Customer Privacy API settings to comply with Google Consent Mode v2, GDPR, and CCPA." },
           { title: "Failed Event Recovery", desc: "Access tools to automatically retry sending failed tracking events to external services during API service drops." },
           { title: "Klaviyo Subscriber Capture", desc: "Track secondary events like user account signups, customer logins, and email newsletter subscriptions to fuel marketing lists." }
         ].map((f, i) => (
           <div key={i} className="flex gap-4 group">
             <div className="mt-1 w-5 h-5 rounded-full bg-primary-500/10 flex items-center justify-center shrink-0 group-hover:bg-primary-500/20 transition-colors">
               <CheckCircle2 size={14} className="text-primary-500" />
             </div>
             <div>
                <h4 className="text-zinc-900 font-black mb-1">{f.title}</h4>
                <p className="text-zinc-500 font-medium text-sm leading-relaxed">{f.desc}</p>
             </div>
           </div>
         ))}
      </div>

      <div className="mt-20 pt-10 border-t border-zinc-100 flex flex-col sm:flex-row justify-between items-center gap-6 not-prose">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <div className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] font-black">Last updated: April 25, 2026</div>
        </div>
      </div>
    </article>
  );
}
