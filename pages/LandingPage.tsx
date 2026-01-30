import React from "react";
import { Terminal } from "../components/Terminal";
import {
  ArrowUpRight,
  Check,
  ShieldCheck,
  Zap,
  BarChart3,
  Globe,
} from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "0",
    limit: "50 orders/mo",
    description: "Ideal for development and early-stage stores.",
    features: ["1 Destination", "Client-side tracking", "Server-side tagging"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Basic",
    price: "9.99",
    limit: "1,000 orders/mo",
    description: "Best for stores hitting initial scale.",
    features: [
      "Everything in Free",
      "Recent orders dashboard",
      "7-day free trial",
    ],
    cta: "Start 7-Day Trial",
    popular: true,
  },
  {
    name: "Pro",
    price: "14.99",
    limit: "Unlimited orders",
    description: "Built for high-volume commerce operations.",
    features: [
      "Everything in Basic",
      "Automatic retry logic",
      "Custom integrations",
    ],
    cta: "Start 7-Day Trial",
    popular: false,
  },
];

export default function LandingPage() {
  return (
    <div className="dot-grid">
      {/* Hero */}
      <section className="relative pt-24 pb-32 lg:pt-36 lg:pb-48">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/50 px-4 py-1.5 mb-10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700">
              Official Release v1.1.0
            </span>
          </div>

          <h1 className="text-5xl font-extrabold tracking-tight text-zinc-950 sm:text-7xl mb-8 leading-[1.1]">
            Accurate Server-Side <br />
            <span className="text-zinc-400">Tracking for Shopify.</span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-zinc-500 mb-12 leading-relaxed font-medium">
            Bypass iOS limitations and stop losing conversion data. TrackIt uses
            custom pixels to deliver 100% data accuracy even when cookies are
            blocked.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://apps.shopify.com/trackit-2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-blue-600 px-10 py-4 text-sm font-bold text-white transition-all hover:bg-blue-700 hover:scale-[1.02] shadow-lg shadow-blue-500/20"
            >
              Start 7-Day Free Trial
            </a>
            <a
              href="https://apps.shopify.com/trackit-2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-white px-10 py-4 text-sm font-bold text-zinc-950 transition-all hover:bg-zinc-50"
            >
              View on Shopify <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="pb-32 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col p-8 rounded-2xl border transition-all ${
                  plan.popular
                    ? "border-blue-600 bg-white shadow-2xl scale-105 z-10"
                    : "border-zinc-100 bg-white/50 backdrop-blur-md"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-[10px] font-black text-white uppercase tracking-widest">
                    Recommended
                  </span>
                )}
                <div className="mb-8">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-3">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold tracking-tighter text-zinc-950">
                      ${plan.price}
                    </span>
                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                      /mo
                    </span>
                  </div>
                  <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-4">
                    {plan.limit}
                  </p>
                  <p className="text-sm text-zinc-500 leading-relaxed font-medium">
                    {plan.description}
                  </p>
                </div>

                <div className="space-y-4 mb-10 flex-1">
                  {plan.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check size={14} className="text-blue-600 shrink-0" />
                      <span className="text-xs font-medium text-zinc-600">
                        {f}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full rounded-lg py-4 text-xs font-black uppercase tracking-widest transition-all ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-zinc-100 text-zinc-950 hover:bg-zinc-200"
                  }`}
                >
                  <a
                    href="https://apps.shopify.com/trackit-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {plan.cta}
                  </a>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-zinc-50 border-t border-zinc-100 py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            <div className="space-y-4">
              <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-sm font-bold text-zinc-950 uppercase tracking-widest">
                Privacy Compliant
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Full support for Consent Mode v2 and GDPR logic. Respect privacy
                while maintaining measurement.
              </p>
            </div>
            <div className="space-y-4">
              <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                <Zap size={20} />
              </div>
              <h3 className="text-sm font-bold text-zinc-950 uppercase tracking-widest">
                Zero Latency
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Lightweight custom web pixels that won't impact your Shopify
                PageSpeed score or core web vitals.
              </p>
            </div>
            <div className="space-y-4">
              <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                <Globe size={20} />
              </div>
              <h3 className="text-sm font-bold text-zinc-950 uppercase tracking-widest">
                Global Support
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Integrated with GA4, Meta (CAPI), TikTok, Pinterest, and Google
                Ads out of the box.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
