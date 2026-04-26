"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  ShieldCheck,
  Zap,
  ServerCog,
  CheckCircle2,
  Globe,
  MousePointer2,
  Database,
  Layers,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const KlaviyoIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 18" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h24l-6 9 6 9H0z" />
  </svg>
);

const MicrosoftIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 23 23" className={className} xmlns="http://www.w3.org/2000/svg">
    <path fill="#f35022" d="M0 0h11v11H0z"/>
    <path fill="#80bb03" d="M12 0h11v11H12z"/>
    <path fill="#03a4ef" d="M0 12h11v11H0z"/>
    <path fill="#ffb903" d="M12 12h11v11H12z"/>
  </svg>
);

const BingIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M10.102 1.167L3.148 12l3.037 4.24L10.102 1.167zM10.102 1.167l6.954 10.833h-6.954V1.167zM10.102 11.999l6.954 10.833l3.037-4.24l-6.954-10.833H10.102zM10.102 11.999H3.148L10.102 22.832V11.999z" />
  </svg>
);

export default function LandingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-primary-500 selection:text-white">
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-40 blueprint-grid overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-500/20 bg-primary-500/5 text-primary-600 text-xs font-bold uppercase tracking-widest mb-8"
            >
              <Sparkles size={14} className="fill-primary-500" />
              <span>Recover up to 40% of lost data</span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-5xl md:text-8xl font-black tracking-tight mb-8 text-zinc-900 leading-[0.9]"
            >
              Monitor every lead. <br />
              <span className="text-primary-500">Boost every campaign.</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-lg md:text-xl text-zinc-500 max-w-3xl mx-auto mb-12 font-medium leading-relaxed"
            >
              Robust server-side tracking that captures 100% of your Shopify conversions.
              Bypass ad-blockers and iOS restrictions with precision attribution.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href="https://apps.shopify.com/trackit-2"
                className="group flex items-center gap-3 rounded-full bg-primary-500 px-10 py-5 text-base font-bold text-white transition-all hover:bg-primary-600 shadow-xl shadow-primary-500/30 active:scale-95"
              >
                Get Started for Free <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex -space-x-3 items-center ml-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-zinc-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="User" />
                  </div>
                ))}
                <span className="pl-6 text-sm font-bold text-zinc-900">Used by 1,000+ stores</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Social Proof Marquee */}
        <section className="py-20 border-y border-zinc-100 overflow-hidden bg-zinc-50/50">
          <div className="text-center mb-10 text-xs font-bold uppercase tracking-widest text-zinc-400">
            Trusted by merchants worldwide for precision tracking
          </div>
          <div className="flex gap-24 animate-marquee whitespace-nowrap items-center transition-all duration-500">
             {/* Repeat logos for infinite effect */}
             {[...Array(2)].map((_, i) => (
               <React.Fragment key={i}>
                <img src="https://cdn.simpleicons.org/googleads" alt="Google Ads" className="h-8 w-auto flex-shrink-0" />
                <img src="https://cdn.simpleicons.org/meta" alt="Meta" className="h-8 w-auto flex-shrink-0" />
                <img src="https://cdn.simpleicons.org/tiktok" alt="TikTok" className="h-8 w-auto flex-shrink-0" />
                <img src="https://cdn.simpleicons.org/pinterest" alt="Pinterest" className="h-8 w-auto flex-shrink-0" />
                <img src="https://cdn.simpleicons.org/snapchat" alt="Snapchat" className="h-8 w-auto flex-shrink-0" />
                <img src="https://cdn.simpleicons.org/googleanalytics" alt="GA4" className="h-8 w-auto flex-shrink-0" />
                <KlaviyoIcon className="h-8 w-auto flex-shrink-0 text-zinc-900" />
                <BingIcon className="h-8 w-auto flex-shrink-0 text-[#008373]" />
                <img src="https://cdn.simpleicons.org/shopify" alt="Shopify" className="h-8 w-auto flex-shrink-0" />
                <img src="https://cdn.simpleicons.org/googletagmanager" alt="GTM" className="h-8 w-auto flex-shrink-0" />
                <MicrosoftIcon className="h-8 w-auto flex-shrink-0" />
                <img src="https://cdn.simpleicons.org/hotjar" alt="Hotjar" className="h-8 w-auto flex-shrink-0" />
               </React.Fragment>
             ))}
          </div>
        </section>

        {/* Bento Feature Grid */}
        <section id="features" className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-zinc-900 mb-6">
              Everything your tracking <span className="text-primary-500">should be doing.</span>
            </h2>
            <p className="text-zinc-500 text-lg max-w-2xl mx-auto font-medium">
              Don't settle for "good enough" data. TrakIt provides a 360-degree view of your customer journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:grid-rows-2">
            {/* Main Bento Card 1 */}
            <div className="md:col-span-2 md:row-span-1 glass-card p-10 flex flex-col md:flex-row items-center gap-10 overflow-hidden relative group">
              <div className="flex-1">
                <div className="w-12 h-12 rounded-xl bg-primary-500 flex items-center justify-center mb-6 shadow-lg shadow-primary-500/20">
                  <Globe className="text-white" size={24} />
                </div>
                <h3 className="text-3xl font-black text-zinc-900 mb-4 leading-tight">
                  Server-Side Reliability. <br />
                  <span className="text-primary-500 font-medium">Zero Data Loss.</span>
                </h3>
                <p className="text-zinc-500 text-base max-w-md font-medium leading-relaxed mb-6">
                  Bypass browser restrictions and ad-blockers by sending data directly from Shopify to your marketing platforms.
                </p>
                <div className="flex flex-wrap gap-2">
                   <div className="px-3 py-1 rounded-full bg-zinc-100 text-[10px] font-bold text-zinc-600">100% CAPTURE</div>
                   <div className="px-3 py-1 rounded-full bg-zinc-100 text-[10px] font-bold text-zinc-600">IOS 17 READY</div>
                   <div className="px-3 py-1 rounded-full bg-zinc-100 text-[10px] font-bold text-zinc-600">SERVER GTM</div>
                </div>
              </div>
              <div className="w-1/3 opacity-10 group-hover:scale-110 transition-transform duration-500 hidden md:block">
                <ServerCog size={160} className="text-primary-500" />
              </div>
            </div>

            {/* Small Bento Card 1 */}
            <div className="glass-card p-8 flex flex-col group">
              <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center mb-6 shadow-lg shadow-amber-500/20">
                <MousePointer2 className="text-white" size={20} />
              </div>
              <h4 className="text-xl font-bold text-zinc-900 mb-2">Precision Clicks</h4>
              <p className="text-zinc-500 text-sm font-medium leading-relaxed">
                Capture every UTM parameter and click ID flawlessly across all channels.
              </p>
            </div>

            {/* Main Bento Card 2 (Reports) */}
            <div className="md:col-span-2 md:row-span-1 glass-card p-10 flex flex-col md:flex-row-reverse items-center gap-10 overflow-hidden relative group">
              <div className="flex-1">
                <div className="w-12 h-12 rounded-xl bg-purple-500 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20">
                  <BarChart3 className="text-white" size={24} />
                </div>
                <h3 className="text-3xl font-black text-zinc-900 mb-4 leading-tight">
                  Actionable Reports. <br />
                  <span className="text-purple-500 font-medium">Data-Driven Growth.</span>
                </h3>
                <p className="text-zinc-500 text-base max-w-md font-medium leading-relaxed mb-6">
                  Deep-dive into your attribution data with custom reports that show you exactly where your profit is coming from.
                </p>
                <div className="flex flex-wrap gap-2">
                   <div className="px-3 py-1 rounded-full bg-zinc-100 text-[10px] font-bold text-zinc-600">ROI TRACKING</div>
                   <div className="px-3 py-1 rounded-full bg-zinc-100 text-[10px] font-bold text-zinc-600">CUSTOM VIEWS</div>
                   <div className="px-3 py-1 rounded-full bg-zinc-100 text-[10px] font-bold text-zinc-600">EXPORT READY</div>
                </div>
              </div>
              <div className="w-1/3 opacity-10 group-hover:scale-110 transition-transform duration-500 hidden md:block">
                <Layers size={160} className="text-purple-500" />
              </div>
            </div>

            {/* Small Bento Card 2 */}
            <div className="glass-card p-8 flex flex-col group">
              <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                <Database className="text-white" size={20} />
              </div>
              <h4 className="text-xl font-bold text-zinc-900 mb-2">Real-time Sync</h4>
              <p className="text-zinc-500 text-sm font-medium leading-relaxed">
                Instant data processing ensures your ad platforms learn and optimize in real-time.
              </p>
            </div>
          </div>
        </section>

        {/* Destinations Section */}
        <section className="py-32 bg-white border-t border-zinc-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
                Attribution
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-zinc-900 mb-8 leading-[1.1] tracking-tight">
                Complete tracking <br />
                <span className="text-primary-500">coverage,</span> across every channel
              </h2>
              <p className="text-zinc-500 text-lg mb-10 font-medium leading-relaxed">
                By incorporating both server-side and client-side tracking, we ensure every order, revenue detail, and customer action is accurately captured.
              </p>

              <ul className="space-y-6 mb-12">
                {[
                  "Goodbye missing data and dumb ads",
                  "Full view of store performance and where users come from",
                  "Compare marketing attribution across channels and devices"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-4 group">
                    <div className="w-6 h-6 rounded-md bg-primary-500/10 flex items-center justify-center shrink-0 group-hover:bg-primary-500/20 transition-colors">
                      <CheckCircle2 size={16} className="text-primary-500" />
                    </div>
                    <span className="text-zinc-700 font-bold">{text}</span>
                  </li>
                ))}
              </ul>

              <Link href="/demo" className="inline-flex items-center gap-2 text-primary-500 font-black hover:gap-4 transition-all border-b-2 border-primary-500/20 pb-1">
                View demo <ArrowRight size={20} />
              </Link>
            </div>

            <div className="lg:w-1/2">
               <div className="bg-[#f8f9fa] rounded-[2.5rem] p-10 border border-zinc-100 shadow-xl shadow-zinc-200/50">
                  <div className="flex justify-between items-center mb-10">
                     <span className="text-sm font-black text-zinc-900">Active destinations</span>
                     <span className="text-xs font-bold text-zinc-400">11 of 11 connected</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                     {[
                       { name: "Google Analytics 4", slug: "googleanalytics" },
                       { name: "Google Ads", slug: "googleads" },
                       { name: "Meta Ads", slug: "meta" },
                       { name: "TikTok", slug: "tiktok" },
                       { name: "Klaviyo", slug: "klaviyo", component: <KlaviyoIcon className="w-full h-full text-zinc-900" /> },
                       { name: "Bing Ads", slug: "bing", component: <BingIcon className="w-full h-full text-[#008373]" /> },
                       { name: "Pinterest", slug: "pinterest" },
                       { name: "Snapchat", slug: "snapchat" },
                       { name: "Google Tag Manager", slug: "googletagmanager" },
                       { name: "Microsoft Clarity", slug: "microsoft", component: <MicrosoftIcon className="w-full h-full" /> },
                       { name: "Hotjar", slug: "hotjar" },
                     ].map((dest, i) => (
                       <div key={i} className="bg-white p-6 rounded-2xl border border-zinc-100 flex flex-col items-start gap-4 hover:shadow-lg transition-all hover:-translate-y-1">
                          <div className="w-10 h-10 flex items-center justify-center p-2">
                             {dest.component ? (
                               dest.component
                             ) : (
                               <img 
                                 src={dest.url || `https://cdn.simpleicons.org/${dest.slug}`} 
                                 alt={dest.name} 
                                 className="w-full h-full object-contain"
                               />
                             )}
                          </div>
                          <div>
                             <div className="text-[10px] font-black leading-tight text-zinc-900 mb-2">{dest.name}</div>
                             <div className="flex items-center gap-1.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                <span className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest">Live</span>
                             </div>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Quick Install Section */}
        <section className="py-32 bg-zinc-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-primary-500 mb-4 block">Setup in minutes</span>
              <h2 className="text-5xl md:text-7xl font-black text-zinc-900 mb-6 tracking-tight leading-tight">
                Quick install. <span className="text-primary-500">No coding.</span>
              </h2>
              <p className="text-zinc-500 text-lg max-w-2xl mx-auto font-medium">
                Set up your tracking easily for more focused marketing campaigns, reduce "unknown" traffic, and save days fixing tracking errors.
              </p>
            </div>

            <div className="flex flex-col gap-16 md:gap-32">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
                <div className="flex-1 order-2 md:order-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary-500 mb-6 block">01 — Step</span>
                  <h3 className="text-3xl md:text-5xl font-black text-zinc-900 mb-6">Enable App Embed</h3>
                  <p className="text-zinc-500 text-lg font-medium leading-relaxed mb-8 max-w-xl">
                    Install the TrakIt app on Shopify and toggle on the TrakIt Data Layer app embed. Our lightweight script integrates seamlessly with your theme without slowing it down.
                  </p>
                  <div className="flex items-center gap-4 text-sm font-bold text-zinc-400">
                    <CheckCircle2 size={18} className="text-primary-500" />
                    <span>No theme file edits required</span>
                  </div>
                </div>
                <div className="flex-1 order-1 md:order-2 w-full">
                  <div className="glass-card p-12 bg-white/50 backdrop-blur-sm relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-primary-500/20" />
                    <div className="w-full bg-zinc-50 rounded-2xl p-8 border border-zinc-100 flex items-center justify-between shadow-inner">
                        <div className="flex items-center gap-4">
                           <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary-500/20">
                              <Zap size={20} />
                           </div>
                           <div className="text-sm font-black text-zinc-900 uppercase tracking-tight">TrakIt Data Layer</div>
                        </div>
                        <div className="w-14 h-7 bg-primary-500 rounded-full relative p-1 cursor-pointer">
                           <div className="w-5 h-5 bg-white rounded-full ml-auto shadow-md" />
                        </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24">
                <div className="flex-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary-500 mb-6 block">02 — Step</span>
                  <h3 className="text-3xl md:text-5xl font-black text-zinc-900 mb-6">Set up tracking sources</h3>
                  <p className="text-zinc-500 text-lg font-medium leading-relaxed mb-8 max-w-xl">
                    Choose your Shopify store events - product views, cart, checkout, purchase. We pre-map all 50+ ecommerce events so you don't have to touch a single line of code.
                  </p>
                  <div className="flex items-center gap-4 text-sm font-bold text-zinc-400">
                    <CheckCircle2 size={18} className="text-primary-500" />
                    <span>Full ecommerce event coverage</span>
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <div className="glass-card p-12 bg-white/50 backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-full h-1 bg-purple-500/20" />
                    <div className="space-y-4">
                      {['view_item', 'add_to_cart', 'begin_checkout', 'purchase'].map((event, i) => (
                        <div key={event} className="flex items-center gap-4 px-5 py-4 bg-zinc-50 rounded-xl border border-zinc-100 group hover:border-primary-500/30 transition-all shadow-sm" style={{ animationDelay: `${i * 100}ms` }}>
                            <div className="w-6 h-6 rounded-md bg-primary-500 flex items-center justify-center shadow-lg shadow-primary-500/20">
                               <CheckCircle2 size={14} className="text-white" />
                            </div>
                            <span className="text-sm font-mono font-bold text-zinc-600">{event}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
                <div className="flex-1 order-2 md:order-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary-500 mb-6 block">03 — Step</span>
                  <h3 className="text-3xl md:text-5xl font-black text-zinc-900 mb-6">Set up destinations</h3>
                  <p className="text-zinc-500 text-lg font-medium leading-relaxed mb-8 max-w-xl">
                    Connect Google Analytics, Meta, TikTok, and more. TrakIt starts sending accurate data immediately to all your marketing platforms simultaneously.
                  </p>
                  <div className="flex items-center gap-4 text-sm font-bold text-zinc-400">
                    <CheckCircle2 size={18} className="text-primary-500" />
                    <span>11+ Direct Integrations</span>
                  </div>
                </div>
                <div className="flex-1 order-1 md:order-2 w-full">
                  <div className="glass-card p-12 bg-white/50 backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-amber-500/20" />
                    <div className="grid grid-cols-4 gap-4">
                        {['googleads', 'meta', 'tiktok', 'googleanalytics', 'klaviyo', 'microsoftadvertising', 'googletagmanager', 'microsoft', 'hotjar'].map((s, i) => (
                          <div key={i} className="aspect-square bg-zinc-50 rounded-2xl flex items-center justify-center p-3 transition-all border border-zinc-100 shadow-sm hover:scale-110 hover:shadow-md">
                            {s === 'klaviyo' ? (
                              <KlaviyoIcon className="w-full h-full text-zinc-900" />
                            ) : s === 'microsoftadvertising' ? (
                              <BingIcon className="w-full h-full text-[#008373]" />
                            ) : s === 'microsoft' ? (
                              <MicrosoftIcon className="w-full h-full" />
                            ) : (
                              <img src={`https://cdn.simpleicons.org/${s}`} className="w-full h-full object-contain" />
                            )}
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="py-40 dark-section text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl md:text-7xl font-black mb-6 tracking-tight">
              Pricing built to <span className="text-accent italic">grow with you.</span>
            </h2>
            <p className="text-white/70 text-xl max-w-2xl mx-auto mb-16 font-medium">
              Start with our free tier and scale as your revenue increases. No hidden setup fees.
            </p>

            <div className="flex items-center justify-center gap-4 mb-16">
              <span className={`text-sm font-bold ${billingCycle === 'monthly' ? 'text-white' : 'text-white/50'}`}>Monthly</span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="w-14 h-7 bg-white/10 rounded-full p-1 relative flex items-center transition-colors hover:bg-white/20"
              >
                <motion.div
                  animate={{ x: billingCycle === 'monthly' ? 0 : 28 }}
                  className="w-5 h-5 bg-white rounded-full shadow-lg"
                />
              </button>
              <span className={`text-sm font-bold ${billingCycle === 'yearly' ? 'text-white' : 'text-white/50'}`}>
                Yearly <span className="ml-2 px-2 py-0.5 bg-accent text-[10px] uppercase rounded">Save 20%</span>
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
              <PricingCard
                name="Free"
                price="$0"
                description="Perfect for testing"
                features={["100 orders/month", "Browser + Server tracking", "GTM Integration", "Basic Dashboard"]}
                buttonText="Current Plan"
                buttonDisabled
              />
              <PricingCard
                name="Basic"
                price={billingCycle === "yearly" ? "$7.99" : "$9.99"}
                description="Most popular for small stores"
                features={["1,000 orders/month", "All destinations included", "7-day free trial", "Email support"]}
                buttonText="Start Free Trial"
                highlighted
              />
              <PricingCard
                name="Pro"
                price={billingCycle === "yearly" ? "$11.99" : "$14.99"}
                description="Unlimited scaling"
                features={["Unlimited* orders", "Priority email support", "Custom integrations", "Advanced analytics"]}
                buttonText="Start Free Trial"
              />
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-32 bg-white overflow-hidden border-t border-zinc-100">
          <div className="text-center mb-16">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-primary-500 mb-4 block">Reviews</span>
            <h2 className="text-4xl md:text-6xl font-black text-zinc-900 tracking-tight">
              Listen to <span className="text-primary-500">Shopify merchants</span> <br />
              who use our app
            </h2>
          </div>

          <div className="relative">
            <div className="flex gap-8 animate-marquee-slow whitespace-nowrap hover:pause-marquee">
              {[...Array(2)].map((_, i) => (
                <React.Fragment key={i}>
                  <ReviewCard
                    author="puppyprints.se"
                    text="I got help from the team to solve my installation. I can really recommend this app. The support, knowledge and friendly approach are outstanding. Thank you TrakIt!"
                  />
                  <ReviewCard
                    author="Nordic Wear"
                    text="The most accurate tracking we've found for Shopify. Our Meta CAPI attribution improved by 35% within the first week. A must-have for scaling."
                  />
                  <ReviewCard
                    author="EcoHome Co."
                    text="Finally, a tracking app that doesn't break our site speed. The server-side integration is flawless and the setup was actually 'no-code'."
                  />
                  <ReviewCard
                    author="Vibe Store"
                    text="Exceptional customer service. They went above and beyond to help us map our custom events. Highly recommend for any serious merchant."
                  />
                </React.Fragment>
              ))}
            </div>
            {/* Gradients to fade edges */}
            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent z-10" />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 bg-zinc-50/50 border-t border-zinc-100">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-primary-500 mb-4 block">Support</span>
              <h2 className="text-4xl md:text-6xl font-black text-zinc-900 tracking-tight">
                Frequently Asked <span className="text-primary-500">Questions</span>
              </h2>
            </div>

            <div className="space-y-4">
              <FAQItem
                question="How many marketing channels does TrakIt support?"
                answer="TrakIt supports all major marketing channels including Google Ads, Meta (Facebook/Instagram), TikTok, Snapchat, Pinterest, GA4, and more. We are constantly adding new destinations based on user feedback."
              />
              <FAQItem
                question="Is TrakIt compliant with GDPR / CCPA?"
                answer="Yes, TrakIt is fully compliant with global privacy regulations. We include a built-in consent mode that respects your customers' privacy settings while still providing accurate server-side attribution."
              />
              <FAQItem
                question="Are there any discounts or free trials available?"
                answer="We offer a 7-day free trial on all paid plans. Additionally, our Free Forever tier allows you to track up to 100 orders per month at no cost."
              />
              <FAQItem
                question="I am using another app for tracking. What should I do when setting up TrakIt?"
                answer="We recommend disabling other tracking apps once TrakIt is active to avoid double-counting. Our 'no-code' setup makes it easy to switch without losing any historical data or campaign momentum."
              />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 text-center bg-white">
          <div className="max-w-4xl mx-auto px-4">
             <h2 className="text-4xl md:text-6xl font-black text-zinc-900 mb-8">
               Ready to stop losing <br />
               <span className="text-primary-500">conversion data?</span>
             </h2>
             <p className="text-zinc-500 text-lg mb-12 font-medium">
               Join 1,000+ merchants who trust Track-It for their attribution.
             </p>
             <a
                href="https://apps.shopify.com/trackit-2"
                className="inline-flex items-center gap-3 rounded-full bg-primary-500 px-12 py-6 text-xl font-black text-white transition-all hover:bg-primary-600 shadow-2xl shadow-primary-500/40 active:scale-95"
              >
                Install Now on Shopify <ArrowRight size={24} />
              </a>
          </div>
        </section>
      </main>
    </div>
  );
}

function PricingCard({
  name,
  price,
  description,
  features,
  highlighted = false,
  buttonText,
  buttonDisabled = false
}: {
  name: string,
  price: string,
  description: string,
  features: string[],
  highlighted?: boolean,
  buttonText: string,
  buttonDisabled?: boolean
}) {
  return (
    <div className={`rounded-3xl p-10 flex flex-col transition-all duration-300 ${
      highlighted
        ? 'bg-white text-zinc-900 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] ring-4 ring-accent relative scale-105 z-10'
        : 'bg-white/5 border border-white/10 hover:bg-white/10'
    }`}>
      {highlighted && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
          Most Popular
        </span>
      )}
      <h3 className={`text-2xl font-black mb-2 ${highlighted ? 'text-zinc-900' : 'text-white'}`}>{name}</h3>
      <p className={`text-sm mb-8 font-medium ${highlighted ? 'text-zinc-500' : 'text-white/60'}`}>{description}</p>

      <div className="mb-10">
        <span className={`text-5xl font-black ${highlighted ? 'text-zinc-900' : 'text-white'}`}>{price}</span>
        <span className={`text-sm font-bold ml-2 ${highlighted ? 'text-zinc-500' : 'text-white/40'}`}>/month</span>
      </div>

      <button
        disabled={buttonDisabled}
        className={`w-full py-4 rounded-xl font-black text-sm transition-all mb-10 active:scale-95 ${
          highlighted
            ? 'bg-primary-500 text-white hover:bg-primary-600 shadow-xl shadow-primary-500/20'
            : 'bg-white text-primary-500 hover:bg-zinc-100'
        } ${buttonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {buttonText}
      </button>

      <div className="space-y-5">
        {features.map((feature, i) => (
          <div key={i} className="flex items-center gap-3">
            <CheckCircle2 size={18} className={highlighted ? 'text-primary-500' : 'text-accent'} />
            <span className={`text-sm font-bold ${highlighted ? 'text-zinc-600' : 'text-white/80'}`}>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
function ReviewCard({ author, text }: { author: string, text: string }) {
  return (
    <div className="w-[450px] inline-flex flex-col bg-white border border-zinc-100 p-10 rounded-3xl shadow-lg shadow-zinc-100/50 flex-shrink-0 group hover:border-primary-500/30 transition-all">
      <div className="flex gap-1 mb-6">
        {[1, 2, 3, 4, 5].map(i => <Sparkles key={i} size={16} className="text-amber-400 fill-amber-400" />)}
      </div>
      <p className="text-zinc-700 font-medium text-lg leading-relaxed mb-8 whitespace-normal">
        "{text}"
      </p>
      <div className="mt-auto flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-600 font-black text-xs uppercase">
          {author.substring(0, 2)}
        </div>
        <div>
          <div className="text-sm font-black text-zinc-900">{author}</div>
          <div className="flex items-center gap-1.5">
             <div className="w-2 h-2 rounded-full bg-green-500" />
             <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Shopify merchant</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="bg-white rounded-2xl border border-zinc-100 overflow-hidden shadow-sm hover:shadow-md transition-all">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-bold text-zinc-900 leading-tight group-hover:text-primary-500 transition-colors">{question}</span>
        <div className={`w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center shrink-0 transition-all ${isOpen ? 'rotate-45 bg-primary-500 border-primary-500' : ''}`}>
           <Zap size={14} className={isOpen ? 'text-white fill-white' : 'text-zinc-400'} />
        </div>
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="px-8 pb-8 text-zinc-500 font-medium leading-relaxed">
          {answer}
        </div>
      </motion.div>
    </div>
  );
}



