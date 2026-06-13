import React from "react";
import { 
  Sparkles, 
  Info, 
  BarChart3, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  XCircle,
  RefreshCw, 
  Calendar, 
  Filter, 
  TrendingUp, 
  ShoppingBag, 
  DollarSign, 
  Globe, 
  ChevronRight,
  ExternalLink 
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Attribution & Order Tracking Reports | TrakIt Documentation",
  description: "Learn how to use TrakIt's Reports console. Track real-time order delivery logs across GA4, Meta, Pinterest, Snapchat, TikTok, and Bing Ads, and inspect UTM campaigns.",
};

export default function ReportsPage() {
  return (
    <article className="prose prose-zinc max-w-none prose-headings:text-zinc-900 prose-headings:font-black prose-p:text-zinc-500 prose-p:font-medium prose-strong:text-zinc-900 leading-relaxed">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
          Advanced
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-6">
          Marketing & Order Reports
        </h1>
        <p className="text-xl text-zinc-500 font-medium leading-relaxed font-sans">
          Audit conversions and channel attribution in one unified interface. TrakIt displays order delivery success rates across advertising platforms alongside first-touch campaign UTM profiles.
        </p>
      </div>

      {/* Reports Overview */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6 animate-fade-in" id="reports-overview">
        The Dual-Tab Reports Dashboard
      </h2>
      <p>
        Located directly inside your TrakIt Shopify Admin Interface, the **Reports** screen is divided into two separate functional tabs. These tabs let you toggle between auditing data transmission health and assessing marketing performance:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-10">
        <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-150 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-[10px] font-black uppercase text-emerald-600">Tab 1</span>
              <h3 className="text-lg font-black text-zinc-900 m-0">Tracked Orders</h3>
            </div>
            <p className="text-xs text-zinc-500 font-semibold leading-relaxed mb-6">
              Audits delivery paths to your marketing channels. View status logs for Google Analytics 4, Meta, Snapchat, TikTok, Pinterest, and Bing Ads, and manually resend failed API events.
            </p>
          </div>
          <a href="#tracked-orders" className="text-xs font-black text-primary-600 hover:text-primary-700 flex items-center gap-1 mt-auto">
            Audit Tracked Orders <ChevronRight size={14} />
          </a>
        </div>

        <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-150 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2.5 py-1 rounded-md bg-blue-500/10 text-[10px] font-black uppercase text-blue-600">Tab 2</span>
              <h3 className="text-lg font-black text-zinc-900 m-0">Order Attribution</h3>
            </div>
            <p className="text-xs text-zinc-500 font-semibold leading-relaxed mb-6">
              Traces order referral paths. Inspect UTM source variables, campaign metadata parameters, and clean entry landing pages to monitor conversion flows.
            </p>
          </div>
          <a href="#order-attribution" className="text-xs font-black text-primary-600 hover:text-primary-700 flex items-center gap-1 mt-auto">
            Explore Attribution Ledger <ChevronRight size={14} />
          </a>
        </div>
      </div>

      <hr className="border-zinc-100 my-12" />

      {/* Date Range Selector */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6" id="date-filters">
        Flexible Date Range Filters
      </h2>
      <p>
        Both tabs share a global **Date Range Filter** popover located in the upper-right corner of the interface. This component supports rapid timeline queries:
      </p>

      <div className="bg-zinc-50 border border-zinc-150 rounded-2xl p-6 my-8 not-prose">
        <h4 className="text-zinc-900 text-sm font-black m-0 mb-4 flex items-center gap-2">
          <Calendar className="text-primary-500" size={18} />
          Filter Mechanisms & Options
        </h4>
        <ul className="space-y-4 text-xs text-zinc-600 font-semibold list-none pl-0 m-0">
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 shrink-0"></span>
            <div>
              <strong className="text-zinc-900">Preset Filters:</strong> Access quick presets including <strong>Today</strong>, <strong>Yesterday</strong>, <strong>This week</strong>, <strong>This month</strong>, and <strong>This year</strong>.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 shrink-0"></span>
            <div>
              <strong className="text-zinc-900">Custom Date Range:</strong> Open the built-in calendar component to define custom start and end bounds. Future dates beyond today are disabled automatically to prevent query errors.
            </div>
          </li>
        </ul>
      </div>

      <hr className="border-zinc-100 my-12" />

      {/* Summary Stats Grid */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6" id="metrics-grid">
        Interactive Summary Stats Card
      </h2>
      <p>
        The summary card grid displays four key KPIs at a glance. Depending on the active tab, the metrics adapt to show relevant business and technical insights:
      </p>

      <div className="bg-zinc-50 border border-zinc-150 rounded-2xl p-6 my-8 not-prose">
        <h4 className="text-zinc-900 text-sm font-black m-0 mb-4 flex items-center gap-2">
          <Layers className="text-primary-500" size={18} />
          Summary Metrics Layout
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-zinc-200">
            <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block mb-1">Grid Column 1</span>
            <div className="text-zinc-900 font-black text-sm">Total Orders</div>
            <span className="text-[10px] text-emerald-600 font-semibold mt-1 inline-flex items-center gap-0.5"><TrendingUp size={10} /> +100%</span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-zinc-200">
            <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block mb-1">Grid Column 2</span>
            <div className="text-zinc-900 font-black text-sm">Revenue ($)</div>
            <span className="text-[10px] text-emerald-600 font-semibold mt-1 inline-flex items-center gap-0.5"><TrendingUp size={10} /> +100%</span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-zinc-200">
            <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block mb-1">Grid Column 3</span>
            <div className="text-zinc-900 font-black text-sm">Attributed Orders</div>
            <span className="text-[10px] text-zinc-500 font-medium block mt-1">Shows "Top Ad Source" in Tab 2</span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-zinc-200">
            <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block mb-1">Grid Column 4</span>
            <div className="text-zinc-900 font-black text-sm">Organic / Direct</div>
            <span className="text-[10px] text-zinc-500 font-medium block mt-1">Shows "Top AdCampaign" in Tab 2</span>
          </div>
        </div>
      </div>

      <hr className="border-zinc-100 my-12" />

      {/* Tab 1 Details - Tracked Orders */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6 font-sans" id="tracked-orders">
        1. Tracked Orders Audit Ledger
      </h2>
      <p>
        The **Tracked Orders** tab lists Shopify conversions within the query timeline. It maps event statuses across active destinations, serving as a developer-friendly diagnostic checklist:
      </p>

      {/* Ledger Table Structure */}
      <h3 className="text-lg font-black text-zinc-900 mt-8 mb-4">Table Columns</h3>
      <div className="overflow-x-auto my-6 not-prose border border-zinc-200/60 rounded-xl bg-white shadow-sm">
        <table className="w-full border-collapse text-left text-xs text-zinc-500">
          <thead>
            <tr className="border-b border-zinc-200 bg-zinc-50/50">
              <th className="px-6 py-3 font-black text-zinc-900 text-[10px] uppercase tracking-wider w-1/4">Column</th>
              <th className="px-6 py-3 font-black text-zinc-900 text-[10px] uppercase tracking-wider">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 font-medium">
            <tr>
              <td className="px-6 py-3 text-zinc-900 font-bold">Order</td>
              <td className="px-6 py-3">Displays order names (e.g. <code>#1024</code>) with an expandable Chevron control to inspect items and logs.</td>
            </tr>
            <tr>
              <td className="px-6 py-3 text-zinc-900 font-bold">Value</td>
              <td className="px-6 py-3">The total order price alongside currency symbols (e.g., <code>150.00 USD</code>).</td>
            </tr>
            <tr>
              <td className="px-6 py-3 text-zinc-900 font-bold">Order Date</td>
              <td className="px-6 py-3">Timestamps formatted as <code>DD/MM/YYYY HH:mm</code> using 24-hour UTC times.</td>
            </tr>
            <tr>
              <td className="px-6 py-3 text-zinc-900 font-bold">Status</td>
              <td className="px-6 py-3">
                Overall order status badge representing API delivery:
                <div className="flex gap-2 mt-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-200">Success</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-50 text-rose-600 border border-rose-200">Failed</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-zinc-100 text-zinc-600">In Progress</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Expandable Details Box */}
      <h3 className="text-lg font-black text-zinc-900 mt-8 mb-4">Expanded Details Panel</h3>
      <p>
        Clicking on any order row displays a drawer containing three detailed sections:
      </p>

      <div className="space-y-4 my-8 not-prose">
        <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-100 flex gap-4">
          <div className="p-2 bg-emerald-500/10 rounded-lg self-start text-emerald-600">
            <ShoppingBag size={18} />
          </div>
          <div>
            <h4 className="text-zinc-900 text-sm font-black m-0 mb-1">Order Items Grid</h4>
            <p className="text-xs text-zinc-500 font-semibold leading-relaxed mt-2 m-0">
              Lists line items (Product Name, unit price, and item quantity) to verify the data payload contents before dispatch.
            </p>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-100 flex gap-4">
          <div className="p-2 bg-emerald-500/10 rounded-lg self-start text-emerald-600">
            <ShieldCheck size={18} />
          </div>
          <div>
            <h4 className="text-zinc-900 text-sm font-black m-0 mb-1">Platform Tracking Logs</h4>
            <p className="text-xs text-zinc-500 font-semibold leading-relaxed mt-2 m-0">
              Displays status badges for each active service channel (Google Analytics 4, Meta Ads, Snapchat Ads, TikTok Ads, Pinterest Ads, and Bing Ads). A check circle icon indicates a successful API delivery, while an error indicator highlights issues.
            </p>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-100 flex gap-4">
          <div className="p-2 bg-emerald-500/10 rounded-lg self-start text-emerald-600">
            <RefreshCw size={18} />
          </div>
          <div>
            <h4 className="text-zinc-900 text-sm font-black m-0 mb-1">Failure Logs & manual retry</h4>
            <p className="text-xs text-zinc-500 font-semibold leading-relaxed mt-2 m-0">
              If an event delivery fails (e.g. timeout, invalid tokens), the interface exposes the exact raw platform API error messages. A <strong>"Resend Failed"</strong> button lets you trigger an immediate retry payload to <code>/api/retry-failed-order</code>, bypassing queues.
            </p>
          </div>
        </div>
      </div>

      <hr className="border-zinc-100 my-12" />

      {/* Tab 2 Details - Order Attribution */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6" id="order-attribution">
        2. Marketing Attribution Ledger
      </h2>
      <p>
        The **Order Attribution** tab focuses on conversion pathways. It tracks incoming web landing arguments and connects them directly with shopify checkouts:
      </p>

      {/* Attribution Columns Table */}
      <h3 className="text-lg font-black text-zinc-900 mt-8 mb-4">Table Columns</h3>
      <div className="overflow-x-auto my-6 not-prose border border-zinc-200/60 rounded-xl bg-white shadow-sm">
        <table className="w-full border-collapse text-left text-xs text-zinc-500">
          <thead>
            <tr className="border-b border-zinc-200 bg-zinc-50/50">
              <th className="px-6 py-3 font-black text-zinc-900 text-[10px] uppercase tracking-wider w-1/4">Column</th>
              <th className="px-6 py-3 font-black text-zinc-900 text-[10px] uppercase tracking-wider">Attribution Logic</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 font-medium">
            <tr>
              <td className="px-6 py-3 text-zinc-900 font-bold">Order</td>
              <td className="px-6 py-3">Matches the corresponding Shopify transaction ID or order name.</td>
            </tr>
            <tr>
              <td className="px-6 py-3 text-zinc-900 font-bold">Order Date</td>
              <td className="px-6 py-3">Timestamp corresponding to checkout completion date.</td>
            </tr>
            <tr>
              <td className="px-6 py-3 text-zinc-900 font-bold">Order Source</td>
              <td className="px-6 py-3">
                Extracted from the URL <code>utm_source</code> parameter (rendered as an info badge like <span className="px-1.5 py-0.5 rounded text-[10px] bg-blue-50 text-blue-600 border border-blue-200 font-bold">google</span>). If missing, defaults to a subdued <code>Organic / Direct</code> label.
              </td>
            </tr>
            <tr>
              <td className="px-6 py-3 text-zinc-900 font-bold">Campaign Name</td>
              <td className="px-6 py-3">
                Extracted from the <code>utm_campaign</code> URL query argument. Displays a hyphen symbol (<code>-</code>) if no campaign string is detected.
              </td>
            </tr>
            <tr>
              <td className="px-6 py-3 text-zinc-900 font-bold">Landing Page</td>
              <td className="px-6 py-3">
                The initial storefront URL visited. TrakIt sanitizes the string by stripping query parameters (splitting at <code>?</code>) to prevent long strings from overflowing rows. It is capped at a maximum width of <code>250px</code> with words wrapped.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Info Callout */}
      <div className="bg-primary-500/5 border border-primary-500/15 rounded-2xl p-6 my-8 not-prose flex items-start gap-4 shadow-sm">
        <Info className="text-primary-600 shrink-0 mt-1" size={20} />
        <div>
          <h4 className="text-zinc-900 text-sm font-black m-0 mb-1">First-Touch Landing Capture</h4>
          <p className="text-zinc-600 text-xs font-semibold m-0 leading-relaxed">
            The URL parameters are captured the moment a user first lands on the storefront and stored in local session tracking. This preserves UTM variables even if the shopper navigates to multiple pages before completing their purchase.
          </p>
        </div>
      </div>
    </article>
  );
}
