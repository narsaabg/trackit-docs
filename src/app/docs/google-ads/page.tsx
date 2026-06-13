import React from "react";
import { 
  ArrowRight, 
  Info, 
  ShieldCheck, 
  Sparkles
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ads Shopify Setup: Manual & Automatic Tracking | TrakIt",
  description: "Comprehensive guide to configuring Google Ads in TrakIt. Learn how to set up GTM containers manually or authorize OAuth for automatic conversion actions.",
};

export default function GoogleAdsPage() {
  return (
    <article className="prose prose-zinc max-w-none prose-headings:text-zinc-900 prose-headings:font-black prose-p:text-zinc-500 prose-p:font-medium prose-strong:text-zinc-900 leading-relaxed">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
          Configuration
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-6">
          Google Ads Integration
        </h1>
        <p className="text-xl text-zinc-500 font-medium leading-relaxed">
          TrakIt streams storefront events from your Shopify store directly to Google Ads. Bypass ad-blockers and cookie restrictions using our hybrid tracking setup.
        </p>
      </div>



      {/* Events Offered */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6" id="supported-events">
        Offered Tracking Events
      </h2>
      <p>
        TrakIt standardizes Google Ads tracking around four core Shopify events:
      </p>
      
      <div className="overflow-x-auto my-8 not-prose border border-zinc-200/60 rounded-2xl bg-white shadow-sm">
        <table className="w-full border-collapse text-left text-sm text-zinc-500">
          <thead>
            <tr className="border-b border-zinc-200 bg-zinc-50/50">
              <th className="px-6 py-4 font-black text-zinc-900 text-xs uppercase tracking-wider">Event Name</th>
              <th className="px-6 py-4 font-black text-zinc-900 text-xs uppercase tracking-wider">Trigger Description</th>
              <th className="px-6 py-4 font-black text-zinc-900 text-xs uppercase tracking-wider">Tracking Strategy</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 font-medium">
            <tr>
              <td className="px-6 py-4 text-zinc-950 font-bold">Page View</td>
              <td className="px-6 py-4">Fires when any storefront page is loaded by a visitor.</td>
              <td className="px-6 py-4 text-xs">Client-Side Only</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-zinc-950 font-bold">Add To Cart</td>
              <td className="px-6 py-4">Fires when a customer adds a product to their shopping cart.</td>
              <td className="px-6 py-4 text-xs text-primary-600 font-bold">Browser + Server (Dual Tracking)</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-zinc-950 font-bold">Begin Checkout</td>
              <td className="px-6 py-4">Fires when the customer clicks to initiate the checkout flow.</td>
              <td className="px-6 py-4 text-xs text-primary-600 font-bold">Browser + Server (Dual Tracking)</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-zinc-950 font-bold">Purchase</td>
              <td className="px-6 py-4">Fires on order completion / payment confirmation page.</td>
              <td className="px-6 py-4 text-xs text-primary-600 font-bold">Browser + Server (Dual Tracking)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="border-zinc-100 my-12" />

      {/* Setup Options Grid */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6" id="setup-methods">
        Choose Your Integration Method
      </h2>
      <p>
        Select your preferred integration method from the TrakIt dashboard tab bar depending on your permissions preference:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-10">
        <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2.5 py-1 rounded-md bg-zinc-200 text-[10px] font-black uppercase text-zinc-600">Option A</span>
              <h3 className="text-lg font-black text-zinc-900 m-0">Manual Setup</h3>
            </div>
            <p className="text-xs text-zinc-500 font-medium leading-relaxed mb-6">
              Manually copy Conversion ID and Labels from Google Ads. Recommended if you do not want to connect Google account OAuth. Requires manual download and upload of the GTM container file.
            </p>
          </div>
          <a href="#manual-setup" className="text-xs font-black text-primary-500 hover:text-primary-600 flex items-center gap-1 mt-auto">
            View Manual Setup Steps <ArrowRight size={14} />
          </a>
        </div>

        <div className="p-6 rounded-2xl bg-zinc-50 border border-primary-200 flex flex-col justify-between shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-primary-500 text-white px-3 py-1 rounded-bl-xl text-[8px] font-black uppercase tracking-wider">
            Recommended
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2.5 py-1 rounded-md bg-primary-500/10 text-[10px] font-black uppercase text-primary-600">Option B</span>
              <h3 className="text-lg font-black text-zinc-900 m-0">Automatic Setup</h3>
            </div>
            <p className="text-xs text-zinc-500 font-medium leading-relaxed mb-6">
              Grant secure OAuth access. TrakIt will query your account, register dual browser/server conversion actions inside Google Ads, and sync GTM triggers automatically via API — no files to download.
            </p>
          </div>
          <a href="#automatic-setup" className="text-xs font-black text-primary-500 hover:text-primary-600 flex items-center gap-1 mt-auto">
            View Automatic Setup Steps <ArrowRight size={14} />
          </a>
        </div>
      </div>

      <hr className="border-zinc-100 my-12" />

      {/* Manual Setup Details */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6" id="manual-setup">
        1. Manual Setup Walkthrough
      </h2>
      <p>
        Follow this section to configure Google Ads step-by-step without providing OAuth access.
      </p>

      <h3 className="text-lg font-bold text-zinc-900 mt-6 mb-4">Step A: Retrieve Your Conversion ID</h3>
      <ol className="space-y-2 pl-6 text-zinc-500">
        <li>Log into your <strong>Google Ads Account</strong>.</li>
        <li>In the top menu, go to <strong>Tools and Settings</strong> &rarr; <strong>Measurement</strong> &rarr; <strong>Conversions</strong>.</li>
        <li>Click <strong>+ New conversion action</strong> and choose <strong>Website</strong>.</li>
        <li>Enter your Shopify store URL, click <strong>Scan</strong>, and select manual setup.</li>
        <li>Under tag setup options, select the <strong>Use Google Tag Manager</strong> tab.</li>
        <li>Copy the numeric <strong>Conversion ID</strong> (e.g., <code>17691609925</code>) and paste it into TrakIt's <em>Conversion ID</em> input field in the Configuration section.</li>
      </ol>

      <div className="bg-primary-500/5 border border-primary-500/15 rounded-2xl p-6 my-8 not-prose flex items-start gap-4">
        <Info className="text-primary-600 shrink-0 mt-1" size={20} />
        <div>
          <h4 className="text-zinc-900 text-sm font-black m-0 mb-1">Crucial Interface Note</h4>
          <p className="text-zinc-600 text-xs font-medium m-0 leading-relaxed">
            In the Manual Setup pathway, the **Save** button under the *Event Selection* panel is disabled initially. You must enter your **Conversion ID** first, click **Save** in the Configuration panel, and once saved, the Event Selection fields and its Save button will become editable.
          </p>
        </div>
      </div>

      <h3 className="text-lg font-bold text-zinc-900 mt-6 mb-4">Step B: Retrieve & Save Conversion Labels</h3>
      <p>
        To track specific events, you must create matching website conversion actions inside Google Ads and copy their unique alphanumeric labels:
      </p>
      <ol className="space-y-2 pl-6 text-zinc-500">
        <li>Create conversion actions inside Google Ads for the events you want to track:
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li><strong>Page View</strong> (Category: Page view)</li>
            <li><strong>Add To Cart</strong> (Category: Add to cart)</li>
            <li><strong>Begin Checkout</strong> (Category: Begin checkout)</li>
            <li><strong>Purchase</strong> (Category: Purchase)</li>
          </ul>
        </li>
        <li>For each action, select <strong>Use Google Tag Manager</strong> under Tag Setup.</li>
        <li>Copy the alphanumeric <strong>Conversion Label</strong> string (e.g. <code>HJPLCOWhrbocEl2sz-VD</code>) for each action.</li>
        <li>Paste the labels into the corresponding event selection input fields in TrakIt.</li>
        <li>Click <strong>Save</strong> at the bottom of the Event Selection panel.</li>
      </ol>

      <h3 className="text-lg font-bold text-zinc-900 mt-6 mb-4">Step C: Download and Import the GTM Container</h3>
      <p>
        Because TrakIt cannot write directly to your GTM workspace without API OAuth access in manual mode, you must import the tag configuration manually:
      </p>
      <ol className="space-y-2 pl-6 text-zinc-500">
        <li>In TrakIt's right-hand panel, click the <strong>Download Container</strong> button. This downloads a custom <code>.json</code> file.</li>
        <li>Open your <strong>Google Tag Manager</strong> account dashboard.</li>
        <li>Navigate to the <strong>Admin</strong> tab &rarr; <strong>Import Container</strong>.</li>
        <li>Choose the downloaded JSON file.</li>
        <li>Select your active workspace.</li>
        <li>Choose <strong>Merge</strong> (with 'Overwrite conflicting tags' or 'Rename' selected) as the import option.</li>
        <li>Click <strong>Confirm</strong>. Review and publish the workspace changes to make tracking live.</li>
      </ol>

      <div className="bg-primary-500/5 border border-primary-500/15 rounded-2xl p-6 my-8 not-prose flex items-start gap-4">
        <Info className="text-primary-600 shrink-0 mt-1" size={20} />
        <div>
          <h4 className="text-zinc-900 text-sm font-black m-0 mb-1">Configuration Changes</h4>
          <p className="text-zinc-600 text-xs font-medium m-0 leading-relaxed">
            If you ever change your Conversion ID or any event labels in TrakIt, you **must re-download and re-import** the container JSON file into GTM to sync the updates.
          </p>
        </div>
      </div>

      <hr className="border-zinc-100 my-12" />

      {/* Automatic Setup Details */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6" id="automatic-setup">
        2. Automatic Setup (OAuth) Walkthrough
      </h2>
      <p>
        Automatic Setup is the fastest and most reliable way to connect Google Ads to your store. TrakIt handles the complex API configurations on your behalf:
      </p>
      <ol className="space-y-3 my-6 pl-6">
        <li>Under the <strong>Automatic Setup</strong> tab in the Configuration panel, click <strong>Connect with Google</strong>.</li>
        <li>Log in and grant TrakIt OAuth access to manage your Google Ads account and Google Tag Manager containers.</li>
        <li>Once redirected back, choose your target <strong>Google Ads Account</strong> from the dropdown menu.</li>
        <li>Click <strong>Create & Setup Google Ads</strong>.</li>
        <li>
          TrakIt executes the setup in the background:
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>Calls Google Ads API to query the account and create conversion actions automatically.</li>
            <li>Generates and stores conversion labels in TrakIt automatically.</li>
            <li>Updates your Google Tag Manager container tags and variables directly via GTM API — no downloads required!</li>
          </ul>
        </li>
      </ol>

      <hr className="border-zinc-100 my-12" />

      {/* Dual Tracking Advantage */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6 flex items-center gap-2" id="dual-tracking">
        <Sparkles className="text-primary-500 shrink-0" size={24} />
        Performance Dual-Tracking Strategy
      </h2>
      <p>
        In <strong>Automatic Setup</strong> mode, TrakIt implements a specialized tracking architecture to audit browser-side block rates and verify server-side lift:
      </p>

      <div className="bg-primary-500/5 border border-primary-500/15 rounded-2xl p-6 my-8 not-prose flex items-start gap-4">
        <ShieldCheck className="text-primary-600 shrink-0 mt-1" size={22} />
        <div>
          <h4 className="text-zinc-900 text-base font-black m-0 mb-1">Browser vs Server Attribution Auditing</h4>
          <p className="text-zinc-600 text-xs font-semibold mt-2 mb-4 leading-relaxed">
            For each of the three e-commerce events (<strong>Add To Cart</strong>, <strong>Begin Checkout</strong>, and <strong>Purchase</strong>), TrakIt automatically creates and links **two conversion actions** inside your Google Ads account:
          </p>
          <ul className="space-y-2 text-xs text-zinc-600 font-medium">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
              A <strong>browser-side conversion action</strong> (e.g. <code>Add To Cart - TrakIt - browser side</code>)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
              A <strong>server-side conversion action</strong> (e.g. <code>Add To Cart - TrakIt - server side</code>)
            </li>
          </ul>
          <p className="text-zinc-600 text-xs font-medium mt-4 leading-relaxed">
            Because browser-side triggers are frequently blocked by customer adblockers, browser-level privacy controls, and cookie deprecation rules, they lose substantial attribution data. 
          </p>
          <p className="text-zinc-600 text-xs font-medium mt-2 leading-relaxed">
            By running both side-by-side, you can check conversion counts inside your Google Ads Dashboard conversion tab to compare attribution metrics. This allows you to verify exactly how much server-side conversion tracking outperforms standard browser-side tracking and how many lost sales TrakIt is active in recovering.
          </p>
        </div>
      </div>

      <hr className="border-zinc-100 my-12" />

      {/* Disconnecting & Settings */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6" id="settings-disconnect">
        Settings & Disconnection
      </h2>
      <p>
        Once Google Ads is configured, a third panel titled **Disconnect Google Ads** becomes visible at the bottom of the left column.
      </p>
      <p>
        If you need to change your setup mode, replace your Google accounts, or remove the integration:
      </p>
      <ol className="space-y-2 pl-6 text-zinc-500">
        <li>Click <strong>Disconnect</strong>.</li>
        <li>TrakIt will trigger a secure deletion process:
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>For Automatic Setup: TrakIt uses the GTM API to automatically delete all tags, triggers, and variables injected during setup to clean your workspace.</li>
            <li>For Manual Setup: Clears local TrakIt configurations. (You must manually delete the imported tags from your GTM dashboard).</li>
          </ul>
        </li>
      </ol>
    </article>
  );
}
