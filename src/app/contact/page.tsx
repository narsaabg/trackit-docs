"use client";

import React from "react";
import { Mail, MessageSquare, Clock, Send, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <main className="min-h-screen blueprint-grid pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-500/20 bg-primary-500/5 text-primary-600 text-xs font-bold uppercase tracking-widest mb-8">
              <Sparkles size={14} className="fill-primary-500" />
              <span>Expert Support</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-zinc-900 mb-8 leading-tight">
              Get in <span className="text-primary-500">touch.</span>
            </h1>
            <p className="text-lg text-zinc-500 mb-12 max-w-md font-medium leading-relaxed">
              Have questions about server-side tracking? Our expert support team is here to help you scale your Shopify store.
            </p>

            <div className="space-y-6">
              {[
                { icon: <Mail className="text-primary-500" size={24} />, title: "Email Us", detail: "hi@trakit.site", bg: "bg-primary-500/5" },
                { icon: <MessageSquare className="text-purple-500" size={24} />, title: "Live Chat", detail: "Available Mon-Fri, 9am-6pm EST", bg: "bg-purple-500/5" },
                { icon: <Clock className="text-emerald-500" size={24} />, title: "Response Time", detail: "Usually within 4-6 hours", bg: "bg-emerald-500/5" }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-all group">
                  <div className={`p-4 ${item.bg} rounded-xl h-fit border border-zinc-50 group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-zinc-900 font-black mb-1">{item.title}</h3>
                    <p className="text-zinc-500 text-sm font-medium">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="glass-card p-10 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">First Name</label>
                  <input 
                    type="text" 
                    placeholder="Jane"
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-4 text-sm text-zinc-900 font-medium focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Last Name</label>
                  <input 
                    type="text" 
                    placeholder="Doe"
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-4 text-sm text-zinc-900 font-medium focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Email Address</label>
                <input 
                  type="email" 
                  placeholder="jane@example.com"
                  className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-4 text-sm text-zinc-900 font-medium focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Subject</label>
                <div className="relative">
                  <select className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-4 text-sm text-zinc-900 font-medium focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all appearance-none">
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Billing Question</option>
                    <option>Feature Request</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                    <ArrowRight size={16} className="rotate-90" />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-4 text-sm text-zinc-900 font-medium focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary-500 hover:bg-primary-600 text-white font-black py-5 rounded-xl flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-xl shadow-primary-500/30 text-base"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
