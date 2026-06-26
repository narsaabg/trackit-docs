"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Calendar, Zap, CheckCircle2, Plus, TrendingUp } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const changelogData = [
  {
    version: "v2.1.0",
    date: "June 26, 2026",
    updates: [
      { type: "New", text: "Added a real-time Event Log viewer to monitor, and filter, tracking events as they are sent to destinations.", icon: <Zap size={14} /> },
      { type: "New", text: "Introduced recovered attribution analytics, tracking conversion recovery and revenue saved via ad-block bypasses and Safari ITP cookieless restoration.", icon: <Zap size={14} /> },
      { type: "New", text: "Added download and export options for tracked orders and pixel events, allowing reports to be easily exported for offline analysis.", icon: <Zap size={14} /> },
    ]
  },
  {
    version: "v2.0.0",
    date: "June 8, 2026",
    updates: [
      { type: "New", text: "Google OAuth integration with automatic reconnection when OAuth tokens expire.", icon: <Zap size={14} /> },
      { type: "New", text: "Automatic service setup featuring automated Google Tag Manager (GTM) triggers, variables, and tags creation.", icon: <Zap size={14} /> },
      { type: "New", text: "Automatic GTM container publishing upon changes.", icon: <Zap size={14} /> },
      { type: "New", text: "Google Ads conversion creation automation.", icon: <Zap size={14} /> },
      { type: "Improvement", text: "App rebranded from \"TrackIt\" to \"TrakIt\" (including domain and config updates).", icon: <TrendingUp size={14} /> },
      { type: "Improvement", text: "Updated Supabase edge functions, transitioned to TrakItDatalayer tracking variables, and improved AWS endpoint and proxy event routing.", icon: <TrendingUp size={14} /> },
    ]
  },
  {
    version: "v1.4.0",
    date: "May 10, 2026",
    updates: [
      { type: "New", text: "Native Klaviyo service integration supporting login, signup, and newsletter subscription events.", icon: <Zap size={14} /> },
      { type: "New", text: "Expanded \"GTM-less\" pixel tracking for Snapchat, Pinterest, and Clarity, with automatic hiding of GTM when GTM-less mode is active.", icon: <Zap size={14} /> },
      { type: "Improvement", text: "Added a promotional code system for development stores (10% extra discount).", icon: <TrendingUp size={14} /> },
      { type: "Improvement", text: "Plan details and billing test charges shown directly on the Shopify approval page.", icon: <TrendingUp size={14} /> },
    ]
  },
  {
    version: "v1.3.0",
    date: "May 3, 2026",
    updates: [
      { type: "New", text: "Bing Ads tracking integration, custom config UI, and enhanced conversions.", icon: <Zap size={14} /> },
      { type: "New", text: "GTM-less tracking for Meta Pixel (custom pixel integration) respecting user consent.", icon: <Zap size={14} /> },
      { type: "Improvement", text: "Performance optimization by removing heavy server-side load events and adding selective logging.", icon: <TrendingUp size={14} /> },
    ]
  },
  {
    version: "v1.2.1",
    date: "April 19, 2026",
    updates: [
      { type: "New", text: "Synchronized Shopify subscriptions database records on backend webhook triggers.", icon: <Zap size={14} /> },
      { type: "Improvement", text: "Refactored the dashboard layout and optimized the pricing plan changes interface.", icon: <TrendingUp size={14} /> },
    ]
  },
  {
    version: "v1.2.0",
    date: "January 21, 2026",
    updates: [
      { type: "Improvement", text: "Enhanced tracking capabilities and accuracy.", icon: <TrendingUp size={14} /> },
      { type: "Added", text: "Service installation date visibility.", icon: <Plus size={14} /> },
      { type: "Added", text: "Order count and percentage tracking per service in reports.", icon: <Plus size={14} /> },
    ]
  },
  {
    version: "v1.1.0",
    date: "December 30, 2025",
    updates: [
      { type: "New", text: "Dashboard widget showing consumed and remaining allowed order usage for Free and Basic plan users.", icon: <Zap size={14} /> },
      { type: "New", text: "Tracked Orders dashboard with detailed order item lists and date-based filtering.", icon: <Zap size={14} /> },
      { type: "New", text: "Server-side option to resend failed events to all failed services for reliable event delivery.", icon: <Zap size={14} /> },
    ]
  },
  {
    version: "v1.0.0",
    date: "December 5, 2025",
    updates: [
      { type: "New", text: "Multi-platform conversion tracking support for GA4, Meta, TikTok, and 4 additional platforms.", icon: <Zap size={14} /> },
      { type: "New", text: "Recent Orders tracking widget for real-time order monitoring.", icon: <Zap size={14} /> },
      { type: "New", text: "Advanced deduplication support for both browser-side and server-side event tracking.", icon: <Zap size={14} /> },
      { type: "New", text: "Accurate conversion tracking powered by Shopify Pixels.", icon: <Zap size={14} /> },
      { type: "New", text: "Event-level controls to enable or disable specific tracking events.", icon: <Zap size={14} /> },
      { type: "New", text: "Service-level settings to customize order data, including order ID, product ID, sales channel exclusions, tax and shipping exclusions, and discount handling.", icon: <Zap size={14} /> },
      { type: "New", text: "Built-in tracking test tools with test code support and detailed console event logs for easy debugging.", icon: <Zap size={14} /> },
    ]
  }
];

