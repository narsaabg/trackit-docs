import React from "react";
import { 
  Sparkles, 
  Info, 
  Terminal, 
  ShieldCheck, 
  Activity, 
  CheckCircle2 
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real-Time Diagnostics & Event Logs | TrakIt Documentation",
  description: "Troubleshoot storefront tracking in real-time. Learn how to use TrakIt's Diagnostics & Logs panel to inspect incoming webhooks and outbound API request payloads.",
};

export default function DiagnosticsLogsPage() {
  return (
    <article className="prose prose-zinc max-w-none prose-headings:text-zinc-900 prose-headings:font-black prose-p:text-zinc-500 prose-p:font-medium prose-strong:text-zinc-900 leading-relaxed">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
          Advanced
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-6">
          Diagnostics & Logs
        </h1>
        <p className="text-xl text-zinc-500 font-medium leading-relaxed">
          Monitor storefront events in real-time. Trace incoming Shopify webhooks and inspect outbound API request payloads sent to active ad channels and marketing endpoints.
        </p>
      </div>

      {/* Real-time event auditing */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6" id="realtime-stream">
        Real-Time Event Stream Auditing
      </h2>
      <p>
        The **Diagnostics & Logs** screen displays a live stream of storefront visitor activities. As customers load pages, add products to their shopping carts, initiate checkouts, and complete purchases, TrakIt captures these actions and registers them instantly:
      </p>

      <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 my-8 not-prose">
        <h4 className="text-zinc-900 text-sm font-black m-0 mb-3 flex items-center gap-2">
          <Activity className="text-primary-500 animate-pulse" size={18} />
          Trace Live Events Flow
        </h4>
        <ul className="space-y-3 text-xs text-zinc-600 font-semibold list-none pl-0 m-0">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0"></span>
            <div>
              <strong>Incoming Stream:</strong> Captures client-side browser pixel messages and back-end Shopify webhooks in real-time, displaying timestamps, event names, and order numbers.
            </div>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 shrink-0"></span>
            <div>
              <strong>Outbound Routing:</strong> Logs precisely which configured services (Google Ads, Facebook CAPI, TikTok Ads, Klaviyo) this event was dispatched to.
            </div>
          </li>
        </ul>
      </div>

      <hr className="border-zinc-100 my-12" />

      {/* Payload Inspector details */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6" id="payload-inspector">
        Detailed Payload Inspector
      </h2>
      <p>
        Clicking on any event row in the diagnostics console opens the **Payload Inspector** sidebar, displaying the raw request details and API exchanges:
      </p>

      <div className="space-y-4 my-8 not-prose">
        <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-100 flex gap-4">
          <div className="p-2 bg-primary-500/10 rounded-lg self-start text-primary-600">
            <Terminal size={18} />
          </div>
          <div>
            <h4 className="text-zinc-900 text-sm font-black m-0 mb-1">API Endpoint & Methods</h4>
            <p className="text-xs text-zinc-500 font-medium leading-relaxed mt-2 m-0 font-mono">
              POST https://graph.facebook.com/v19.0/pixel_id/events<br />
              POST https://analytics.google.com/g/collect?v=2&tid=G-XXXXX
            </p>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-100 flex gap-4">
          <div className="p-2 bg-primary-500/10 rounded-lg self-start text-primary-600">
            <ShieldCheck size={18} />
          </div>
          <div>
            <h4 className="text-zinc-900 text-sm font-black m-0 mb-1">Request Body (JSON Payload)</h4>
            <p className="text-xs text-zinc-500 font-medium leading-relaxed mt-2 m-0">
              Inspect user parameters (SHA-256 hashed email, phone, city, IP addresses), e-commerce details (currency, item value, SKU list), and the tracking deduplication token (<code>event_id</code>) sent to partner endpoints.
            </p>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-100 flex gap-4">
          <div className="p-2 bg-primary-500/10 rounded-lg self-start text-primary-600">
            <Sparkles size={18} />
          </div>
          <div>
            <h4 className="text-zinc-900 text-sm font-black m-0 mb-1">API Response & Status Codes</h4>
            <p className="text-xs text-zinc-500 font-medium leading-relaxed mt-2 m-0">
              View response headers and codes returned by external ad platforms (such as <code>200 OK</code> for successful deliveries or <code>400 Bad Request</code> for invalid access tokens).
            </p>
          </div>
        </div>
      </div>

      <hr className="border-zinc-100 my-12" />

      {/* Troubleshooting Statuses */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6" id="troubleshooting">
        Diagnostic Status Code Troubleshooting
      </h2>
      <p>
        The table below details standard response outcomes and recommended resolutions for troubleshooting event logs:
      </p>

      <div className="overflow-x-auto my-8 not-prose border border-zinc-200/60 rounded-2xl bg-white shadow-sm">
        <table className="w-full border-collapse text-left text-sm text-zinc-500">
          <thead>
            <tr className="border-b border-zinc-200 bg-zinc-50/50">
              <th className="px-6 py-4 font-black text-zinc-900 text-xs uppercase tracking-wider w-1/4">Status Code</th>
              <th className="px-6 py-4 font-black text-zinc-900 text-xs uppercase tracking-wider w-5/12">Status Meaning</th>
              <th className="px-6 py-4 font-black text-zinc-900 text-xs uppercase tracking-wider">Recommended Resolution</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 font-medium">
            <tr>
              <td className="px-6 py-4 text-green-600 font-mono text-xs font-bold">200 OK / 204 No Content</td>
              <td className="px-6 py-4 text-xs">Event received successfully by the ad platform APIs.</td>
              <td className="px-6 py-4 text-xs text-zinc-400">None. Data attribution is active.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-red-500 font-mono text-xs font-bold">400 Bad Request</td>
              <td className="px-6 py-4 text-xs">Missing parameters or invalid payload formatting.</td>
              <td className="px-6 py-4 text-xs">Check configuration details and active event checkboxes.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-red-500 font-mono text-xs font-bold">401 Unauthorized / 403 Forbidden</td>
              <td className="px-6 py-4 text-xs">Invalid API Access Token or outdated pixel credential keys.</td>
              <td className="px-6 py-4 text-xs">Re-generate access tokens and update the main Configuration card.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-amber-500 font-mono text-xs font-bold">429 Too Many Requests</td>
              <td className="px-6 py-4 text-xs">Target API rate limits exceeded.</td>
              <td className="px-6 py-4 text-xs">None. TrakIt's failed event queue will automatically retry delivery.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-primary-500/5 border border-primary-500/15 rounded-2xl p-6 my-8 not-prose flex items-start gap-4">
        <Info className="text-primary-600 shrink-0 mt-1" size={20} />
        <div>
          <h4 className="text-zinc-900 text-sm font-black m-0 mb-1">Payload Retention Notice</h4>
          <p className="text-zinc-600 text-xs font-semibold m-0 leading-relaxed">
            All detailed request and response payloads in the Diagnostics logs are retained for **30 days**. This logs archive window gives you enough time to verify new pixel keys and test storefront configurations.
          </p>
        </div>
      </div>
    </article>
  );
}
