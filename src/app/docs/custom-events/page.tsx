import React from "react";
import { 
  Sparkles, 
  Info, 
  ShieldCheck, 
  Code, 
  CheckCircle2 
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Event Tracking & Real-Time Payload Logs | TrakIt",
  description: "Track storefront actions like logins, signups, and subscriptions in TrakIt, and troubleshoot using our real-time diagnostic event payload logger.",
};

export default function CustomEventsPage() {
  return (
    <article className="prose prose-zinc max-w-none prose-headings:text-zinc-900 prose-headings:font-black prose-p:text-zinc-500 prose-p:font-medium prose-strong:text-zinc-900 leading-relaxed">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
          Advanced
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-6">
          Custom Events & Logs
        </h1>
        <p className="text-xl text-zinc-500 font-medium leading-relaxed">
          Monitor your storefront events. Troubleshoot tracking triggers in real-time, capture customer account actions, and trace UTM parameters using TrakIt's built-in log debugger.
        </p>
      </div>

      {/* Supported Secondary Client Events */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6" id="supported-events">
        Captured Customer Actions
      </h2>
      <p>
        While standard checkouts track purchase cycles, TrakIt automatically intercepts and delivers secondary customer interaction triggers to feed email campaigns and cohort segments:
      </p>

      <div className="overflow-x-auto my-8 not-prose border border-zinc-200/60 rounded-2xl bg-white shadow-sm">
        <table className="w-full border-collapse text-left text-sm text-zinc-500">
          <thead>
            <tr className="border-b border-zinc-200 bg-zinc-50/50">
              <th className="px-6 py-4 font-black text-zinc-900 text-xs uppercase tracking-wider w-1/4">Event Name</th>
              <th className="px-6 py-4 font-black text-zinc-900 text-xs uppercase tracking-wider w-7/12">Trigger Action</th>
              <th className="px-6 py-4 font-black text-zinc-900 text-xs uppercase tracking-wider text-center">Data Captured</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 font-medium">
            <tr>
              <td className="px-6 py-4 text-zinc-950 font-bold">login</td>
              <td className="px-6 py-4 text-xs">Customer logs into their storefront Shopify account.</td>
              <td className="px-6 py-4 text-center text-xs font-mono text-primary-600 bg-primary-500/5 px-2 py-1 rounded">Customer ID / Email</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-zinc-950 font-bold">signup</td>
              <td className="px-6 py-4 text-xs">Customer registers a new account profile.</td>
              <td className="px-6 py-4 text-center text-xs font-mono text-primary-600 bg-primary-500/5 px-2 py-1 rounded">Hashed Profile Fields</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-zinc-950 font-bold">email_subscribe</td>
              <td className="px-6 py-4 text-xs">Customer joins a newsletter mailing list or subscription box.</td>
              <td className="px-6 py-4 text-center text-xs font-mono text-primary-600 bg-primary-500/5 px-2 py-1 rounded">Email Address / Scope</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="border-zinc-100 my-12" />

      {/* Extra Features */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-8" id="extra-features">
        TrakIt's Event Debugging & custom Actions Features
      </h2>
      <p>
        TrakIt includes specialized logging tools to audit marketing spend and configure custom storefront triggers:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose my-10">
        <div className="flex gap-4">
          <div className="mt-1 w-5 h-5 rounded-full bg-primary-500/10 flex items-center justify-center shrink-0">
            <CheckCircle2 size={14} className="text-primary-500" />
          </div>
          <div>
            <h4 className="text-zinc-900 text-sm font-black mb-1">Live Diagnostic Payload Debugger</h4>
            <p className="text-zinc-500 font-medium text-xs leading-relaxed">
              TrakIt's dashboard includes a live debugger displaying incoming webhook records. View raw request headers, outbound server payloads, external API status codes (e.g. <code>200 OK</code> or <code>400 Bad Request</code>), and response bodies to diagnose setups immediately.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="mt-1 w-5 h-5 rounded-full bg-primary-500/10 flex items-center justify-center shrink-0">
            <CheckCircle2 size={14} className="text-primary-500" />
          </div>
          <div>
            <h4 className="text-zinc-900 text-sm font-black mb-1">Real-Time UTM Attribution Parsing</h4>
            <p className="text-zinc-500 font-medium text-xs leading-relaxed">
              When a checkout or action triggers, TrakIt parses URL parameters to isolate the original traffic referrer. It joins <code>utm_source</code>, <code>utm_medium</code>, and <code>utm_campaign</code> directly to backend order logs, ensuring clean multi-touch attribution reporting.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="mt-1 w-5 h-5 rounded-full bg-primary-500/10 flex items-center justify-center shrink-0">
            <CheckCircle2 size={14} className="text-primary-500" />
          </div>
          <div>
            <h4 className="text-zinc-900 text-sm font-black mb-1">Custom JavaScript Event Handlers</h4>
            <p className="text-zinc-500 font-medium text-xs leading-relaxed">
              Need to track video views, slider clicks, or custom banner taps? TrakIt lets you write custom storefront scripts that catch specific CSS selectors and push those interaction metrics straight into your GTM container as custom data layer triggers.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="mt-1 w-5 h-5 rounded-full bg-primary-500/10 flex items-center justify-center shrink-0">
            <CheckCircle2 size={14} className="text-primary-500" />
          </div>
          <div>
            <h4 className="text-zinc-900 text-sm font-black mb-1">First-Party Payload Hashing</h4>
            <p className="text-zinc-500 font-medium text-xs leading-relaxed">
              To remain compliant with customer privacy guidelines, TrakIt's server handles PII data scrubbing. Hashed email criteria, phone mappings, and customer metadata are automatically masked on-the-fly inside the edge handlers prior to transmission.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-primary-500/5 border border-primary-500/15 rounded-2xl p-6 my-8 not-prose flex items-start gap-4">
        <Info className="text-primary-600 shrink-0 mt-1" size={20} />
        <div>
          <h4 className="text-zinc-900 text-sm font-black m-0 mb-1">Payload Retention Policy</h4>
          <p className="text-zinc-600 text-xs font-semibold m-0 leading-relaxed">
            By default, diagnostic event payloads and logs are retained for **30 days**. This provides ample time to verify new campaign tags and test storefront variables before logs are archived.
          </p>
        </div>
      </div>
    </article>
  );
}
