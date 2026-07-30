"use client";

import React, { useState, useEffect } from "react";
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
  Sparkles,
  Maximize2,
  X,
  Activity,
  Plug,
  Sliders,
  Check,
  ExternalLink,
  Eye,
  TrendingUp,
  Cpu,
  ChevronLeft,
  ChevronRight,
  Grid,
  Filter
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export interface AppHotspot {
  id: number;
  title: string;
  desc: string;
  badge: string;
  color: string;
  top: string;
  left: string;
}

export interface AppScreenshotItem {
  id: string;
  title: string;
  category: "Overview" | "Integrations" | "Analytics" | "Reports" | "Setup" | "Settings";
  src: string;
  badge: string;
  desc: string;
  hotspots: AppHotspot[];
}

export const APP_SCREENSHOTS: AppScreenshotItem[] = [
  {
    id: "overview",
    title: "Shopify Overview & Real-Time Telemetry",
    category: "Overview",
    src: "/images/trakit_overview.png",
    badge: "Real-Time Telemetry",
    desc: "Shopify admin overview dashboard tracking rescued conversions, order volume quotas, live event dispatches, and sales trend lines.",
    hotspots: [
      {
        id: 1,
        title: "External GTM Integration Launcher",
        desc: "Direct access to external dashboard, GTM tag manager integrations, and server-side dispatches in a clean layout.",
        badge: "External GTM Launch",
        color: "text-blue-700 border-blue-300 bg-blue-50",
        top: "24%",
        left: "50%"
      },
      {
        id: 2,
        title: "Rescued Conversions Telemetry",
        desc: "Monitors and recovers sales data blocked by iOS restrictions, ad-blockers, and browser tracking limits.",
        badge: "Data Recovery",
        color: "text-emerald-700 border-emerald-300 bg-emerald-50",
        top: "55%",
        left: "28%"
      },
      {
        id: 3,
        title: "Order Volume Quota Usage",
        desc: "Displays real-time tracking quota progress (e.g. 3/2000 orders) with automated quota alerts.",
        badge: "3/2000 Orders",
        color: "text-purple-700 border-purple-300 bg-purple-50",
        top: "55%",
        left: "50%"
      },
      {
        id: 4,
        title: "Real-Time Event Stream Counter",
        desc: "Shows active real-time dispatches firing across your store without page latency (55 events tracked).",
        badge: "+100.0% Firing",
        color: "text-amber-700 border-amber-300 bg-amber-50",
        top: "55%",
        left: "71%"
      }
    ]
  },
  {
    id: "google-setup",
    title: "Google Tracking Setup & Order Sync Table",
    category: "Setup",
    src: "/images/trakit_google_setup.png",
    badge: "GTM Active",
    desc: "Automatic tag configuration connecting Google Tag Manager (Container ID: GTM-MCS2G2L2) and real-time order sync table.",
    hotspots: [
      {
        id: 1,
        title: "Google Tag Manager Integration",
        desc: "Automatic tag and tracking configuration matching TrackIt email account and active GTM container ID.",
        badge: "GTM Active",
        color: "text-blue-700 border-blue-300 bg-blue-50",
        top: "28%",
        left: "50%"
      },
      {
        id: 2,
        title: "Real-Time Orders Sync Stream",
        desc: "Live stream showing order numbers (#1087, #1086...), converted values in INR, timestamps, and success sync status.",
        badge: "Real-Time Order Log",
        color: "text-emerald-700 border-emerald-300 bg-emerald-50",
        top: "65%",
        left: "50%"
      }
    ]
  },
  {
    id: "integrations",
    title: "1-Click Channel Connections Hub",
    category: "Integrations",
    src: "/images/trakit_integrations.png",
    badge: "13+ Connectors",
    desc: "Connect and manage all marketing channels (GA4, Meta Pixel, Google Ads, Klaviyo, TikTok, Snapchat, Pinterest, Clarity, Bing, Reddit & GDPR Consent) inside Shopify.",
    hotspots: [
      {
        id: 1,
        title: "Active GA4 & Meta Conversions API",
        desc: "Google Analytics 4 and Meta Pixel running concurrently with server-side CAPI deduplication.",
        badge: "Active Telemetry",
        color: "text-emerald-700 border-emerald-300 bg-emerald-50",
        top: "30%",
        left: "28%"
      },
      {
        id: 2,
        title: "Google Ads & Snapchat Connectors",
        desc: "Direct 1-click connectors for Google Ads Conversion and Snapchat Ads with live status toggles.",
        badge: "Active Advertising",
        color: "text-blue-700 border-blue-300 bg-blue-50",
        top: "30%",
        left: "72%"
      },
      {
        id: 3,
        title: "Klaviyo Beta Email Dispatch",
        desc: "Klaviyo email marketing tracking and server-side event dispatch integration.",
        badge: "Klaviyo Active",
        color: "text-purple-700 border-purple-300 bg-purple-50",
        top: "48%",
        left: "50%"
      },
      {
        id: 4,
        title: "Consentmo GDPR Consent Sync",
        desc: "Respects cookie consent settings automatically while maintaining precision tracking accuracy.",
        badge: "GDPR Compliant",
        color: "text-amber-700 border-amber-300 bg-amber-50",
        top: "82%",
        left: "72%"
      }
    ]
  },
  {
    id: "attribution-analytics",
    title: "Multi-Touch Attribution Analytics",
    category: "Analytics",
    src: "/images/trakit_attribution_analytics.png",
    badge: "$743.26 Revenue",
    desc: "Server-side conversion and multi-touch attribution reporting featuring First Click, Last Click, and Sales & Order trend line graphs.",
    hotspots: [
      {
        id: 1,
        title: "Attribution Model & Date Selector",
        desc: "Toggle between First Click (Discovery) and Last Click (Conversion) attribution models across customizable date ranges.",
        badge: "Attribution Control",
        color: "text-purple-700 border-purple-300 bg-purple-50",
        top: "24%",
        left: "50%"
      },
      {
        id: 2,
        title: "Tracked Revenue & Orders Summary",
        desc: "$743.26 total tracked revenue across 3 successfully attributed store orders.",
        badge: "$743.26 Tracked",
        color: "text-emerald-700 border-emerald-300 bg-emerald-50",
        top: "38%",
        left: "33%"
      },
      {
        id: 3,
        title: "Sales & Order Trend Line Graph",
        desc: "Visual trend curve plotting sales value ($) and converted orders over time.",
        badge: "Visual Trend Line",
        color: "text-blue-700 border-blue-300 bg-blue-50",
        top: "70%",
        left: "50%"
      }
    ]
  },
  {
    id: "channel-share",
    title: "Channel Share & Campaign ROI Breakdown",
    category: "Reports",
    src: "/images/trakit_channel_share.png",
    badge: "Campaign Attribution",
    desc: "Detailed channel conversion share bar chart comparing Direct/Organic vs Google Ads, and Last-Touch Campaign ROI table.",
    hotspots: [
      {
        id: 1,
        title: "Channel Conversion Share Bar Chart",
        desc: "Horizontal bar chart visualizing revenue share breakdown between Direct/Organic traffic and Google Ads.",
        badge: "Share Breakdown",
        color: "text-emerald-700 border-emerald-300 bg-emerald-50",
        top: "35%",
        left: "50%"
      },
      {
        id: 2,
        title: "Campaign ROI Last-Touch Table",
        desc: "Per-campaign breakdown showing Source/Medium, Campaign Name, Orders, Revenue, and Average Order Value (AOV).",
        badge: "Campaign ROI",
        color: "text-blue-700 border-blue-300 bg-blue-50",
        top: "75%",
        left: "50%"
      }
    ]
  },
  {
    id: "first-last-touch",
    title: "First Touch vs Last Touch & Time Lag Analysis",
    category: "Analytics",
    src: "/images/trakit_first_last_touch.png",
    badge: "Attribution Models",
    desc: "Compare revenue generated as the discovery channel vs the closing channel, alongside Time Lag to Conversion and Interactions to Conversion breakdowns.",
    hotspots: [
      {
        id: 1,
        title: "First Touch vs Last Touch Comparison",
        desc: "Visual bar chart comparing initial discovery channel revenue against final conversion closing channel.",
        badge: "First vs Last Touch",
        color: "text-purple-700 border-purple-300 bg-purple-50",
        top: "32%",
        left: "50%"
      },
      {
        id: 2,
        title: "Time Lag to Conversion Meter",
        desc: "Days elapsed between the initial visitor touchpoint and final purchase completion.",
        badge: "Time Lag",
        color: "text-emerald-700 border-emerald-300 bg-emerald-50",
        top: "75%",
        left: "33%"
      },
      {
        id: 3,
        title: "Interactions to Conversion Touchpoints",
        desc: "Distribution of channel interactions (1 interaction, 2 interactions, 3+ interactions) before purchasing.",
        badge: "Multi-Touch Count",
        color: "text-blue-700 border-blue-300 bg-blue-50",
        top: "75%",
        left: "67%"
      }
    ]
  },
  {
    id: "reports-tracked-orders",
    title: "Tracked Orders & Revenue Reports Table",
    category: "Reports",
    src: "/images/trakit_reports_tracked_orders.png",
    badge: "3 Orders Tracked",
    desc: "Detailed reports view showing total orders, total revenue ($743.26), attributed orders vs organic/direct, and order date export tables.",
    hotspots: [
      {
        id: 1,
        title: "Order Volume & Attributed Breakdown",
        desc: "Total orders (3), total revenue ($743.26), attributed orders (2), and organic/direct orders (1).",
        badge: "$743.26 Revenue",
        color: "text-emerald-700 border-emerald-300 bg-emerald-50",
        top: "32%",
        left: "50%"
      },
      {
        id: 2,
        title: "Tracked Orders Sync Stream",
        desc: "Real-time order table with values in INR, timestamps, and active sync status indicators.",
        badge: "Real-Time Sync",
        color: "text-blue-700 border-blue-300 bg-blue-50",
        top: "65%",
        left: "50%"
      }
    ]
  },
  {
    id: "reports-order-attribution",
    title: "Order Attribution & Ad Campaign Source",
    category: "Reports",
    src: "/images/trakit_reports_order_attribution.png",
    badge: "Top Source: Google",
    desc: "Deep attribution reporting highlighting Top Ad Source (Google) and Top Ad Campaign name matching landing page URLs.",
    hotspots: [
      {
        id: 1,
        title: "Top Ad Source & Campaign Banner",
        desc: "Highlights top performing ad channels (Google) and top revenue generating campaign strings.",
        badge: "Top Source: Google",
        color: "text-blue-700 border-blue-300 bg-blue-50",
        top: "32%",
        left: "50%"
      },
      {
        id: 2,
        title: "Order Source & Landing Page Mapping",
        desc: "Maps order IDs (#1087, #1086...) to specific ad sources (Google vs Organic), campaign IDs, and landing pages.",
        badge: "Campaign Mapping",
        color: "text-purple-700 border-purple-300 bg-purple-50",
        top: "65%",
        left: "50%"
      }
    ]
  },
  {
    id: "reports-event-logs",
    title: "Server Event Logs & Dispatch Stream",
    category: "Reports",
    src: "/images/trakit_reports_event_logs.png",
    badge: "79 Events Fired",
    desc: "Raw server-side dispatch log stream tracking 79 total events (Purchase, Add To Cart) across Google Ads, Klaviyo, GA4, Snapchat, and Meta Ads.",
    hotspots: [
      {
        id: 1,
        title: "Multi-Filter Log Controls",
        desc: "Filter dispatch logs by Service, Firing Status (Success/Failed), Event Type, and Date Range.",
        badge: "Filter Controls",
        color: "text-blue-700 border-blue-300 bg-blue-50",
        top: "32%",
        left: "30%"
      },
      {
        id: 2,
        title: "79 Events Dispatched (0% Failure)",
        desc: "Monitor server dispatch performance with 79 total events fired and 0 failed dispatches.",
        badge: "100% Reliability",
        color: "text-emerald-700 border-emerald-300 bg-emerald-50",
        top: "45%",
        left: "50%"
      },
      {
        id: 3,
        title: "Real-Time Event Stream Log Table",
        desc: "Detailed log rows tracking event name, target destination service, exact timestamp, and green success badge.",
        badge: "Live Event Log",
        color: "text-purple-700 border-purple-300 bg-purple-50",
        top: "75%",
        left: "50%"
      }
    ]
  },
  {
    id: "settings",
    title: "Advanced App Settings & Web Pixel Controls",
    category: "Settings",
    src: "/images/trakit_settings.png",
    badge: "App Controls",
    desc: "Configure user consent policies, browser console debugging, GTM-less native tracking mode, and instant Web Pixel sync.",
    hotspots: [
      {
        id: 1,
        title: "Respect User Consent & Privacy Controls",
        desc: "Manage how user cookie consent is handled automatically for full compliance with GDPR, CCPA, and ePrivacy rules.",
        badge: "GDPR Consent Control",
        color: "text-amber-700 border-amber-300 bg-amber-50",
        top: "35%",
        left: "50%"
      },
      {
        id: 2,
        title: "Console Debugging & GTM-less Tracking",
        desc: "Enable browser console inspect logs and run native tracking without requiring a Google Tag Manager container.",
        badge: "Native Tracking",
        color: "text-blue-700 border-blue-300 bg-blue-50",
        top: "55%",
        left: "50%"
      },
      {
        id: 3,
        title: "Instant Web Pixel Sync Refresh",
        desc: "Forces the Shopify Web Pixel extension to sync all configuration tokens directly from app database.",
        badge: "Web Pixel Refresh",
        color: "text-emerald-700 border-emerald-300 bg-emerald-50",
        top: "80%",
        left: "70%"
      }
    ]
  }
];

