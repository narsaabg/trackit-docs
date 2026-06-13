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
  title: "Pinterest Ads Tag & Conversions API Shopify Setup | TrakIt",
  description: "Learn how to configure Pinterest Tag tracking and Pinterest Conversions API (CAPI) using TrakIt. Find Tag IDs, Ad Account IDs, access tokens, and verify event configurations.",
};

export default function PinterestAdsPage() {
  return (
    <article className="prose prose-zinc max-w-none prose-headings:text-zinc-900 prose-headings:font-black prose-p:text-zinc-500 prose-p:font-medium prose-strong:text-zinc-900 leading-relaxed">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
          Configuration
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-6">
          Pinterest Ads & Conversions API Setup
        </h1>
        <p className="text-xl text-zinc-500 font-medium leading-relaxed">
          Configure Pinterest Tag tracking and Pinterest Conversions API (CAPI) in a hybrid layout. Stream storefront user engagement and checkout conversions directly from your Shopify server to Pinterest's ad system.
        </p>
      </div>

      {/* Background Knowledge */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6" id="background">
        Deduplication and Server-Side Recovery
      </h2>
      <p>
        Standard client-side Pinterest tags can miss up to 30% of visitor behaviors due to browser ad-blockers, tracking restrictions, and page abandonment.
      </p>
      <p>
        TrakIt bypasses these limitations by deploying a dual-tracking architecture. Browser tags track front-end shopping behaviors, while TrakIt's server transmits transaction actions directly using the Pinterest Conversions API.
      </p>
      <p>
        To prevent conversion double-counting, TrakIt attaches matching deduplication tokens (unique event identifiers) to both browser tag triggers and server-side webhook payloads. Pinterest's matching engine joins these streams, deduplicating matching events and attributing conversions cleanly.
      </p>

      <hr className="border-zinc-100 my-12" />

      {/* Setup Guide */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6" id="setup-steps">
        Step-by-Step Configuration Guide
      </h2>

      <h3 className="text-lg font-bold text-zinc-900 mt-6 mb-4">Step A: Retrieve Your Pinterest Tag/Pixel ID</h3>
      <ol className="space-y-2 pl-6 text-zinc-500">
        <li>Log into your <strong>Pinterest Business Manager</strong> dashboard.</li>
        <li>Navigate to the top menu and select <strong>Ads</strong> &rarr; click <strong>Conversions</strong>.</li>
        <li>Click <strong>Tag Manager</strong> on the left-hand menu.</li>
        <li>Copy your numeric <strong>Tag/Pixel ID</strong> (e.g. <code>2614221885475</code>).</li>
        <li>Paste it into TrakIt's <em>Pixel ID</em> input field in the Configuration card.</li>
      </ol>

      <h3 className="text-lg font-bold text-zinc-900 mt-6 mb-4">Step B: Retrieve Your Ad Account ID</h3>
      <ol className="space-y-2 pl-6 text-zinc-500">
        <li>Under your Pinterest Business profile settings, navigate to account details.</li>
        <li>Copy the numeric <strong>Ad Account ID</strong> (e.g. <code>549769530006</code>).</li>
        <li>Paste it into the <em>Ad Account ID</em> input field inside TrakIt.</li>
      </ol>

      <h3 className="text-lg font-bold text-zinc-900 mt-6 mb-4">Step C: Generate API Access Token</h3>
      <ol className="space-y-2 pl-6 text-zinc-500">
        <li>Navigate to the **Conversions** tab inside Pinterest Ads Manager and go to **Settings**.</li>
        <li>Scroll down to the **Conversions API** section and generate an Access Token.</li>
        <li>Copy the generated token string (starting with <code>pina_...</code>).</li>
        <li>Paste the token into the <em>Api Access Token</em> field inside TrakIt.</li>
        <li>Click <strong>Save</strong> inside the Configuration panel.</li>
      </ol>

      <div className="bg-primary-500/5 border border-primary-500/15 rounded-2xl p-6 my-8 not-prose flex items-start gap-4">
        <Info className="text-primary-600 shrink-0 mt-1" size={20} />
        <div>
          <h4 className="text-zinc-900 text-sm font-black m-0 mb-1">Configuration Notes & Save Rules</h4>
          <p className="text-zinc-600 text-xs font-semibold m-0 leading-relaxed mb-2">
            • Save Button Unlock: In TrakIt, the **Save** buttons under the lower *Event Selection* and *Settings* cards are disabled initially. They will unlock for editing once you have successfully entered and saved your credentials under the main *Configuration* card.
          </p>
          <p className="text-zinc-600 text-xs font-semibold m-0 leading-relaxed">
            • UI Note on Measurement ID: The blue warning box at the bottom of the Configuration card in TrakIt states: <em>"Note: If you change Measurement ID, you'll need to re-download and import the container."</em> In the context of Pinterest Ads, "Measurement ID" refers directly to your Pinterest **Pixel ID** or credentials.
          </p>
        </div>
      </div>

      <h3 className="text-lg font-bold text-zinc-900 mt-6 mb-4">Step D: Google Tag Manager (GTM) Container Sync</h3>
      <p>
        To load Pinterest Tag web triggers onto storefront pages, the tracking tag configuration must be synced with your Google Tag Manager (GTM) workspace:
      </p>

      <div className="bg-primary-500/5 border border-primary-500/15 rounded-2xl p-6 my-6 not-prose flex items-start gap-4">
        <Sparkles className="text-primary-600 shrink-0 mt-1" size={20} />
        <div>
          <h4 className="text-zinc-900 text-sm font-black m-0 mb-1">Automatic GTM Import (Recommended)</h4>
          <p className="text-zinc-600 text-xs font-semibold m-0 leading-relaxed">
            If your <strong>Google Account</strong> is connected to TrakIt, all Pinterest Ads events and tag configurations will be <strong>imported automatically into your GTM container</strong> via GTM API. There is no need to download or upload container files manually.
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
        TrakIt supports the following standard events for Pinterest Ads. Check the boxes to activate Web or Server reporting for each event:
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
              <td className="px-6 py-4 text-zinc-950 font-bold">PageVisit</td>
              <td className="px-6 py-4 text-xs">Customer loads any page on your storefront.</td>
              <td className="px-6 py-4 text-center text-zinc-300">-</td>
              <td className="px-6 py-4 text-center text-primary-600">✔</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-zinc-950 font-bold">ViewContent</td>
              <td className="px-6 py-4 text-xs">Customer opens a product page.</td>
              <td className="px-6 py-4 text-center text-zinc-300">-</td>
              <td className="px-6 py-4 text-center text-primary-600">✔</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-zinc-950 font-bold">ViewCategory</td>
              <td className="px-6 py-4 text-xs">Customer opens a collection or category page.</td>
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
              <td className="px-6 py-4 text-zinc-950 font-black">Checkout</td>
              <td className="px-6 py-4 text-xs font-semibold">Customer completes payment and finishes the checkout.</td>
              <td className="px-6 py-4 text-center text-primary-600 font-bold">✔</td>
              <td className="px-6 py-4 text-center text-zinc-300">-</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-primary-500/5 border border-primary-500/15 rounded-2xl p-6 my-8 not-prose flex items-start gap-4">
        <Info className="text-primary-600 shrink-0 mt-1" size={20} />
        <div>
          <h4 className="text-zinc-900 text-sm font-black m-0 mb-1">Important Event Settings Notes</h4>
          <p className="text-zinc-600 text-xs font-semibold m-0 leading-relaxed mb-2">
            • Server-Only Checkout: In the Pinterest Ads integration, the final conversion purchase event (labeled <strong>Checkout</strong>) is **Server-only**. Because checkout completion runs entirely via TrakIt's server webhooks, browser-based double counting is avoided, securing 100% accurate conversion numbers directly on the server.
          </p>
          <p className="text-zinc-600 text-xs font-semibold m-0 leading-relaxed">
            • Web Events Container Sync: The warning note under Event Selection states: <em>"Note: If you change web events, you'll need to re-download and import the container."</em> If you change checkboxes for Web events, you must download the container and re-import it into GTM to reflect the updated event triggers.
          </p>
        </div>
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
            Define the order ID sent to Pinterest. Select between **Transaction ID** (recommended), **Order Number**, or **Order Name**.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-100">
          <code className="text-xs font-black text-zinc-900 bg-zinc-200/50 px-2 py-0.5 rounded font-mono">
            Product Identifier
          </code>
          <p className="text-xs text-zinc-500 font-medium leading-relaxed mt-2 m-0">
            Align item catalog matches with your Pinterest Product Catalog. Choose **Product ID**, **Variant ID**, or **SKU**.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-100">
          <code className="text-xs font-black text-zinc-900 bg-zinc-200/50 px-2 py-0.5 rounded font-mono">
            Exclude Sales Channels
          </code>
          <p className="text-xs text-zinc-500 font-medium leading-relaxed mt-2 m-0">
            Filter out specific non-storefront orders from triggering Pinterest Conversions API payloads. Select channels like Recharge, Point of Sale (POS), or Shopify Draft Orders.
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

      {/* Test Mode Section */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6 flex items-center gap-2" id="test-events">
        <Sparkles className="text-primary-500 shrink-0" size={24} />
        Testing Server Events via Test Mode
      </h2>
      <p>
        Pinterest Ads settings in TrakIt include an **Enable Test Mode** checkbox under the Settings panel. This routes conversions to Pinterest's test log stream for verification:
      </p>

      <ol className="space-y-3 pl-6 text-zinc-500">
        <li>
          Check the <strong>Enable Test Mode</strong> checkbox inside TrakIt's Settings card.
        </li>
        <li>
          Click <strong>Save Settings</strong>.
        </li>
        <li>
          Open your Pinterest Ads dashboard, navigate to **Conversions** &rarr; select **Test Events** tab.
        </li>
        <li>
          Perform standard test behaviors on your storefront (such as adding to cart or checking out).
        </li>
        <li>
          Verify in your Pinterest Test console that events appear immediately with server attribution tags active.
        </li>
      </ol>

      <div className="bg-primary-500/5 border border-primary-500/15 rounded-2xl p-6 my-8 not-prose flex items-start gap-4">
        <ShieldCheck className="text-primary-600 shrink-0 mt-1" size={20} />
        <div>
          <h4 className="text-zinc-900 text-sm font-black m-0 mb-1">Disable Test Mode in Production</h4>
          <p className="text-zinc-600 text-xs font-medium m-0 leading-relaxed">
            Always uncheck the **Enable Test Mode** checkbox and click **Save Settings** once event validation completes. If left checked in production, Pinterest will catalog real storefront conversions as test data instead of utilizing them for ad delivery optimization.
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
        <li>TrakIt automatically triggers an API removal run on your Tag Manager workspace to clean up Pinterest Ads tags and parameters. (If you are in manual setup mode, you will need to delete these variables inside GTM yourself).</li>
      </ol>
    </article>
  );
}
