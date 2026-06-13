import React from "react";
import { 
  ArrowRight, 
  Info, 
  ShieldCheck, 
  Sparkles,
  Code
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TikTok Ads Pixel & Events API Shopify Setup | TrakIt",
  description: "Learn how to configure TikTok Pixel and TikTok Events API (CAPI) using TrakIt. Setup Pixel IDs, Developer Access Tokens, and test real-time conversions.",
};

export default function TikTokAdsPage() {
  return (
    <article className="prose prose-zinc max-w-none prose-headings:text-zinc-900 prose-headings:font-black prose-p:text-zinc-500 prose-p:font-medium prose-strong:text-zinc-900 leading-relaxed">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
          Configuration
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-6">
          TikTok Ads & Events API Setup
        </h1>
        <p className="text-xl text-zinc-500 font-medium leading-relaxed">
          Configure TikTok Pixel and TikTok Events API in a unified tracking layout. Recover lost storefront actions and map purchase events directly from your Shopify server to TikTok's optimization algorithms.
        </p>
      </div>

      {/* Background Knowledge */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6" id="background">
        Deduplication and Server-Side Recovery
      </h2>
      <p>
        Standard browser-side tracking scripts are often blocked by ad-blockers, cookie limitations, or network latency.
      </p>
      <p>
        TrakIt resolves this by running a dual-tracking setup. Browser pixels record front-end clicks and catalog views, while TrakIt's server listens to secure Shopify back-end webhooks. The moment an order completes, TrakIt fires a direct server-side payload to TikTok. 
      </p>
      <p>
        To prevent double-counting of these events, TrakIt appends a matching <code>event_id</code> token to both browser triggers and server-side webhook payloads. TikTok automatically links matching IDs and dedupes them.
      </p>

      <hr className="border-zinc-100 my-12" />

      {/* Setup Guide */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6" id="setup-steps">
        Step-by-Step Configuration Guide
      </h2>

      <h3 className="text-lg font-bold text-zinc-900 mt-6 mb-4">Step A: Retrieve Your TikTok Pixel ID</h3>
      <ol className="space-y-2 pl-6 text-zinc-500">
        <li>Log into your <strong>TikTok Ads Manager</strong> account.</li>
        <li>Navigate to the <strong>Assets</strong> tab &rarr; select <strong>Events</strong> from the dropdown.</li>
        <li>Click <strong>Manage</strong> under the *Web Events* section.</li>
        <li>Copy your active <strong>Pixel ID</strong> (formatted as an alphanumeric string, e.g. <code>ABC1234567890XYZ</code>).</li>
        <li>Paste it into TrakIt's <em>Pixel ID</em> field under the Configuration panel.</li>
      </ol>

      <h3 className="text-lg font-bold text-zinc-900 mt-6 mb-4">Step B: Retrieve Your Events API Access Token</h3>
      <ol className="space-y-2 pl-6 text-zinc-500">
        <li>Inside TikTok Events Manager, select your pixel data source and click the <strong>Settings</strong> tab.</li>
        <li>Scroll down to the **Events API** section.</li>
        <li>Click the <strong>Generate Access Token</strong> button.</li>
        <li>Copy the generated access token key string.</li>
        <li>Paste it into the <em>Api Access Token</em> field inside TrakIt.</li>
        <li>Click <strong>Save</strong>.</li>
      </ol>

      <div className="bg-primary-500/5 border border-primary-500/15 rounded-2xl p-6 my-8 not-prose flex items-start gap-4">
        <Info className="text-primary-600 shrink-0 mt-1" size={20} />
        <div>
          <h4 className="text-zinc-900 text-sm font-black m-0 mb-1">Configuration Lock Behavior</h4>
          <p className="text-zinc-600 text-xs font-medium m-0 leading-relaxed">
            Note that in TrakIt, the **Save** buttons under the *Event Selection* and *Settings* cards are disabled initially. They will unlock for editing once you have successfully entered and saved your Pixel ID and Access Token in the *Configuration* card.
          </p>
        </div>
      </div>

      <h3 className="text-lg font-bold text-zinc-900 mt-6 mb-4">Step C: Google Tag Manager (GTM) Container Sync</h3>
      <p>
        To load TikTok Pixel web triggers onto storefront pages, the tracking tag configuration must be synced with your Google Tag Manager (GTM) workspace:
      </p>

      <div className="bg-primary-500/5 border border-primary-500/15 rounded-2xl p-6 my-6 not-prose flex items-start gap-4">
        <Sparkles className="text-primary-600 shrink-0 mt-1" size={20} />
        <div>
          <h4 className="text-zinc-900 text-sm font-black m-0 mb-1">Automatic GTM Import (Recommended)</h4>
          <p className="text-zinc-600 text-xs font-semibold m-0 leading-relaxed">
            If your <strong>Google Account</strong> is connected to TrakIt, all TikTok Ads events and tag configurations will be <strong>imported automatically into your GTM container</strong> via GTM API. There is no need to download or upload container files manually.
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
        TrakIt supports the following standard events for TikTok Ads. Check the boxes to activate Web or Server reporting for each event:
      </p>

      <div className="overflow-x-auto my-8 not-prose border border-zinc-200/60 rounded-2xl bg-white shadow-sm">
        <table className="w-full border-collapse text-left text-sm text-zinc-500">
          <thead>
            <tr className="border-b border-zinc-200 bg-zinc-50/50">
              <th className="px-6 py-4 font-black text-zinc-900 text-xs uppercase tracking-wider w-1/3">Event Name</th>
              <th className="px-6 py-4 font-black text-zinc-900 text-xs uppercase tracking-wider w-5/12">Trigger Description</th>
              <th className="px-6 py-4 font-black text-zinc-900 text-xs uppercase tracking-wider text-center">Server</th>
              <th className="px-6 py-4 font-black text-zinc-900 text-xs uppercase tracking-wider text-center">Web</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 font-medium">
            <tr>
              <td className="px-6 py-4 text-zinc-950 font-bold">ViewContent</td>
              <td className="px-6 py-4 text-xs">Customer opens a product page.</td>
              <td className="px-6 py-4 text-center text-zinc-300">-</td>
              <td className="px-6 py-4 text-center text-primary-600">✔</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-zinc-950 font-bold">Search</td>
              <td className="px-6 py-4 text-xs">Customer executes a store search query.</td>
              <td className="px-6 py-4 text-center text-zinc-300">-</td>
              <td className="px-6 py-4 text-center text-primary-600">✔</td>
            </tr>
            <tr className="bg-primary-500/[0.02]">
              <td className="px-6 py-4 text-zinc-950 font-black">AddToCart</td>
              <td className="px-6 py-4 text-xs font-semibold">Customer adds a product to their shopping cart.</td>
              <td className="px-6 py-4 text-center text-primary-600 font-bold">✔</td>
              <td className="px-6 py-4 text-center text-primary-600 font-bold">✔</td>
            </tr>
            <tr className="bg-primary-500/[0.02]">
              <td className="px-6 py-4 text-zinc-950 font-black">InitiateCheckout</td>
              <td className="px-6 py-4 text-xs font-semibold">Customer clicks to begin Shopify checkout.</td>
              <td className="px-6 py-4 text-center text-primary-600 font-bold">✔</td>
              <td className="px-6 py-4 text-center text-primary-600 font-bold">✔</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-zinc-950 font-bold">AddPaymentInfo</td>
              <td className="px-6 py-4 text-xs">Customer enters payment card details.</td>
              <td className="px-6 py-4 text-center text-zinc-300">-</td>
              <td className="px-6 py-4 text-center text-primary-600">✔</td>
            </tr>
            <tr className="bg-primary-500/[0.02]">
              <td className="px-6 py-4 text-zinc-950 font-black">Purchase</td>
              <td className="px-6 py-4 text-xs font-semibold">Customer completes payment and finishes the checkout.</td>
              <td className="px-6 py-4 text-center text-primary-600 font-bold">✔</td>
              <td className="px-6 py-4 text-center text-primary-600 font-bold">✔</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="border-zinc-100 my-12" />

      {/* Advanced Settings */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6" id="settings">
        Granular Settings & Parameters
      </h2>
      <p>
        The **Settings** panel at the bottom of the left column provides customization options for your parameter data feeds:
      </p>

      <div className="space-y-4 my-8 not-prose">
        <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-100">
          <code className="text-xs font-black text-zinc-900 bg-zinc-200/50 px-2 py-0.5 rounded font-mono">
            Order Identifier
          </code>
          <p className="text-xs text-zinc-500 font-medium leading-relaxed mt-2 m-0">
            Define the order ID sent to TikTok. Select between **Transaction ID** (recommended), **Order Number**, or **Order Name**.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-100">
          <code className="text-xs font-black text-zinc-900 bg-zinc-200/50 px-2 py-0.5 rounded font-mono">
            Product Identifier
          </code>
          <p className="text-xs text-zinc-500 font-medium leading-relaxed mt-2 m-0">
            Align item catalog matches with your TikTok Business Center catalog. Choose **Product ID**, **Variant ID**, or **SKU**.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-100">
          <code className="text-xs font-black text-zinc-900 bg-zinc-200/50 px-2 py-0.5 rounded font-mono">
            Exclude Sales Channels
          </code>
          <p className="text-xs text-zinc-500 font-medium leading-relaxed mt-2 m-0">
            Filter out specific non-storefront orders from triggering Events API payloads. Select channels like Recharge, Point of Sale (POS), or Shopify Draft Orders.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-100">
          <code className="text-xs font-black text-zinc-900 bg-zinc-200/50 px-2 py-0.5 rounded font-mono">
            Conversion Value Adjustments
          </code>
          <p className="text-xs text-zinc-500 font-medium leading-relaxed mt-2 m-0">
            Set checkable toggles to exclude taxes or shipping costs, or deduct discount values from order total amounts.
          </p>
        </div>
      </div>

      <hr className="border-zinc-100 my-12" />

      {/* Test Code Section */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6 flex items-center gap-2" id="test-events">
        <Sparkles className="text-primary-500 shrink-0" size={24} />
        Testing Server Events via Test Code
      </h2>
      <p>
        TikTok Ads settings in TrakIt include a dedicated **Test Code** input field under the Settings panel. This lets you route and verify Events API payloads inside TikTok's debug console in real-time:
      </p>

      <ol className="space-y-3 pl-6 text-zinc-500">
        <li>
          Log into TikTok Ads Manager and navigate to the <strong>Events Manager</strong> screen.
        </li>
        <li>
          Select your Web Pixel source, and click on the <strong>Test Events</strong> tab at the top.
        </li>
        <li>
          Copy the generated alphanumeric test code.
        </li>
        <li>
          Paste the code into TrakIt's <strong>Test Code</strong> text field in the settings card.
        </li>
        <li>
          Click <strong>Save Settings</strong>.
        </li>
        <li>
          Perform testing behaviors on your Shopify storefront (e.g. click a product, add to cart, or start checkout).
        </li>
        <li>
          Verify inside TikTok's *Test Events* console that server-side payloads are immediately received, displaying <strong>Events API</strong> as the connection method.
        </li>
      </ol>

      <div className="bg-primary-500/5 border border-primary-500/15 rounded-2xl p-6 my-8 not-prose flex items-start gap-4">
        <ShieldCheck className="text-primary-600 shrink-0 mt-1" size={20} />
        <div>
          <h4 className="text-zinc-900 text-sm font-black m-0 mb-1">Remove Test Code After Testing</h4>
          <p className="text-zinc-600 text-xs font-medium m-0 leading-relaxed">
            Always clear the Test Code field and click **Save Settings** once you have confirmed event delivery. Leaving a test code active in production will route merchant conversions to the test log stream.
          </p>
        </div>
      </div>

      <hr className="border-zinc-100 my-12" />

      {/* Disconnecting */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6" id="disconnect">
        Unlinking & Tag Deletion
      </h2>
      <p>
        To remove the integration:
      </p>
      <ol className="space-y-2 pl-6 text-zinc-500">
        <li>Click <strong>Disconnect</strong> in the Disconnect panel.</li>
        <li>TrakIt automatically triggers an API removal run on your Tag Manager workspace to clean up TikTok Ads tags and parameters. (If you are in manual setup mode, you will need to delete these variables inside GTM yourself).</li>
      </ol>
    </article>
  );
}
