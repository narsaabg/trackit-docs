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
  title: "Google Tag Manager Shopify Setup: Manual & Automatic | TrakIt",
  description: "Learn how to configure Google Tag Manager (GTM) with TrakIt. Setup GTM container IDs manually or authorize OAuth for automatic tags, triggers, and custom pixel deployments.",
};

export default function GoogleTagManagerPage() {
  return (
    <article className="prose prose-zinc max-w-none prose-headings:text-zinc-900 prose-headings:font-black prose-p:text-zinc-500 prose-p:font-medium prose-strong:text-zinc-900 leading-relaxed">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
          Configuration
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-6">
          Google Tag Manager (GTM) Setup
        </h1>
        <p className="text-xl text-zinc-500 font-medium leading-relaxed">
          Google Tag Manager serves as the primary dispatcher for client-side (storefront) tracking. Configure your GTM container with TrakIt to automatically manage tags, triggers, and variables.
        </p>
      </div>

      {/* Background Knowledge */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6" id="background">
        Why Google Tag Manager Needs Sandboxed Integration
      </h2>
      <p>
        Shopify's checkout screens run on secure, sandboxed environments. Standard GTM container scripts pasted directly into the theme header are blocked from reading purchase values and customer attributes on checkout pages.
      </p>
      <p>
        TrakIt bypasses this sandbox block by utilizing **Shopify's Web Pixels API**. We load a lightweight loader script inside a secure Shopify Custom Pixel sandbox. This pixel captures front-end milestones (such as item views, carts, checkouts, and purchases) and forwards data layer parameters directly to GTM, ensuring checkout actions are tracked accurately.
      </p>

      <hr className="border-zinc-100 my-12" />

      {/* Critical Prerequisite Section */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6 flex items-center gap-2" id="prerequisite">
        <Code className="text-primary-500 shrink-0" size={24} />
        Prerequisite: Shopify Custom Pixel Installation
      </h2>
      <p>
        For GTM to intercept storefront events, you must install TrakIt's customer event pixel script in your Shopify admin panel:
      </p>

      <div className="bg-amber-500/5 border border-amber-500/15 rounded-2xl p-6 my-8 not-prose">
        <h4 className="text-zinc-900 text-sm font-black m-0 mb-3 flex items-center gap-2">
          <Info className="text-amber-600 shrink-0" size={18} />
          Custom Pixel Installation Steps
        </h4>
        <ol className="space-y-3 text-xs text-zinc-600 font-medium pl-4 list-decimal">
          <li>
            Log into your **Shopify Store Admin** dashboard.
          </li>
          <li>
            Go to <strong>Settings</strong> &rarr; <strong>Customer events</strong>.
          </li>
          <li>
            Click <strong>Add custom pixel</strong> in the top-right corner.
          </li>
          <li>
            Name the pixel exactly: <code className="bg-zinc-200/60 px-1 py-0.5 rounded font-mono text-zinc-950 font-black">"TrakIt - Custom Pixel"</code>.
          </li>
          <li>
            Copy the Custom Pixel script block generated inside the top warning banner of TrakIt's GTM settings dashboard.
          </li>
          <li>
            Paste the script into Shopify's code editor workspace.
          </li>
          <li>
            Click <strong>Save</strong>, and then click the primary <strong>Connect</strong> button to activate the pixel handler.
          </li>
        </ol>
      </div>

      <hr className="border-zinc-100 my-12" />

      {/* Setup Options */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6" id="setup-methods">
        Choose Integration Pathway
      </h2>
      <p>
        Configure your GTM container settings by selecting one of our setup tabs:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-8">
        <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2.5 py-1 rounded-md bg-zinc-200 text-[10px] font-black uppercase text-zinc-600">Manual</span>
              <h3 className="text-lg font-black text-zinc-900 m-0">Manual Setup</h3>
            </div>
            <p className="text-xs text-zinc-500 font-medium leading-relaxed mb-6">
              Manually type your public GTM Container ID. Best if you do not want to connect Google account OAuth credentials. Requires manually downloading GTM JSON configurations and importing them to GTM.
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
              Log in with Google account OAuth. TrakIt automatically queries your tag manager account, creates a custom GTM container, populates it with all tracking components, and publishes it via API.
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
        1. Manual Setup Walkthrough
      </h2>

      <h3 className="text-lg font-bold text-zinc-900 mt-6 mb-4">Step A: Retrieve Your Container ID</h3>
      <ol className="space-y-2 pl-6 text-zinc-500">
        <li>Log into your <strong>Google Tag Manager</strong> workspace dashboard.</li>
        <li>Locate the public Container ID at the top of your workspace screen (formatted as <code>GTM-XXXXXXX</code>).</li>
        <li>Copy the ID and paste it into the <em>Container ID</em> field inside TrakIt.</li>
        <li>Click <strong>Save</strong> in the GTM Configuration card.</li>
      </ol>

      <h3 className="text-lg font-bold text-zinc-900 mt-6 mb-4">Step B: Google Tag Manager (GTM) Container Sync</h3>
      <p>
        To load GTM web tracking tags onto your storefront, the tag layout configuration must be synced with your Google Tag Manager (GTM) workspace:
      </p>

      <div className="bg-primary-500/5 border border-primary-500/15 rounded-2xl p-6 my-6 not-prose flex items-start gap-4">
        <Sparkles className="text-primary-600 shrink-0 mt-1" size={20} />
        <div>
          <h4 className="text-zinc-900 text-sm font-black m-0 mb-1">Automatic GTM Import (Recommended)</h4>
          <p className="text-zinc-600 text-xs font-semibold m-0 leading-relaxed">
            If your <strong>Google Account</strong> is connected to TrakIt, all Google Tag Manager tags, triggers, and configurations will be <strong>imported automatically into your GTM container</strong> via GTM API. There is no need to download or upload container files manually.
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

      <div className="bg-primary-500/5 border border-primary-500/15 rounded-2xl p-6 my-8 not-prose flex items-start gap-4">
        <Info className="text-primary-600 shrink-0 mt-1" size={20} />
        <div>
          <h4 className="text-zinc-900 text-sm font-black m-0 mb-1">Configuration Changes</h4>
          <p className="text-zinc-600 text-xs font-medium m-0 leading-relaxed">
            In Manual Setup mode, whenever you change your GTM Container ID or modify configured tracking events, you **must re-download and re-import** the container JSON workspace file to sync variables.
          </p>
        </div>
      </div>

      <hr className="border-zinc-100 my-12" />

      {/* Automatic Setup Walkthrough */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6" id="automatic-setup">
        2. Automatic Setup Walkthrough (OAuth)
      </h2>
      <ol className="space-y-3 pl-6 text-zinc-500">
        <li>Select the **Automatic Setup** tab in GTM Configuration.</li>
        <li>Click <strong>Connect with Google</strong> to grant TrakIt permission to read accounts and manage containers.</li>
        <li>Select your GTM Account from the dropdown.</li>
        <li>Enter a custom container name (TrakIt generates a default suggestion based on your shop name, e.g. <code>[TrakIt] StoreName - 1781322286</code>).</li>
        <li>Click <strong>Create & Setup Container</strong>.</li>
        <li>
          TrakIt executes the deployment in the background:
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>Calls GTM API to create the container.</li>
            <li>Injects all required tags, triggers, and mapping variables for your active tracking integrations.</li>
            <li>Publishes the container version to make it live instantly.</li>
          </ul>
        </li>
      </ol>

      <div className="bg-primary-500/5 border border-primary-500/15 rounded-2xl p-6 my-8 not-prose flex items-start gap-4">
        <Sparkles className="text-primary-600 shrink-0 mt-1" size={20} />
        <div>
          <h4 className="text-zinc-900 text-sm font-black m-0 mb-1">Update Container Tags Action</h4>
          <p className="text-zinc-600 text-xs font-medium m-0 leading-relaxed">
            Once automatic setup is active, TrakIt displays an **Update Container Tags** button. If you configure new channels (such as Klaviyo or Pinterest) or adjust event rules, click this button to push container tag updates directly to your live workspace — no file downloads required.
          </p>
        </div>
      </div>

      <hr className="border-zinc-100 my-12" />

      {/* Unlinking and Cleanup */}
      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6" id="disconnect">
        Unlinking & Cleanup
      </h2>
      <p>
        To disconnect GTM or replace container connections:
      </p>
      <ol className="space-y-2 pl-6 text-zinc-500">
        <li>Click <strong>Disconnect</strong> in the Disconnect panel.</li>
        <li>
          Cleanup behavior:
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>For Automatic Setup: TrakIt uses GTM API to automatically delete injected tags, triggers, and variables from the workspace.</li>
            <li>For Manual Setup: Clears TrakIt local configuration records (tags must be deleted manually from your GTM dashboard).</li>
          </ul>
        </li>
        <li>Navigate to Shopify Settings &rarr; Customer events, and disconnect the TrakIt Custom Pixel script.</li>
      </ol>
    </article>
  );
}
