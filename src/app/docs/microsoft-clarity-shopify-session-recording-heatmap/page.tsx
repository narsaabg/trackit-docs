import React from "react";
import { ArrowRight, Info, Eye } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Microsoft Clarity Shopify Setup Guide | TrakIt",
  description: "Learn how to integrate Microsoft Clarity session recordings and heatmaps on your Shopify store using TrakIt.",
};

export default function MicrosoftClarityPage() {
  return (
    <article className="prose prose-zinc max-w-none prose-headings:text-zinc-900 prose-headings:font-black prose-p:text-zinc-500 prose-p:font-medium prose-strong:text-zinc-900">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
          Configuration
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-6">
          Microsoft Clarity Setup
        </h1>
        <p className="text-xl text-zinc-500 font-medium leading-relaxed">
          Microsoft Clarity is a free user behavior analytics tool. Connect Clarity in TrakIt to initialize storefront heatmaps and record session replays automatically.
        </p>
      </div>

      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6">Background Knowledge</h2>
      <p>
        Clarity runs on your storefront to track mouse clicks, screen scrolls, and navigation layouts. TrakIt loads Clarity scripts inside the Shopify custom pixel container sandbox to prevent visual script blocks or performance drag.
      </p>

      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6">Configuration Fields</h2>
      <div className="space-y-4 my-6 not-prose">
        <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-100 flex gap-4">
          <div className="p-2.5 bg-zinc-900/5 rounded-xl self-start">
            <Eye className="text-zinc-700" size={18} />
          </div>
          <div>
            <code className="text-xs font-black text-zinc-900 bg-zinc-200/50 px-2 py-0.5 rounded font-mono">
              Site ID
            </code>
            <span className="text-[10px] font-black uppercase text-red-500 ml-2">Required</span>
            <p className="text-xs text-zinc-500 font-medium leading-relaxed mt-2 m-0">
              The project site identifier code shown in Clarity's dashboard settings.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-black text-zinc-900 mt-12 mb-6">Step-by-Step Setup Guide</h2>
      <ol className="space-y-3 my-4 pl-6">
        <li>Log into Microsoft Clarity project settings.</li>
        <li>Locate your project project ID code (Site ID).</li>
        <li>Paste it into the TrakIt Microsoft Clarity settings block and click <strong>Save</strong>.</li>
      </ol>
    </article>
  );
}
