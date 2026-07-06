import React from "react";
import DocsSidebar from "@/components/DocsSidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TrakIt Documentation - Shopify Server-Side Tracking & Setup Guide",
  description: "Learn how to install, configure, and optimize TrakIt server-side conversion tracking for Google Analytics 4, Meta Pixel, TikTok, Snapchat, Pinterest, and Bing Ads on your Shopify store.",
};

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 flex flex-col md:flex-row gap-16">
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <DocsSidebar />
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 min-w-0 pb-24">
          <div className="p-2 md:p-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
