"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ChevronRight, X } from "lucide-react";

interface SidebarLink {
  name: string;
  path: string;
}

interface NavSection {
  title: string;
  links: SidebarLink[];
}

export default function DocsSidebar() {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");

  const docsNav: NavSection[] = [
    {
      title: "Getting Started",
      links: [
        { name: "Introduction", path: "/docs" },
        { name: "Quick Start", path: "/docs/shopify-multi-pixel-tracking-quick-start-guide" },
        { name: "Installation", path: "/docs/shopify-pixels-conversions-app-installation-pricing" },
      ],
    },
    {
      title: "Configuration",
      links: [
        { name: "Google Tag Manager", path: "/docs/google-tag-manager-gtm-shopify-pixels-setup" },
        { name: "Google Analytics 4", path: "/docs/shopify-google-analytics-4-ga4-integration-setup" },
        { name: "Google Ads", path: "/docs/shopify-google-ads-conversion-tracking-setup-guide" },
        { name: "Meta Facebook Pixel", path: "/docs/facebook-pixel-conversions-api-capi-shopify-setup" },
        { name: "TikTok Ads", path: "/docs/shopify-tiktok-ads-pixel-events-api-setup" },
        { name: "Snapchat Ads", path: "/docs/snapchat-pixel-conversions-api-shopify-integration" },
        { name: "Pinterest Ads", path: "/docs/pinterest-ads-tag-conversions-api-shopify-setup" },
        { name: "Bing Ads (Microsoft)", path: "/docs/bing-microsoft-uet-tag-shopify-conversion-tracking" },
        { name: "Klaviyo", path: "/docs/klaviyo-shopify-server-side-tracking-setup" },
        { name: "Microsoft Clarity", path: "/docs/microsoft-clarity-shopify-session-recording-heatmap" },
      ],
    },
    {
      title: "Advanced",
      links: [
        { name: "Server-Side Tracking", path: "/docs/shopify-server-side-tracking-conversions-api-architecture" },
        { name: "Custom Events", path: "/docs/custom-event-tracking-logs-shopify" },
        { name: "Advanced Settings", path: "/docs/advanced-shopify-tracking-consent-mode-settings" },
        { name: "Reports", path: "/docs/shopify-marketing-attribution-order-tracking-reports" },
        { name: "Diagnostics & Logs", path: "/docs/real-time-shopify-conversion-diagnostics-logs-audit" },
      ],
    },
  ];

  // Filter sections and links based on search query
  const filteredNav = docsNav
    .map((section) => {
      const matchedLinks = section.links.filter((link) =>
        link.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return {
        ...section,
        links: matchedLinks,
      };
    })
    .filter((section) => section.links.length > 0);

  return (
    <div className="sticky top-24">
      <div className="relative mb-10">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search documentation..."
          className="w-full bg-white border border-zinc-200 rounded-xl pl-10 pr-10 py-2.5 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all shadow-sm"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 transition-colors"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {filteredNav.length === 0 ? (
        <div className="text-center py-12 bg-zinc-50 border border-dashed border-zinc-200 rounded-2xl">
          <p className="text-xs font-bold text-zinc-400">No results found for "{searchQuery}"</p>
        </div>
      ) : (
        <nav className="space-y-10">
          {filteredNav.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-1">
                {section.links.map((link, lidx) => {
                  const isActive = pathname === link.path;
                  return (
                    <li key={lidx}>
                      <Link
                        href={link.path}
                        className={`group flex items-center justify-between py-2 text-sm font-bold transition-all ${
                          isActive
                            ? "text-primary-500 pl-1"
                            : "text-zinc-500 hover:text-primary-500"
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronRight
                          size={14}
                          className={`transition-all text-primary-500 ${
                            isActive
                              ? "opacity-100 translate-x-0"
                              : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                          }`}
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      )}

      <div className="mt-12 pt-8 border-t border-zinc-100">
        <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/60">
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">Need help?</p>
          <p className="text-xs font-bold text-zinc-700 mb-4">Can't find what you're looking for?</p>
          <Link
            href="/contact"
            className="text-xs font-black text-primary-500 hover:text-primary-600 flex items-center gap-1"
          >
            Contact Support <ChevronRight size={12} />
          </Link>
        </div>
      </div>
    </div>
  );
}
