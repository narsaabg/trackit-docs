import React from "react";
import { 
  ArrowRight, 
  Info, 
  ShieldCheck, 
  Sparkles
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Analytics 4 Shopify Setup: Manual & Automatic | TrakIt",
  description: "Learn how to configure Google Analytics 4 (GA4) with TrakIt, set Measurement Protocol API Secrets, customize events, and edit granular conversion value settings.",
};

export default function GoogleAnalyticsPage() {
  return (
    <article className="prose prose-zinc max-w-none prose-headings:text-zinc-900 prose-headings:font-black prose-p:text-zinc-500 prose-p:font-medium prose-strong:text-zinc-900 leading-relaxed">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
          Configuration
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-6">
          Google Analytics 4 (GA4) Setup
        </h1>
        <p className="text-xl text-zinc-500 font-medium leading-relaxed">
          Track customer behavior and checkout funnels accurately. Combine browser-side tag tracking with server-side Measurement Protocol payloads to eliminate data gaps.
        </p>
      </div>



      {/* Background Knowledge */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6" id="background">
        Why Server-Side Tracking is Necessary
      </h2>
      <p>
        Standard browser-side Google Analytics scripts regularly drop 15% to 30% of user data due to ad-blockers, iOS tracking restrictions (ITP), and network interruptions.
      </p>
      <p>
        TrakIt bridges this gap by combining browser-side tracking with the **GA4 Measurement Protocol**. While the client tag reports front-end interactions, TrakIt's server listens to secure Shopify back-end webhooks. The moment an order completes, TrakIt fires a server-side payload containing exact revenue, transaction IDs, items, and cookies directly to Google's servers, restoring missing conversion data.
      </p>

      <hr className="border-zinc-100 my-12" />

      {/* Setup Options */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6" id="setup-methods">
        Select Integration Method
      </h2>
      <p>
        Select your integration method inside the GA4 Configuration panel:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-8">
        <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2.5 py-1 rounded-md bg-zinc-200 text-[10px] font-black uppercase text-zinc-600">Manual</span>
              <h3 className="text-lg font-black text-zinc-900 m-0">Manual Setup</h3>
            </div>
            <p className="text-xs text-zinc-500 font-medium leading-relaxed mb-6">
              Paste Measurement ID and API secrets from Google Analytics manually. Best if you wish to bypass Google OAuth authorization. GTM tags must be downloaded and imported manually.
            </p>
          </div>
          <a href="#manual-setup" className="text-xs font-black text-primary-500 hover:text-primary-600 flex items-center gap-1 mt-auto">
            View Manual Setup steps <ArrowRight size={14} />
          </a>
        </div>

        <div className="p-6 rounded-2xl bg-zinc-50 border border-primary-200 flex flex-col justify-between shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-primary-500 text-white px-3 py-1 rounded-bl-xl text-[8px] font-black uppercase tracking-wider">
            Recommended
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2.5 py-1 rounded-md bg-primary-500/10 text-[10px] font-black uppercase text-primary-600">Auto</span>
              <h3 className="text-lg font-black text-zinc-900 m-0">Automatic Setup</h3>
            </div>
            <p className="text-xs text-zinc-500 font-medium leading-relaxed mb-6">
              Connect Google OAuth. TrakIt automatically reads your properties, creates API secrets, saves stream IDs, and updates GTM containers via API — no file uploads required.
            </p>
          </div>
          <a href="#automatic-setup" className="text-xs font-black text-primary-500 hover:text-primary-600 flex items-center gap-1 mt-auto">
            View Automatic Setup steps <ArrowRight size={14} />
          </a>
        </div>
      </div>

      <hr className="border-zinc-100 my-12" />

      {/* Manual Setup Walkthrough */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6" id="manual-setup">
        1. Manual Setup Instructions
      </h2>
      
      <h3 className="text-lg font-bold text-zinc-900 mt-6 mb-4">Step A: Retrieve Your Measurement ID</h3>
      <ol className="space-y-2 pl-6 text-zinc-500">
        <li>Log into your <strong>Google Analytics 4</strong> dashboard.</li>
        <li>Navigate to the bottom-left corner and click <strong>Admin</strong>.</li>
        <li>Under the property settings, click <strong>Data Streams</strong> &rarr; select your active <strong>Web</strong> stream.</li>
        <li>Copy the <strong>Measurement ID</strong> (formatted as <code>G-XXXXXXXXXX</code>) and paste it into TrakIt.</li>
      </ol>

      <h3 className="text-lg font-bold text-zinc-900 mt-6 mb-4">Step B: Generate Measurement Protocol API Secret</h3>
      <ol className="space-y-2 pl-6 text-zinc-500">
        <li>Inside the same Web Stream settings panel, scroll down and click <strong>Measurement Protocol API secrets</strong>.</li>
        <li>Click <strong>Create</strong>.</li>
        <li>Give the secret a recognizable name (e.g., <code>TrakIt Server Sync</code>) and save.</li>
        <li>Copy the generated <strong>Secret value</strong> string and paste it into the *Measurement Protocol API Secret* field in TrakIt.</li>
        <li>Click <strong>Save</strong> inside the Configuration panel.</li>
      </ol>

      <div className="bg-primary-500/5 border border-primary-500/15 rounded-2xl p-6 my-8 not-prose flex items-start gap-4">
        <Info className="text-primary-600 shrink-0 mt-1" size={20} />
        <div>
          <h4 className="text-zinc-900 text-sm font-black m-0 mb-1">Activating Settings and Event Selection</h4>
          <p className="text-zinc-600 text-xs font-medium m-0 leading-relaxed">
            In Manual Setup, the *Save* buttons under **Event Selection** and **Settings** are disabled at first. Once you save the primary Measurement ID and API Secret under *Configuration*, these lower cards automatically unlock for editing.
          </p>
        </div>
      </div>

      <h3 className="text-lg font-bold text-zinc-900 mt-6 mb-4">Step C: Google Tag Manager (GTM) Container Sync</h3>
      <p>
        To load Google Analytics web tracking tags onto your storefront, the tag layout configuration must be synced with your Google Tag Manager (GTM) workspace:
      </p>

      <div className="bg-primary-500/5 border border-primary-500/15 rounded-2xl p-6 my-6 not-prose flex items-start gap-4">
        <Sparkles className="text-primary-600 shrink-0 mt-1" size={20} />
        <div>
          <h4 className="text-zinc-900 text-sm font-black m-0 mb-1">Automatic GTM Import (Recommended)</h4>
          <p className="text-zinc-600 text-xs font-semibold m-0 leading-relaxed">
            If your <strong>Google Account</strong> is connected to TrakIt, all Google Analytics 4 events and tag configurations will be <strong>imported automatically into your GTM container</strong> via GTM API. There is no need to download or upload container files manually.
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

      {/* Automatic Setup Walkthrough */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6" id="automatic-setup">
        2. Automatic Setup Instructions (OAuth)
      </h2>
      <ol className="space-y-3 pl-6 text-zinc-500">
        <li>Select the **Automatic Setup** tab in the GA4 Configuration card.</li>
        <li>Click <strong>Connect with Google</strong> and grant the requested OAuth permissions to manage Analytics properties and GTM containers.</li>
        <li>Once redirected back to TrakIt, select your:
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li><strong>Google Analytics Account</strong></li>
            <li><strong>GA4 Property</strong></li>
            <li><strong>Web Data Stream</strong></li>
          </ul>
        </li>
        <li>Click <strong>Create & Setup GA4</strong>.</li>
        <li>TrakIt automatically queries credentials, configures API secrets, and pushes tag changes directly to your GTM workspace via API — no file downloads required.</li>
      </ol>

      <hr className="border-zinc-100 my-12" />

      {/* Event Selection */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6" id="events">
        GA4 Event Selection Matrix
      </h2>
      <p>
        TrakIt allows you to customize exactly which storefront actions are pushed to GA4, split by client-side browser tags (<strong>Web</strong>) and backend webhook triggers (<strong>Server</strong>):
      </p>

      <div className="overflow-x-auto my-8 not-prose border border-zinc-200/60 rounded-2xl bg-white shadow-sm">
        <table className="w-full border-collapse text-left text-sm text-zinc-500">
          <thead>
            <tr className="border-b border-zinc-200 bg-zinc-50/50">
              <th className="px-6 py-4 font-black text-zinc-900 text-xs uppercase tracking-wider w-1/3">Event Name</th>
              <th className="px-6 py-4 font-black text-zinc-900 text-xs uppercase tracking-wider w-5/12">Trigger Action</th>
              <th className="px-6 py-4 font-black text-zinc-900 text-xs uppercase tracking-wider text-center">Server</th>
              <th className="px-6 py-4 font-black text-zinc-900 text-xs uppercase tracking-wider text-center">Web</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 font-medium">
            <tr>
              <td className="px-6 py-4 text-zinc-950 font-bold">Page Viewed</td>
              <td className="px-6 py-4 text-xs">A customer views any page on your store.</td>
              <td className="px-6 py-4 text-center text-zinc-300">-</td>
              <td className="px-6 py-4 text-center text-primary-600">✔</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-zinc-950 font-bold">Collection Viewed</td>
              <td className="px-6 py-4 text-xs">A collection or category page is opened.</td>
              <td className="px-6 py-4 text-center text-zinc-300">-</td>
              <td className="px-6 py-4 text-center text-primary-600">✔</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-zinc-950 font-bold">Product Viewed</td>
              <td className="px-6 py-4 text-xs">A product details page is opened.</td>
              <td className="px-6 py-4 text-center text-zinc-300">-</td>
              <td className="px-6 py-4 text-center text-primary-600">✔</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-zinc-950 font-bold">Search Submitted</td>
              <td className="px-6 py-4 text-xs">A customer performs a storefront search query.</td>
              <td className="px-6 py-4 text-center text-zinc-300">-</td>
              <td className="px-6 py-4 text-center text-primary-600">✔</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-zinc-950 font-bold">Added to Cart</td>
              <td className="px-6 py-4 text-xs">A product is added to the shopping cart.</td>
              <td className="px-6 py-4 text-center text-zinc-300">-</td>
              <td className="px-6 py-4 text-center text-primary-600">✔</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-zinc-950 font-bold">Removed from Cart</td>
              <td className="px-6 py-4 text-xs">A product is removed from the shopping cart.</td>
              <td className="px-6 py-4 text-center text-zinc-300">-</td>
              <td className="px-6 py-4 text-center text-primary-600">✔</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-zinc-950 font-bold">Cart Viewed</td>
              <td className="px-6 py-4 text-xs">A customer views the cart page.</td>
              <td className="px-6 py-4 text-center text-zinc-300">-</td>
              <td className="px-6 py-4 text-center text-primary-600">✔</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-zinc-950 font-bold">Checkout Started</td>
              <td className="px-6 py-4 text-xs">Customer enters checkout.</td>
              <td className="px-6 py-4 text-center text-zinc-300">-</td>
              <td className="px-6 py-4 text-center text-primary-600">✔</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-zinc-950 font-bold">Contact Info Submitted</td>
              <td className="px-6 py-4 text-xs">Customer enters email or phone.</td>
              <td className="px-6 py-4 text-center text-zinc-300">-</td>
              <td className="px-6 py-4 text-center text-primary-600">✔</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-zinc-950 font-bold">Address Submitted</td>
              <td className="px-6 py-4 text-xs">Customer enters shipping address parameters.</td>
              <td className="px-6 py-4 text-center text-zinc-300">-</td>
              <td className="px-6 py-4 text-center text-primary-600">✔</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-zinc-950 font-bold">Shipping Info Submitted</td>
              <td className="px-6 py-4 text-xs">Customer selects shipping options.</td>
              <td className="px-6 py-4 text-center text-zinc-300">-</td>
              <td className="px-6 py-4 text-center text-primary-600">✔</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-zinc-950 font-bold">Payment Info Submitted</td>
              <td className="px-6 py-4 text-xs">Customer enters billing card details.</td>
              <td className="px-6 py-4 text-center text-zinc-300">-</td>
              <td className="px-6 py-4 text-center text-primary-600">✔</td>
            </tr>
            <tr className="bg-primary-500/[0.02]">
              <td className="px-6 py-4 text-zinc-950 font-black">Checkout Completed</td>
              <td className="px-6 py-4 text-xs font-semibold">Customer successfully places an order.</td>
              <td className="px-6 py-4 text-center text-primary-600 font-bold">✔</td>
              <td className="px-6 py-4 text-center text-primary-600 font-bold">✔</td>
            </tr>
            <tr className="bg-primary-500/[0.02]">
              <td className="px-6 py-4 text-zinc-950 font-black">Refund</td>
              <td className="px-6 py-4 text-xs font-semibold">An order is partially or fully refunded.</td>
              <td className="px-6 py-4 text-center text-primary-600 font-bold">✔</td>
              <td className="px-6 py-4 text-center text-zinc-300">-</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-zinc-950 font-bold">Login</td>
              <td className="px-6 py-4 text-xs">A user logs into their customer account.</td>
              <td className="px-6 py-4 text-center text-zinc-300">-</td>
              <td className="px-6 py-4 text-center text-primary-600">✔</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-zinc-950 font-bold">Register</td>
              <td className="px-6 py-4 text-xs">A user creates a storefront profile account.</td>
              <td className="px-6 py-4 text-center text-zinc-300">-</td>
              <td className="px-6 py-4 text-center text-primary-600">✔</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-zinc-950 font-bold">Email Subscribe</td>
              <td className="px-6 py-4 text-xs">A user opts into marketing emails.</td>
              <td className="px-6 py-4 text-center text-zinc-300">-</td>
              <td className="px-6 py-4 text-center text-primary-600">✔</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="border-zinc-100 my-12" />

      {/* Advanced Settings */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6" id="settings">
        Granular Integration Settings
      </h2>
      <p>
        TrakIt provides a dedicated **Settings** panel containing six configurations to adjust values and identifiers:
      </p>

      <div className="space-y-6 my-8 not-prose">
        <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 shadow-sm">
          <h3 className="text-sm font-black text-zinc-900 mb-2 font-mono">Order Identifier</h3>
          <p className="text-xs text-zinc-500 font-medium leading-relaxed m-0">
            Define how transaction conversions are recorded in Google Analytics reports. Select from:
          </p>
          <ul className="list-disc pl-6 text-xs text-zinc-500 mt-2 space-y-1 font-medium">
            <li><strong>Transaction ID</strong> (Default, recommended: uses Shopify's internal alphanumeric transaction ID).</li>
            <li><strong>Order Number</strong> (e.g. <code>#1024</code>).</li>
            <li><strong>Order Name</strong> (Shopify order code name parameters).</li>
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 shadow-sm">
          <h3 className="text-sm font-black text-zinc-900 mb-2 font-mono">Product Identifier</h3>
          <p className="text-xs text-zinc-500 font-medium leading-relaxed m-0">
            Determine how products are identified in your shopping reports. Choose from:
          </p>
          <ul className="list-disc pl-6 text-xs text-zinc-500 mt-2 space-y-1 font-medium">
            <li><strong>Product ID</strong> (Shopify standard product numeric string ID).</li>
            <li><strong>Variant ID</strong> (The identifier code for specific sizes, colors, or choices).</li>
            <li><strong>SKU</strong> (Stock Keeping Unit alphanumeric codes to align with your warehouse management catalog).</li>
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 shadow-sm">
          <h3 className="text-sm font-black text-zinc-900 mb-2 font-mono">Exclude Sales Channels</h3>
          <p className="text-xs text-zinc-500 font-medium leading-relaxed m-0">
            Allows you to block and exclude orders created by specific sales channels from triggering GA4 conversion events. For example, check and select:
          </p>
          <ul className="list-disc pl-6 text-xs text-zinc-500 mt-2 space-y-1 font-medium">
            <li><strong>Recharge</strong> (Prevent subscription rebilling orders from skewing marketing attribution counts).</li>
            <li><strong>Shopify Draft Orders</strong> (Exclude manual checkouts made via storefront admin).</li>
            <li><strong>Point of Sale (POS)</strong> (Exclude physical retail orders from online web traffic channels).</li>
            <li><strong>Zapier / API Channels</strong> (Exclude programmatic orders).</li>
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 shadow-sm">
          <h3 className="text-sm font-black text-zinc-900 mb-2 font-mono">Tax and Shipping Toggles</h3>
          <p className="text-xs text-zinc-500 font-medium leading-relaxed m-0 mb-4">
            Fine-tune valuation metrics for conversion reports with checkout toggles:
          </p>
          <ul className="space-y-3 text-xs text-zinc-600 font-semibold pl-2">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 shrink-0"></span>
              <div>
                Exclude Tax from Conversion Value:
                <span className="block text-zinc-500 font-medium mt-0.5">Deducts sales taxes from the overall value before sending the event parameters to GA4.</span>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 shrink-0"></span>
              <div>
                Exclude Shipping from Conversion Value:
                <span className="block text-zinc-500 font-medium mt-0.5">Removes shipping fees and shipping tax components from GA4 purchase calculations.</span>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 shrink-0"></span>
              <div>
                Include Discounts in Conversion Value:
                <span className="block text-zinc-500 font-medium mt-0.5">Ensures discount codes, promotional credits, and coupons are subtracted from order pricing values.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-zinc-100 my-12" />

      {/* Disconnection */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6" id="disconnect">
        Unlinking & Cleanup
      </h2>
      <p>
        If you need to change setup modes, correct account mappings, or remove Google Analytics 4 integration entirely:
      </p>
      <ol className="space-y-2 pl-6 text-zinc-500">
        <li>Click <strong>Disconnect</strong> in the Disconnect panel at the bottom of the left column.</li>
        <li>TrakIt automatically coordinates GTM workspace updates:
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>For Automatic Setup: TrakIt uses the GTM API to automatically delete all tags, triggers, and variables injected during setup to clean your workspace.</li>
            <li>For Manual Setup: Clears local TrakIt configurations. (You must manually delete the imported tags from your GTM dashboard).</li>
          </ul>
        </li>
      </ol>
    </article>
  );
}
