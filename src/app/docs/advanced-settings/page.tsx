import React from "react";
import { 
  Sparkles, 
  Info, 
  ShieldCheck, 
  Terminal, 
  Settings, 
  RefreshCw 
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advanced Settings: Consent Mode, GTM-less, & Refresh Pixel | TrakIt",
  description: "Configure advanced settings in TrakIt. Learn how to manage Consent Mode, enable browser console logs, toggle GTM-less tracking, and refresh storefront pixels.",
};

export default function AdvancedSettingsPage() {
  return (
    <article className="prose prose-zinc max-w-none prose-headings:text-zinc-900 prose-headings:font-black prose-p:text-zinc-500 prose-p:font-medium prose-strong:text-zinc-900 leading-relaxed">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
          Advanced
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-6">
          Advanced Settings
        </h1>
        <p className="text-xl text-zinc-500 font-medium leading-relaxed">
          Configure advanced tracking behaviors. Customize GTM-less deployments, toggle browser testing console logs, map consent settings, and refresh storefront pixel caches.
        </p>
      </div>

      {/* Advanced Settings Options */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6" id="settings-overview">
        TrakIt Advanced Settings Panel
      </h2>
      <p>
        The **Advanced Settings** dashboard provides low-level toggles to customize how TrakIt loads scripts, logs event data, and synchronizes settings with your Shopify store:
      </p>

      <div className="space-y-6 my-8 not-prose">
        <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-150">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-1 rounded-md bg-zinc-200 text-[10px] font-black uppercase text-zinc-600">Setting 1</span>
            <code className="text-xs font-black text-zinc-900 bg-zinc-200/50 px-2 py-0.5 rounded font-mono">
              Consent Mode
            </code>
          </div>
          <p className="text-xs text-zinc-500 font-medium leading-relaxed m-0">
            Manage how user consent is handled for event tracking. When checked, TrakIt automatically interfaces with Shopify's Customer Privacy API and maps consent flags (such as <code>ad_storage</code>, <code>analytics_storage</code>, etc.) to Google Consent Mode v2, suppressing downstream server payloads when visitors decline consent.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-150">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-1 rounded-md bg-zinc-200 text-[10px] font-black uppercase text-zinc-600">Setting 2</span>
            <code className="text-xs font-black text-zinc-900 bg-zinc-200/50 px-2 py-0.5 rounded font-mono">
              Enable Console Logging
            </code>
          </div>
          <p className="text-xs text-zinc-500 font-medium leading-relaxed m-0">
            When enabled, <code>TrakItDatalayer</code> events will be logged directly to the browser console. This allows merchants and developers to verify that storefront triggers (like add-to-carts, product views, and checkouts) are firing locally without checking external server logs.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-150">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-1 rounded-md bg-zinc-200 text-[10px] font-black uppercase text-zinc-600">Setting 3</span>
            <code className="text-xs font-black text-zinc-900 bg-zinc-200/50 px-2 py-0.5 rounded font-mono">
              GTM-less Tracking
            </code>
          </div>
          <p className="text-xs text-zinc-500 font-medium leading-relaxed m-0">
            Enable direct tracking without requiring a Google Tag Manager container. When checked, storefront actions bypass GTM entirely and stream natively from Shopify's custom pixel handler to active ad accounts, improving storefront page-load performance and load speeds.
          </p>
        </div>
      </div>

      <hr className="border-zinc-100 my-12" />

      {/* Refresh Pixel Section */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6 flex items-center gap-2" id="refresh-pixel">
        <RefreshCw className="text-primary-500 shrink-0" size={24} />
        Refreshing Storefront Pixels
      </h2>
      <p>
        The **Refresh Pixel** card at the bottom of the Advanced Settings page is a utility tool to sync storefront configurations:
      </p>
      
      <div className="bg-primary-500/5 border border-primary-500/15 rounded-2xl p-6 my-8 not-prose flex items-start gap-4">
        <Terminal className="text-primary-600 shrink-0 mt-1" size={20} />
        <div>
          <h4 className="text-zinc-900 text-sm font-black m-0 mb-1">Forces Web Pixel Database Sync</h4>
          <p className="text-zinc-600 text-xs font-semibold m-0 leading-relaxed mb-3">
            Clicking <strong>Refresh Pixel</strong> forces the Shopify custom web pixel sandbox to discard cached settings and sync all current configurations directly from the TrakIt app database.
          </p>
          <p className="text-zinc-600 text-xs font-medium m-0 leading-relaxed">
            Use this utility if you have recently changed active channels, altered event selection rules, or modified ad pixel keys but your storefront tracking actions appear outdated or are not transmitting.
          </p>
        </div>
      </div>

      <div className="bg-primary-500/5 border border-primary-500/15 rounded-2xl p-6 my-8 not-prose flex items-start gap-4">
        <Info className="text-primary-600 shrink-0 mt-1" size={20} />
        <div>
          <h4 className="text-zinc-900 text-sm font-black m-0 mb-1">Saving Changes</h4>
          <p className="text-zinc-600 text-xs font-medium m-0 leading-relaxed">
            After toggle boxes are checked or unchecked in the Advanced Settings panel, you must click the <strong>Save Changes</strong> button to write the updates to your tracking container configurations.
          </p>
        </div>
      </div>
    </article>
  );
}
