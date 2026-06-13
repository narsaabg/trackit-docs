import React from "react";
import { ArrowRight, Info, Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Klaviyo Shopify Server-Side Tracking Setup | TrakIt",
  description: "Connect Klaviyo to TrakIt. Retrieve your Public API Key (Site ID) and Private API Key to track subscriber logins, signups, and checkouts.",
};

export default function KlaviyoPage() {
  return (
    <article className="prose prose-zinc max-w-none prose-headings:text-zinc-900 prose-headings:font-black prose-p:text-zinc-500 prose-p:font-medium prose-strong:text-zinc-900">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
          Configuration
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-6">
          Klaviyo Setup
        </h1>
        <p className="text-xl text-zinc-500 font-medium leading-relaxed">
          Fuel email campaigns and customer segmentations. TrakIt pushes subscriber profile signups, login milestones, and checkout actions directly to Klaviyo profiles.
        </p>
      </div>

      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6">Background Knowledge</h2>
      <p>
        Klaviyo uses cookie identifiers to track customer profiles. Standard front-end tracking drops off if a user switches devices or clears their cache.
      </p>
      <p>
        TrakIt bridges this by communicating directly with Klaviyo's server APIs. When a customer logs in, subscribes to a newsletter, or starts a checkout, TrakIt identifies their profile and creates server-side records to trigger email flow campaigns.
      </p>

      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6">Configuration Fields</h2>
      <div className="space-y-4 my-6 not-prose">
        <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-100 flex gap-4">
          <div className="p-2.5 bg-zinc-900/5 rounded-xl self-start">
            <Mail className="text-zinc-700" size={18} />
          </div>
          <div>
            <code className="text-xs font-black text-zinc-900 bg-zinc-200/50 px-2 py-0.5 rounded font-mono">
              Public API Key (Site ID)
            </code>
            <span className="text-[10px] font-black uppercase text-red-500 ml-2">Required</span>
            <p className="text-xs text-zinc-500 font-medium leading-relaxed mt-2 m-0">
              The 6-digit public key identifier used to load standard scripts.
            </p>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-100 flex gap-4">
          <div className="p-2.5 bg-zinc-900/5 rounded-xl self-start">
            <Mail className="text-zinc-700" size={18} />
          </div>
          <div>
            <code className="text-xs font-black text-zinc-900 bg-zinc-200/50 px-2 py-0.5 rounded font-mono">
              Private API Key
            </code>
            <span className="text-[10px] font-black uppercase text-red-500 ml-2">Required</span>
            <p className="text-xs text-zinc-500 font-medium leading-relaxed mt-2 m-0">
              Used to authenticate server-side pushes, allowing TrakIt to write customer profiles and e-commerce tracking milestones.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6">Step-by-Step Setup Guide</h2>
      <ol className="space-y-3 my-4 pl-6">
        <li>Log into your Klaviyo dashboard.</li>
        <li>Go to <strong>Settings</strong> → <strong>API Keys</strong>.</li>
        <li>Copy the <strong>Public API Key / Site ID</strong>.</li>
        <li>Click <strong>Create Private API Key</strong>, select permissions (Full Access or custom profile writing), and copy the key into TrakIt.</li>
      </ol>
    </article>
  );
}
