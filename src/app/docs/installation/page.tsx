import React from "react";
import Link from "next/link";
import { ArrowRight, Key, CreditCard, ShieldCheck, HelpCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify App Installation & Pricing Guide | TrakIt",
  description: "Comprehensive guide to installing TrakIt on Shopify, configuring app proxy and custom pixel scopes, and applying promo codes for discount pricing.",
};

export default function InstallationPage() {
  const scopes = [
    {
      name: "read_orders",
      purpose: "Access order totals, transaction IDs, product SKUs, tax, and shipping amounts to map exact conversions to GA4, Meta, Pinterest, and Bing Ads.",
    },
    {
      name: "read_customers",
      purpose: "Enable advanced customer-matching attribution (first-party data comparison) and synchronization with Klaviyo marketing flows.",
    },
    {
      name: "write_pixels & read_pixels",
      purpose: "Insert Shopify custom web pixel sandbox scripts for secure, real-time client-side event detection.",
    },
    {
      name: "read_customer_events",
      purpose: "Detect client browser behavioral events (view_item, add_to_cart, begin_checkout) to match with server-side deduplication tokens.",
    },
    {
      name: "write_app_proxy",
      purpose: "Establish secure proxy pathways (e.g., /apps/trakit) to bypass browser-based adblockers and send events securely to server endpoints.",
    },
  ];

  return (
    <article className="prose prose-zinc max-w-none prose-headings:text-zinc-900 prose-headings:font-black prose-p:text-zinc-500 prose-p:font-medium prose-p:leading-relaxed prose-li:text-zinc-500 prose-li:font-medium prose-strong:text-zinc-900 prose-strong:font-black">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
          Getting Started
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-6">
          App Installation & Authorization Guide
        </h1>
        <p className="text-xl text-zinc-500 font-medium leading-relaxed">
          Learn how to install TrakIt, configure the necessary API scopes, select from our standard pricing plans, and apply promotional discounts.
        </p>
      </div>

      <h2 className="text-2xl md:text-3xl font-black text-zinc-900 mt-12 mb-6" id="install-steps">
        Step 1: Install from Shopify App Store
      </h2>
      <p>
        To begin, add TrakIt to your Shopify store from the App Store. Because TrakIt utilizes Shopify's modern Web Pixels API, it integrates directly with your theme sandboxed layers.
      </p>
      <ol className="space-y-3 my-6 pl-6">
        <li>Navigate to the Shopify App Store and search for <strong>TrakIt</strong>.</li>
        <li>Click <strong>Add App</strong> to start the installation.</li>
        <li>Log into your Shopify store admin credentials when prompted.</li>
      </ol>

      <h2 className="text-2xl md:text-3xl font-black text-zinc-900 mt-16 mb-6" id="app-permissions">
        Step 2: Understand & Accept API Scopes
      </h2>
      <p>
        TrakIt requests specific access scopes to capture conversion events safely on the server side and send them to Google Ads, Meta, Snapchat, and TikTok. Below is the breakdown of what scopes we require and why:
      </p>

      <div className="space-y-4 my-8 not-prose">
        {scopes.map((scope, idx) => (
          <div key={idx} className="p-5 rounded-2xl bg-zinc-50 border border-zinc-100 flex gap-4">
            <div className="p-2.5 bg-zinc-900/5 rounded-xl self-start">
              <Key className="text-zinc-700" size={18} />
            </div>
            <div>
              <code className="text-xs font-black text-zinc-900 bg-zinc-200/50 px-2 py-0.5 rounded font-mono">
                {scope.name}
              </code>
              <p className="text-xs text-zinc-500 font-medium leading-relaxed mt-2 m-0">
                {scope.purpose}
              </p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl md:text-3xl font-black text-zinc-900 mt-16 mb-6" id="pricing-plans">
        Step 3: Choose a Pricing Plan
      </h2>
      <p>
        Upon approving the API permissions, you will be redirected to the plan selection dashboard. TrakIt offers three main subscription tiers built for stores of all scales:
      </p>

      <div className="overflow-x-auto my-8 not-prose border border-zinc-100 rounded-2xl bg-white shadow-sm">
        <table className="w-full border-collapse text-left text-sm text-zinc-500">
          <thead>
            <tr className="border-b border-zinc-200 bg-zinc-50/50">
              <th className="px-6 py-4 font-black text-zinc-900 text-xs uppercase tracking-wider">Plan Tier</th>
              <th className="px-6 py-4 font-black text-zinc-900 text-xs uppercase tracking-wider">Monthly Orders Limit</th>
              <th className="px-6 py-4 font-black text-zinc-900 text-xs uppercase tracking-wider">Features Included</th>
              <th className="px-6 py-4 font-black text-zinc-900 text-xs uppercase tracking-wider text-right">Price</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            <tr>
              <td className="px-6 py-4 font-black text-zinc-900">Free</td>
              <td className="px-6 py-4">100 orders / month</td>
              <td className="px-6 py-4">Browser + Server tracking, GTM Integration, Basic Dashboard. Perfect for testing.</td>
              <td className="px-6 py-4 text-right font-black text-zinc-900">$0/mo</td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-black text-zinc-900">Basic</td>
              <td className="px-6 py-4">1,000 orders / month</td>
              <td className="px-6 py-4">All destinations included, 7-day free trial, standard email support.</td>
              <td className="px-6 py-4 text-right font-black text-zinc-900">$9.99/mo <span className="text-[10px] text-zinc-400 font-bold block">($7.99/mo billed yearly)</span></td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-black text-zinc-900">Pro</td>
              <td className="px-6 py-4">Unlimited* orders</td>
              <td className="px-6 py-4">Priority email support, custom integrations, advanced analytics. Built for scaling.</td>
              <td className="px-6 py-4 text-right font-black text-zinc-900">$14.99/mo <span className="text-[10px] text-zinc-400 font-bold block">($11.99/mo billed yearly)</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-primary-500/5 border-l-4 border-primary-500 p-6 my-8 rounded-r-2xl not-prose">
        <div className="flex gap-4 items-start">
          <CreditCard className="text-primary-500 shrink-0 mt-1" size={20} />
          <div>
            <h4 className="text-zinc-900 text-lg font-black m-0 mb-1">Applying Promotional Codes</h4>
            <p className="text-zinc-600 text-sm font-medium m-0 leading-relaxed">
              If you have a promotional code (e.g., <strong>10PERCENT</strong>), enter it in the checkout drawer on the Shopify Approval page. This will automatically deduct 10% from your monthly or yearly Basic or Pro plans.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl md:text-3xl font-black text-zinc-900 mt-16 mb-6" id="dev-stores">
        Developer Store Billing & Sandboxes
      </h2>
      <p>
        For development store partners, TrakIt supports free test charges. If you install TrakIt on a Shopify Development Store or partner sandbox, TrakIt will automatically bypass active billing checks and let you run unlimited server events for diagnostic testing.
      </p>

      <div className="bg-primary-500/5 border border-primary-500/20 rounded-2xl p-8 my-12 not-prose flex flex-col md:flex-row items-center gap-8 justify-between">
        <div>
          <h3 className="text-zinc-900 text-lg font-black mb-2 flex items-center gap-2">
            <ShieldCheck className="text-primary-500" size={20} /> Security & Privacy Compliant
          </h3>
          <p className="text-zinc-500 text-xs font-medium m-0 leading-relaxed max-w-xl">
            TrakIt operates under strict user-consent standards. We automatically respect Shopify's native Customer Privacy consent status before initializing server payloads to comply with GDPR & CCPA rules.
          </p>
        </div>
        <Link
          href="/docs/quick-start"
          className="text-xs font-black text-primary-500 hover:text-primary-400 flex items-center gap-1 transition-all"
        >
          Check Quick Start Guide <ArrowRight size={14} />
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