export default function LandingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string; desc: string } | null>(null);
  const [activeScreenshotId, setActiveScreenshotId] = useState<string>("overview");
  const [selectedHotspot, setSelectedHotspot] = useState<number>(1);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-primary-500 selection:text-white">
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative pt-24 pb-8 lg:pt-32 lg:pb-12 blueprint-grid overflow-hidden">
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

        {/* Dynamic Multi-Screenshot Hotspot Studio Showcase (Supports 10+ Screenshots) */}
        <section id="app-studio" className="pt-2 pb-24 bg-white blueprint-grid text-zinc-900 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Main Interactive Studio Grid */}
            {(() => {
              const activeItem = APP_SCREENSHOTS.find((s) => s.id === activeScreenshotId) || APP_SCREENSHOTS[0];
              const activeHotspotObj = activeItem.hotspots.find((h) => h.id === selectedHotspot) || activeItem.hotspots[0];

              return (
                <div>
                  {/* Top Screen Selector Bar (Multi-Row 2-Line Wrap) */}
                  <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10 max-w-4xl mx-auto">
                    {APP_SCREENSHOTS.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => {
                          setActiveScreenshotId(s.id);
                          setSelectedHotspot(1);
                        }}
                        className={`px-3.5 py-2 rounded-xl flex items-center gap-1.5 text-xs font-bold transition-all whitespace-nowrap ${
                          activeItem.id === s.id
                            ? "bg-primary-500 text-white shadow-lg shadow-primary-500/25 scale-105"
                            : "bg-white text-zinc-600 border border-zinc-200/80 hover:bg-zinc-100 hover:text-zinc-900 shadow-xs"
                        }`}
                      >
                        <Activity size={12} /> {s.title.split(" ")[0]} {s.title.split(" ")[1] || ""}
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left Column: Interactive Hotspot Cards List */}
                    <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-zinc-200/80 mb-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
                          <Sparkles size={13} className="fill-primary-500 text-primary-500" /> {activeItem.title}
                        </span>
                        <span className="text-[11px] font-bold text-primary-600 bg-primary-50 px-2.5 py-0.5 rounded-full border border-primary-100">
                          {activeItem.category}
                        </span>
                      </div>

                      {activeItem.hotspots && activeItem.hotspots.length > 0 ? (
                        activeItem.hotspots.map((hs) => (
                          <div
                            key={hs.id}
                            onClick={() => setSelectedHotspot(hs.id)}
                            className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                              selectedHotspot === hs.id
                                ? "bg-white border-2 border-primary-500 shadow-xl shadow-primary-500/10 translate-x-2"
                                : "bg-white/80 backdrop-blur-sm border-zinc-200/80 hover:bg-white hover:border-zinc-300 shadow-sm"
                            }`}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-3">
                                <span className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs border ${
                                  selectedHotspot === hs.id ? "bg-primary-500 text-white border-primary-400" : "bg-zinc-100 text-zinc-600 border-zinc-200"
                                }`}>
                                  {hs.id}
                                </span>
                                <h4 className="font-bold text-base text-zinc-900">{hs.title}</h4>
                              </div>
                              <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-full border ${hs.color}`}>
                                {hs.badge}
                              </span>
                            </div>
                            <p className="text-xs text-zinc-500 font-medium pl-10 leading-relaxed">
                              {hs.desc}
                            </p>
                          </div>
                        ))
                      ) : (
                        <div className="p-6 bg-white rounded-2xl border border-zinc-200 shadow-sm">
                          <h4 className="font-bold text-base text-zinc-900 mb-2">{activeItem.title}</h4>
                          <p className="text-xs text-zinc-500 font-medium leading-relaxed">{activeItem.desc}</p>
                        </div>
                      )}
                    </div>

                    {/* Right Column: Centered Screenshot Viewport */}
                    <div className="lg:col-span-7 flex items-center justify-center">
                      <div className="rounded-3xl border border-zinc-200/90 bg-white overflow-hidden shadow-2xl relative w-full">
                        {/* Mockup Header Bar */}
                        <div className="bg-zinc-100 px-4 py-3 border-b border-zinc-200 flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400" />
                            <div className="w-3 h-3 rounded-full bg-amber-400" />
                            <div className="w-3 h-3 rounded-full bg-green-400" />
                          </div>

                          <div className="text-xs font-mono text-zinc-500 bg-white px-3 py-1 rounded-lg border border-zinc-200/80 shadow-xs truncate max-w-[280px]">
                            shopify.com/admin/apps/trakit/{activeItem.id}
                          </div>

                          <button
                            onClick={() =>
                              setLightboxImage({
                                src: activeItem.src,
                                title: activeItem.title,
                                desc: activeItem.desc
                              })
                            }
                            className="text-xs font-bold text-primary-600 flex items-center gap-1 hover:text-primary-700 transition-colors"
                          >
                            <Maximize2 size={12} /> Full Screen
                          </button>
                        </div>

                        {/* Image Viewport */}
                        <div className="relative bg-white overflow-hidden group flex items-center justify-center">
                          <img
                            src={activeItem.src}
                            alt={activeItem.title}
                            className="w-full h-auto object-contain block"
                          />

                          {/* Hotspot Pulse Overlay Pins */}
                          {activeItem.hotspots && activeItem.hotspots.map((pin) => (
                            <button
                              key={pin.id}
                              onClick={() => setSelectedHotspot(pin.id)}
                              style={{ top: pin.top, left: pin.left }}
                              className={`absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all z-20 ${
                                selectedHotspot === pin.id
                                  ? "bg-primary-500 text-white ring-4 ring-primary-500/30 scale-125 shadow-lg shadow-primary-500/40"
                                  : "bg-white text-zinc-700 border border-zinc-300 hover:bg-primary-500 hover:text-white shadow-md"
                              }`}
                            >
                              <span className="absolute inset-0 rounded-full bg-primary-500 animate-ping opacity-30" />
                              {pin.id}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
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
                 <img src="/images/google_ads.png" alt="Google Ads" className="h-8 w-auto flex-shrink-0 object-contain" />
                 <img src="/images/meta_ads.png" alt="Meta" className="h-8 w-auto flex-shrink-0 object-contain" />
                 <img src="/images/tiktok_ads.png" alt="TikTok" className="h-8 w-auto flex-shrink-0 object-contain" />
                 <img src="/images/pinterest_ads.png" alt="Pinterest" className="h-8 w-auto flex-shrink-0 object-contain" />
                 <img src="/images/snapchat_ads.png" alt="Snapchat" className="h-8 w-auto flex-shrink-0 object-contain" />
                 <img src="/images/google_analytics_4.png" alt="GA4" className="h-8 w-auto flex-shrink-0 object-contain" />
                 <img src="/images/klaviyo.png" alt="Klaviyo" className="h-8 w-auto flex-shrink-0 object-contain" />
                 <img src="/images/bing_ads.png" alt="Bing Ads" className="h-8 w-auto flex-shrink-0 object-contain" />
                 <img src="https://cdn.simpleicons.org/shopify" alt="Shopify" className="h-8 w-auto flex-shrink-0 object-contain" />
                 <img src="/images/google_tag_manager.png" alt="GTM" className="h-8 w-auto flex-shrink-0 object-contain" />
                 <img src="/images/microsoft_clarity.png" alt="Microsoft Clarity" className="h-8 w-auto flex-shrink-0 object-contain" />
                 <img src="/images/hotjar.png" alt="Hotjar" className="h-8 w-auto flex-shrink-0 object-contain" />
                 <img src="/images/reddit_ads.png" alt="Reddit Ads" className="h-8 w-auto flex-shrink-0 object-contain" />
                 <img src="/images/consentmo.png" alt="Consentmo" className="h-8 w-auto flex-shrink-0 object-contain" />
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
                     <span className="text-xs font-bold text-zinc-400">13 of 13 connected</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                     {[
                       { name: "Google Analytics 4", image: "/images/google_analytics_4.png" },
                       { name: "Google Ads", image: "/images/google_ads.png" },
                       { name: "Meta Ads", image: "/images/meta_ads.png" },
                       { name: "TikTok", image: "/images/tiktok_ads.png" },
                       { name: "Klaviyo", image: "/images/klaviyo.png" },
                       { name: "Bing Ads", image: "/images/bing_ads.png" },
                       { name: "Pinterest", image: "/images/pinterest_ads.png" },
                       { name: "Snapchat", image: "/images/snapchat_ads.png" },
                       { name: "Google Tag Manager", image: "/images/google_tag_manager.png" },
                       { name: "Microsoft Clarity", image: "/images/microsoft_clarity.png" },
                       { name: "Hotjar", image: "/images/hotjar.png" },
                       { name: "Reddit Ads", image: "/images/reddit_ads.png" },
                       { name: "Consentmo GDPR CMP", image: "/images/consentmo.png" },
                     ].map((dest, i) => (
                       <div key={i} className="bg-white p-6 rounded-2xl border border-zinc-100 flex flex-col items-start gap-4 hover:shadow-lg transition-all hover:-translate-y-1">
                          <div className="w-10 h-10 flex items-center justify-center p-1">
                             <img 
                               src={dest.image} 
                               alt={dest.name} 
                               className="w-full h-full object-contain"
                             />
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
                    <span>13+ Direct Integrations</span>
                  </div>
                </div>
                <div className="flex-1 order-1 md:order-2 w-full">
                  <div className="glass-card p-12 bg-white/50 backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-amber-500/20" />
                    <div className="grid grid-cols-4 gap-4">
                        {[
                          { name: 'googleads', image: '/images/google_ads.png' },
                          { name: 'meta', image: '/images/meta_ads.png' },
                          { name: 'tiktok', image: '/images/tiktok_ads.png' },
                          { name: 'googleanalytics', image: '/images/google_analytics_4.png' },
                          { name: 'klaviyo', image: '/images/klaviyo.png' },
                          { name: 'microsoftadvertising', image: '/images/bing_ads.png' },
                          { name: 'googletagmanager', image: '/images/google_tag_manager.png' },
                          { name: 'microsoft', image: '/images/microsoft_clarity.png' },
                          { name: 'hotjar', image: '/images/hotjar.png' },
                          { name: 'reddit', image: '/images/reddit_ads.png' },
                          { name: 'consentmo', image: '/images/consentmo.png' },
                        ].map((s, i) => (
                          <div key={i} className="aspect-square bg-zinc-50 rounded-2xl flex items-center justify-center p-4 transition-all border border-zinc-100 shadow-sm hover:scale-110 hover:shadow-md">
                            <img src={s.image} alt={s.name} className="w-1/2 h-1/2 object-contain" />
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
                features={[
                  "Multiple destinations included",
                  "100 orders/month included",
                  "Client-side and Server-side tracking",
                  "Recent tracked orders dashboard",
                  "Email support"
                ]}
                buttonText="Current Plan"
                buttonDisabled
              />
              <PricingCard
                name="Pro"
                price={billingCycle === "yearly" ? "$299.99" : "$29.99"}
                period={billingCycle === "yearly" ? "/year" : "/month"}
                description="For growing stores"
                features={[
                  "All destinations included",
                  "2,000 orders/month included",
                  "Event Logs Report",
                  "Advanced dashboard",
                  "Priority email support",
                  "7-day free trial",
                  "Custom integrations support"
                ]}
                buttonText="Start Free Trial"
                highlighted
              />
              <PricingCard
                name="Advance"
                price={billingCycle === "yearly" ? "$999.99" : "$99.99"}
                period={billingCycle === "yearly" ? "/year" : "/month"}
                description="For enterprise volume"
                features={[
                  "Everything in Pro plan",
                  "Unlimited* orders",
                  "Priority email support",
                  "7-day free trial",
                  "Custom integrations support"
                ]}
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

        {/* Lightbox Modal for Screenshots */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImage(null)}
              className="fixed inset-0 z-50 bg-zinc-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-6xl w-full bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden shadow-2xl"
              >
                {/* Modal Top Bar */}
                <div className="px-6 py-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/90">
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Sparkles size={16} className="text-primary-500" />
                      {lightboxImage.title}
                    </h3>
                    <p className="text-xs text-zinc-400 font-medium">{lightboxImage.desc}</p>
                  </div>
                  <button
                    onClick={() => setLightboxImage(null)}
                    className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                {/* Modal Image Container */}
                <div className="p-4 sm:p-6 bg-zinc-950 max-h-[80vh] overflow-y-auto">
                  <img
                    src={lightboxImage.src}
                    alt={lightboxImage.title}
                    className="w-full h-auto rounded-xl border border-zinc-800 shadow-xl"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
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
  buttonDisabled = false,
  period = "/month"
}: {
  name: string,
  price: string,
  description: string,
  features: string[],
  highlighted?: boolean,
  buttonText: string,
  buttonDisabled?: boolean,
  period?: string
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
        <span className={`text-sm font-bold ml-2 ${highlighted ? 'text-zinc-500' : 'text-white/40'}`}>{period}</span>
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



