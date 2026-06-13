import React from "react";
import { 
  ArrowRight, 
  Info, 
  ShieldCheck, 
  Sparkles,
  Tag
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Microsoft Bing Ads UET Tag Setup on Shopify | TrakIt",
  description: "Comprehensive guide to configuring Microsoft Advertising Bing Ads in TrakIt. Find your UET Tag ID, set up web tracking events, and import GTM containers.",
};

export default function BingAdsPage() {
  return (
    <article className="prose prose-zinc max-w-none prose-headings:text-zinc-900 prose-headings:font-black prose-p:text-zinc-500 prose-p:font-medium prose-strong:text-zinc-900 leading-relaxed">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
          Configuration
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-6">
          Bing Ads & UET Tag Setup
        </h1>
        <p className="text-xl text-zinc-500 font-medium leading-relaxed">
          Capture high-intent shopping traffic from the Microsoft Search Network. TrakIt implements Microsoft Advertising Universal Event Tracking (UET) to report storefront interactions and purchase events.
        </p>
      </div>

      {/* Background Knowledge */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6" id="background">
        Universal Event Tracking (UET) & Campaign Optimization
      </h2>
      <p>
        Microsoft Advertising relies on a Universal Event Tracking (UET) tag to record visitor paths, catalog views, and purchase conversions. By deploying the UET tag, Microsoft can attribute storefront actions back to your ad campaigns on Bing, Yahoo, and AOL.
      </p>
      <p>
        TrakIt standardizes this integration by mapping core Shopify checkout milestones and storefront behaviors to your UET Tag ID. This data enables Microsoft's auto-bidding algorithms (such as Maximize Conversions or Target CPA) to optimize performance, while building accurate remarketing lists of high-intent search shoppers.
      </p>

      <hr className="border-zinc-100 my-12" />

      {/* Step-by-Step Setup Guide */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6" id="setup-steps">
        Step-by-Step Configuration Guide
      </h2>

      <h3 className="text-lg font-bold text-zinc-900 mt-6 mb-4">Step A: Retrieve Your UET Tag ID</h3>
      <p>
        To get started, you must extract your unique tag identifier from the Microsoft Advertising dashboard:
      </p>
      <ol className="space-y-2 pl-6 text-zinc-500">
        <li>Log into your <strong>Microsoft Advertising</strong> account.</li>
        <li>Navigate to the top menu and select <strong>Tools</strong> &rarr; click <strong>UET tag</strong> (or go to <strong>Conversion Tracking</strong> and click <strong>UET tags</strong>).</li>
        <li>Locate the tag linked to your storefront and copy the numeric <strong>UET Tag ID</strong> (e.g. <code>12345678</code>).</li>
        <li>Paste this ID into the <em>UET Tag ID</em> input field in TrakIt's Configuration card.</li>
        <li>Click <strong>Save</strong>.</li>
      </ol>

      <div className="bg-primary-500/5 border border-primary-500/15 rounded-2xl p-6 my-8 not-prose flex items-start gap-4">
        <Info className="text-primary-600 shrink-0 mt-1" size={20} />
        <div>
          <h4 className="text-zinc-900 text-sm font-black m-0 mb-1">Configuration Notes & Save Rules</h4>
          <p className="text-zinc-600 text-xs font-semibold m-0 leading-relaxed mb-2">
            • Save Button Unlock: In TrakIt, the **Save** button under the *Event Selection* card is disabled initially. It will unlock for editing once you have successfully entered and saved your credentials under the main *Configuration* card.
          </p>
          <p className="text-zinc-600 text-xs font-semibold m-0 leading-relaxed">
            • UET ID Change Warning: The blue warning box at the bottom of the Configuration card in TrakIt states: <em>"Note: If you change UET Tag ID, you'll need to re-download and import the container."</em> Changing this ID requires updating GTM to sync the tags.
          </p>
        </div>
      </div>

      <h3 className="text-lg font-bold text-zinc-900 mt-6 mb-4">Step B: Google Tag Manager (GTM) Container Sync</h3>
      <p>
        To load the Bing Ads Universal Event Tracking tags onto your storefront, the UET configuration must be synced with your Google Tag Manager (GTM) workspace:
      </p>
      
      <div className="bg-primary-500/5 border border-primary-500/15 rounded-2xl p-6 my-6 not-prose flex items-start gap-4">
        <Sparkles className="text-primary-600 shrink-0 mt-1" size={20} />
        <div>
          <h4 className="text-zinc-900 text-sm font-black m-0 mb-1">Automatic GTM Import (Recommended)</h4>
          <p className="text-zinc-600 text-xs font-semibold m-0 leading-relaxed">
            If your <strong>Google Account</strong> is connected to TrakIt, all Bing Ads events and UET tag configurations will be <strong>imported automatically into your GTM container</strong> via GTM API. There is no need to download or upload container files manually.
          </p>
        </div>
      </div>

      <p>
        If your Google account is not connected, you must download the container JSON file from TrakIt's right-hand sidebar and import it manually:
      </p>

      <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-150 my-6 not-prose">
        <h4 className="text-zinc-900 text-sm font-black mt-0 mb-3">How to import manually into GTM:</h4>
        <ol className="space-y-2 pl-4 text-xs text-zinc-600 font-semibold list-decimal">
          <li>Open your <strong>Google Tag Manager</strong> workspace.</li>
          <li>Go to <strong>Admin</strong> &rarr; <strong>Import Container</strong>.</li>
          <li>Upload the downloaded container file.</li>
          <li>Choose <strong>Merge</strong>.</li>
          <li>Click <strong>Confirm</strong> to integrate the tag configurations.</li>
        </ol>
        <p className="text-[10px] text-zinc-400 font-semibold mt-4 mb-0">
          * Note: Since we automatically import the tags into the container when the Google account is connected, there is no need to manually import it.
        </p>
      </div>

      <hr className="border-zinc-100 my-12" />

      {/* Event Selection */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6" id="events">
        Offered Events Mapping
      </h2>
      <p>
        Choose which Shopify pixel events you want to track in Bing Ads via Web. Check the boxes to activate Web tracking for each event:
      </p>

      <div className="overflow-x-auto my-8 not-prose border border-zinc-200/60 rounded-2xl bg-white shadow-sm">
        <table className="w-full border-collapse text-left text-sm text-zinc-500">
          <thead>
            <tr className="border-b border-zinc-200 bg-zinc-50/50">
              <th className="px-6 py-4 font-black text-zinc-900 text-xs uppercase tracking-wider w-1/3">Event Name</th>
              <th className="px-6 py-4 font-black text-zinc-900 text-xs uppercase tracking-wider w-7/12">Trigger Description</th>
              <th className="px-6 py-4 font-black text-zinc-900 text-xs uppercase tracking-wider text-center">Web (GTM Required)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 font-medium">
            <tr>
              <td className="px-6 py-4 text-zinc-950 font-bold">Page View</td>
              <td className="px-6 py-4 text-xs">Customer loads any page on your storefront.</td>
              <td className="px-6 py-4 text-center text-primary-600">✔</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-zinc-950 font-bold">View Item List</td>
              <td className="px-6 py-4 text-xs">Customer opens a collection or category page.</td>
              <td className="px-6 py-4 text-center text-primary-600">✔</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-zinc-950 font-bold">View Item</td>
              <td className="px-6 py-4 text-xs">Customer opens a product details page.</td>
              <td className="px-6 py-4 text-center text-primary-600">✔</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-zinc-950 font-bold">Search</td>
              <td className="px-6 py-4 text-xs">Customer executes a store search query.</td>
              <td className="px-6 py-4 text-center text-primary-600">✔</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-zinc-950 font-bold">AddToCart</td>
              <td className="px-6 py-4 text-xs">Customer adds a product to their shopping cart.</td>
              <td className="px-6 py-4 text-center text-primary-600">✔</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-zinc-950 font-bold">Remove From Cart</td>
              <td className="px-6 py-4 text-xs">Customer removes an item from their shopping cart.</td>
              <td className="px-6 py-4 text-center text-primary-600">✔</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-zinc-950 font-bold">Begin Checkout</td>
              <td className="px-6 py-4 text-xs">Customer clicks to begin the checkout flow.</td>
              <td className="px-6 py-4 text-center text-primary-600">✔</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-zinc-950 font-bold">Purchase</td>
              <td className="px-6 py-4 text-xs">Customer completes checkout and finishes payment.</td>
              <td className="px-6 py-4 text-center text-primary-600">✔</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-primary-500/5 border border-primary-500/15 rounded-2xl p-6 my-8 not-prose flex items-start gap-4">
        <Info className="text-primary-600 shrink-0 mt-1" size={20} />
        <div>
          <h4 className="text-zinc-900 text-sm font-black m-0 mb-1">Important Event Settings Notes</h4>
          <p className="text-zinc-600 text-xs font-semibold m-0 leading-relaxed mb-2">
            • Web-Centric Tagging: In Microsoft Advertising integration, tracking is purely browser-centric via the GTM-injected UET Tag script. Checkboxes under Event Selection determine which triggers are active inside GTM.
          </p>
          <p className="text-zinc-600 text-xs font-semibold m-0 leading-relaxed">
            • Web Events Container Sync: The warning note under Event Selection states: <em>"Note: If you change web events, you'll need to re-download and import the container."</em> If you alter these checkboxes, you must re-download the JSON configuration and re-import it into your GTM workspace.
          </p>
        </div>
      </div>

      <hr className="border-zinc-100 my-12" />

      {/* About Section */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6" id="about-integration">
        About the Bing Ads Integration
      </h2>
      <p>
        TrakIt's Bing Ads integration allows you to send ecommerce events from your Shopify store directly to Microsoft Advertising via UET Tag, helping optimize your ad campaigns and improve tracking accuracy.
      </p>
      
      <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 my-8 not-prose">
        <h4 className="text-zinc-900 text-sm font-black m-0 mb-2 flex items-center gap-2">
          <Sparkles className="text-primary-500" size={18} />
          Microsoft UET Setup Requirements
        </h4>
        <ol className="space-y-2 text-xs text-zinc-600 font-semibold list-decimal pl-4 mt-3">
          <li>Create a Microsoft Advertising account and generate a new UET Tag.</li>
          <li>Find your unique <strong>UET Tag ID</strong> inside your account details.</li>
          <li>Enter the Tag ID in the Configuration panel above and save it.</li>
        </ol>
        <div className="mt-4 pt-4 border-t border-zinc-200">
          <a 
            href="https://help.ads.microsoft.com/#apex/index/3/en/56684" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xs font-black text-primary-500 hover:text-primary-600 flex items-center gap-1"
          >
            Bing UET Tag Guide <ArrowRight size={14} />
          </a>
        </div>
      </div>

      <hr className="border-zinc-100 my-12" />

      {/* Disconnecting */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6" id="disconnect">
        Unlinking & Tag Deletion
      </h2>
      <p>
        To unlink Bing Ads from your storefront:
      </p>
      <ol className="space-y-2 pl-6 text-zinc-500">
        <li>Click <strong>Disconnect</strong> inside the Bing Ads unlinking panel.</li>
        <li>Local tracking coordinates are immediately removed from TrakIt's records.</li>
        <li>To complete removal, you must open your GTM workspace and manually delete the UET Tag and related triggers.</li>
      </ol>
    </article>
  );
}