export default function ChangelogPage() {
  return (
    <main className="min-h-screen blueprint-grid pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-500/20 bg-primary-500/5 text-primary-600 text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles size={14} className="fill-primary-500" />
            <span>Product Updates</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-zinc-900 mb-6">
            Release <span className="text-primary-500">Notes</span>
          </h1>
          <p className="text-lg text-zinc-500 font-medium max-w-2xl mx-auto">
            Stay up to date with the latest features, improvements, and fixes we've pushed to TrakIt.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-zinc-100 ml-4 md:ml-0 pl-8 md:pl-12 space-y-16">
          {changelogData.map((item, index) => (
            <motion.div 
              key={item.version}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-0 h-6 w-6 rounded-full bg-primary-500 border-4 border-white shadow-lg shadow-primary-500/20 z-10"></div>
              
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-zinc-400 font-bold text-sm">
                  <Calendar size={14} />
                  <span>{item.date}</span>
                </div>
                <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-zinc-200"></div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-black text-zinc-900 bg-zinc-100 px-2 py-1 rounded">
                    {item.version}
                  </span>
                </div>
              </div>
              
              <div className="glass-card p-8 md:p-10 hover:shadow-2xl hover:shadow-primary-500/5 transition-all">
                <div className="space-y-6">
                  {item.updates.map((update, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className={`mt-1 w-6 h-6 rounded-md flex items-center justify-center shrink-0 border transition-colors
                        ${update.type === 'New' ? 'bg-blue-500/10 text-blue-600 border-blue-500/20' : 
                          update.type === 'Added' ? 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20' : 
                          'bg-purple-500/10 text-purple-600 border-purple-500/20'}`}>
                        {update.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-[10px] font-black uppercase tracking-widest
                            ${update.type === 'New' ? 'text-blue-600' : 
                              update.type === 'Added' ? 'text-emerald-600' : 
                              'text-purple-600'}`}>
                            {update.type}
                          </span>
                        </div>
                        <p className="text-zinc-700 font-medium leading-relaxed">
                          {update.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-32 text-center"
        >
          <p className="text-zinc-400 font-bold mb-8 uppercase tracking-[0.2em] text-xs">More updates coming soon</p>
          <div className="flex justify-center gap-4">
             <div className="w-2 h-2 rounded-full bg-zinc-200"></div>
             <div className="w-2 h-2 rounded-full bg-zinc-200"></div>
             <div className="w-2 h-2 rounded-full bg-zinc-200"></div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
