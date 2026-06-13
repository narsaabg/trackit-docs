import React from "react";
import { 
  Sparkles, 
  Info, 
  ShieldCheck, 
  Zap, 
  CheckCircle2 
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Server-Side Event Tracking Architecture on Shopify | TrakIt",
  description: "Learn how TrakIt moves conversion events off the browser and handles payload transfers on remote servers, including retry queues, cookie restoration, and deduplication.",
};

export default function ServerSideTrackingPage() {
  return (
    <article className="prose prose-zinc max-w-none prose-headings:text-zinc-900 prose-headings:font-black prose-p:text-zinc-500 prose-p:font-medium prose-strong:text-zinc-900 leading-relaxed">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
          Advanced
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-6">
          Server-Side Tracking Architecture
        </h1>
        <p className="text-xl text-zinc-500 font-medium leading-relaxed">
          Move conversion events off the browser. Deliver 100% accurate customer purchase signals directly from your Shopify server to marketing APIs using TrakIt's edge routing infrastructure.
        </p>
      </div>

      {/* Background Knowledge */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6" id="why-server-side">
        Why Client-Side Tracking Fails
      </h2>
      <p>
        Client-side scripts run inside the customer's web browser, leaving them vulnerable to network interruptions, page abandonment, and tracking blockers. Ad-blockers, browser shields, and Intelligent Tracking Prevention (ITP) protocols (such as Safari's 7-day cookie expiration limits) frequently block or delete front-end tracking tags.
      </p>
      <p>
        TrakIt bypasses browser limitations by deploying a hybrid tracking model. While front-end tags capture user browsing behavior, storefront conversion triggers (like AddToCart, BeginCheckout, and Purchase) are streamed directly from Shopify's back-end servers to marketing partner endpoints.
      </p>

      <hr className="border-zinc-100 my-12" />

      {/* Architecture */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6" id="proxy-architecture">
        The TrakIt Proxy and Edge Handlers
      </h2>
      <p>
        TrakIt establishes a secure data pipeline to relay events without exposing sensitive API keys to the browser:
      </p>

      <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 my-8 not-prose">
        <h4 className="text-zinc-900 text-sm font-black m-0 mb-3 flex items-center gap-2">
          <Zap className="text-primary-500" size={18} />
          Event Lifecycle Flow
        </h4>
        <ol className="space-y-3 text-xs text-zinc-600 font-semibold list-decimal pl-4 m-0">
          <li>
            <strong>First-Party Event Capturing:</strong> Front-end actions are proxy-routed through your store's first-party domain path (e.g., <code>yourstore.com/apps/trakit/event</code>), preventing ad-blockers from identifying and blocking the tracking request.
          </li>
          <li>
            <strong>Shopify Webhook Listening:</strong> TrakIt's server Edge engine registers real-time webhook listeners directly within Shopify's database layer.
          </li>
          <li>
            <strong>Edge Normalization:</strong> Payloads are processed on geo-distributed cloud instances. The engine resolves user identities, parses cookies, and formats parameters to match target API standards.
          </li>
          <li>
            <strong>API Transmission:</strong> Normalized events are fired securely to Conversions APIs (Meta CAPI, TikTok Events API, Pinterest CAPI, Snapchat CAPI, Google Measurement Protocol) with server-side OAuth or API tokens.
          </li>
        </ol>
      </div>

      <hr className="border-zinc-100 my-12" />

      {/* Extra Features */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-8" id="extra-features">
        TrakIt's Advanced Server-Side Features
      </h2>
      <p>
        Beyond standard server webhooks, TrakIt includes advanced features to ensure data accuracy and compliance:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose my-10">
        <div className="flex gap-4">
          <div className="mt-1 w-5 h-5 rounded-full bg-primary-500/10 flex items-center justify-center shrink-0">
            <CheckCircle2 size={14} className="text-primary-500" />
          </div>
          <div>
            <h4 className="text-zinc-900 text-sm font-black mb-1">First-Party Cookie Restoration</h4>
            <p className="text-zinc-500 font-medium text-xs leading-relaxed">
              When cookies like Meta's <code>_fbp</code> or <code>_fbc</code> are set client-side, they are capped at a 1-7 day lifetime under browser privacy laws. TrakIt writes these identifiers directly from the first-party domain HTTP headers, restoring cookie tracking lifetimes up to 2 years.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="mt-1 w-5 h-5 rounded-full bg-primary-500/10 flex items-center justify-center shrink-0">
            <CheckCircle2 size={14} className="text-primary-500" />
          </div>
          <div>
            <h4 className="text-zinc-900 text-sm font-black mb-1">Failed Event Recovery Queue</h4>
            <p className="text-zinc-500 font-medium text-xs leading-relaxed">
              If an external server (e.g., Meta Ads Manager) experiences downtime, standard pixels drop the conversion data entirely. TrakIt places failed payloads in a secure queue and automatically retries transmission over a 24-hour back-off cycle until delivery succeeds.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="mt-1 w-5 h-5 rounded-full bg-primary-500/10 flex items-center justify-center shrink-0">
            <CheckCircle2 size={14} className="text-primary-500" />
          </div>
          <div>
            <h4 className="text-zinc-900 text-sm font-black mb-1">Cryptographic Event Deduplication</h4>
            <p className="text-zinc-500 font-medium text-xs leading-relaxed">
              By firing dual browser and server streams, ad networks risk counting single conversions twice. TrakIt generates unique, cryptographically signed <code>event_id</code> tokens client-side and matches them to server webhook hashes, allowing the advertising networks to deduplicate streams with 100% accuracy.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="mt-1 w-5 h-5 rounded-full bg-primary-500/10 flex items-center justify-center shrink-0">
            <CheckCircle2 size={14} className="text-primary-500" />
          </div>
          <div>
            <h4 className="text-zinc-900 text-sm font-black mb-1">Automatic Payload Enrichment</h4>
            <p className="text-zinc-500 font-medium text-xs leading-relaxed">
              TrakIt queries customer purchase records in real-time, hashes matching parameters (email, phone number, city, and zip code) using SHA-256 criteria, and bundles them alongside edge payloads. This raises your ad platforms' **Event Match Quality (EMQ)** score to optimize bidding models.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-primary-500/5 border border-primary-500/15 rounded-2xl p-6 my-8 not-prose flex items-start gap-4">
        <ShieldCheck className="text-primary-600 shrink-0 mt-1" size={20} />
        <div>
          <h4 className="text-zinc-900 text-sm font-black m-0 mb-1">Server Edge Performance</h4>
          <p className="text-zinc-600 text-xs font-semibold m-0 leading-relaxed">
            All server transformations are processed globally at the edge (using geo-distributed Cloudflare Workers/Supabase edge architecture). This ensures webhooks are captured, normalized, and dispatched in under 100ms, maintaining maximum speed on your storefront.
          </p>
        </div>
      </div>
    </article>
  );
}
