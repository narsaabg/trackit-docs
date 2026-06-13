import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle, Zap, Rocket, Terminal } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TrakIt Quick Start: Set Up Shopify Server-Side Tracking in 5 Mins",
  description: "Follow our quick-start guide to connect TrakIt server-side tracking to your Shopify store, set up GTM & GA4 automatically, and verify pixel event logs.",
};

export default function QuickStartPage() {
  const steps = [
    {
      step: "01",
      title: "Install the TrakIt App",
      desc: "Add TrakIt to your Shopify store from the Shopify App Store to automatically register custom pixels.",
      href: "/docs/shopify-pixels-conversions-app-installation-pricing",
    },
    {
      step: "02",
      title: "Activate a Plan",
      desc: "Choose a subscription that fits your volume. Free plan covers up to 100 orders/month with zero commitment.",
      href: "/docs/shopify-pixels-conversions-app-installation-pricing#pricing-plans",
    },
    {
      step: "03",
      title: "Run Automatic Google Setup",
      desc: "Connect your Google account via OAuth. TrakIt will automatically create GTM variables, triggers, and tags.",
      href: "/docs/shopify-google-ads-conversion-tracking-setup-guide",
    },
    {
      step: "04",
      title: "Verify Conversion Data",
      desc: "Place a test order or visit the diagnostics tab to view real-time payload deliveries to GA4 and Meta Pixel.",
      href: "/docs/shopify-server-side-tracking-conversions-api-architecture",
    },
  ];

  return (
    <article className="prose prose-zinc max-w-none prose-headings:text-zinc-900 prose-headings:font-black prose-p:text-zinc-500 prose-p:font-medium prose-p:leading-relaxed prose-li:text-zinc-500 prose-li:font-medium prose-strong:text-zinc-900 prose-strong:font-black">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
          Getting Started
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-6">
          Quick Start Guide
        </h1>
        <p className="text-xl text-zinc-500 font-medium leading-relaxed">
          Get TrakIt up and running on your Shopify store in under 5 minutes. Follow this guide to activate server-side event tracking without touching a single line of liquid code.
        </p>
      </div>

      <div className="bg-amber-500/5 border-l-4 border-amber-500 p-6 my-8 rounded-r-2xl not-prose">
        <div className="flex gap-4 items-start">
          <AlertTriangle className="text-amber-500 shrink-0 mt-1" size={20} />
          <div>
            <h4 className="text-zinc-900 text-lg font-black m-0 mb-1">Before You Begin</h4>
            <p className="text-zinc-600 text-sm font-medium m-0 leading-relaxed">
              Ensure you have **Administrator access** to both your Shopify Admin Dashboard and the Google Tag Manager (GTM) / Google Analytics 4 (GA4) properties you plan to connect.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl md:text-3xl font-black text-zinc-900 mt-12 mb-6">
        Step-by-Step Onboarding
      </h2>
      <p>
        The quick start onboarding is split into four progressive steps. TrakIt handles the complex server routing, deduplication, and payload mapping on our isolated server endpoints.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-10">
        {steps.map((s, i) => (
          <div
            key={i}
            className="glass-card p-6 rounded-2xl border border-zinc-100 flex flex-col justify-between bg-white hover:border-primary-500/20 transition-all shadow-sm"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-black text-zinc-300 font-mono">{s.step}</span>
                <div className="p-2 bg-primary-500/10 rounded-lg">
                  <CheckCircle2 className="text-primary-500" size={16} />
                </div>
              </div>
              <h3 className="text-lg font-black text-zinc-900 mb-2">{s.title}</h3>
              <p className="text-xs text-zinc-500 font-medium leading-relaxed mb-6">{s.desc}</p>
            </div>
            <Link
              href={s.href}
              className="text-xs font-black text-zinc-900 hover:text-primary-500 flex items-center gap-1 transition-all mt-auto"
            >
              Learn More <ArrowRight size={14} />
            </Link>
          </div>
        ))}
      </div>

      <h2 className="text-2xl md:text-3xl font-black text-zinc-900 mt-16 mb-6">
        Verifying the Installation
      </h2>
      <p>
        Once you've connected Shopify and Google Tag Manager, you can verify your pixel's health using the TrakIt real-time dashboard activity logs.
      </p>
      
      <ol className="space-y-4 my-8 pl-6">
        <li>
          <strong>Open your store:</strong> Visit your shop frontend in an incognito window and browse a few products.
        </li>
        <li>
          <strong>Initiate checkout:</strong> Add an item to your cart and proceed to the checkout screen.
        </li>
        <li>
          <strong>Inspect logs:</strong> Go to the <strong>Diagnostics & Logs</strong> tab in the TrakIt Shopify App admin dashboard.
        </li>
        <li>
          <strong>Confirm payload:</strong> Verify that events like <code>view_item</code>, <code>add_to_cart</code>, and <code>begin_checkout</code> are logged with a <code>200 OK</code> status from server-side handlers.
        </li>
      </ol>

      <div className="bg-primary-500/5 border border-primary-500/20 rounded-2xl p-8 my-12 not-prose flex flex-col md:flex-row items-center gap-8 justify-between">
        <div>
          <h3 className="text-zinc-900 text-xl font-black mb-2 flex items-center gap-2">
            <Rocket className="text-primary-500" size={20} /> Ready for deep configuration?
          </h3>
          <p className="text-zinc-500 text-sm font-medium m-0 leading-relaxed max-w-xl">
            Go to the full installation guide to learn about Shopify App permissions, billing options, promo codes, and advanced custom tags setup.
          </p>
        </div>
        <Link
          href="/docs/shopify-pixels-conversions-app-installation-pricing"
          className="bg-primary-500 text-white hover:bg-primary-600 px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap shadow-md shadow-primary-500/10"
        >
          Detailed Installation Guide
        </Link>
      </div>

      <div className="mt-20 pt-10 border-t border-zinc-100 flex flex-col sm:flex-row justify-between items-center gap-6 not-prose">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <div className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] font-black">
            Last updated: June 12, 2026
          </div>
        </div>
      </div>
    </article>
  );
}
