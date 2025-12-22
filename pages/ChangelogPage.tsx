import React from "react";

const releases = [
  // {
  //   version: "1.4.2",
  //   date: "March 20, 2024",
  //   entries: [
  //     { type: "New", text: "Support for TikTok Event API (Server-Side)." },
  //     { type: "Improvement", text: "Optimized Meta CAPI deduplication logic." },
  //     {
  //       type: "Fixed",
  //       text: "Resolved minor latency in Shopify Plus checkout pixel.",
  //     },
  //   ],
  // },
  {
    version: "1.1.0",
    date: "December 30, 2025",
    entries: [
      {
        type: "New",
        text: "Dashboard widget showing consumed and remaining allowed order usage for Free and Basic plan users.",
      },
      {
        type: "New",
        text: "Tracked Orders dashboard with detailed order item lists and date-based filtering.",
      },
      {
        type: "New",
        text: "Server-side option to resend failed events to all failed services for reliable event delivery.",
      },
    ],
  },
  {
    version: "1.0.0",
    date: "December 5, 2025",
    entries: [
      {
        type: "New",
        text: "Multi-platform conversion tracking support for GA4, Meta, TikTok, and 4 additional platforms.",
      },
      {
        type: "New",
        text: "Recent Orders tracking widget for real-time order monitoring.",
      },
      {
        type: "New",
        text: "Advanced deduplication support for both browser-side and server-side event tracking.",
      },
      {
        type: "New",
        text: "Accurate conversion tracking powered by Shopify Pixels.",
      },
      {
        type: "New",
        text: "Event-level controls to enable or disable specific tracking events.",
      },
      {
        type: "New",
        text: "Service-level settings to customize order data, including order ID, product ID, sales channel exclusions, tax and shipping exclusions, and discount handling.",
      },
      {
        type: "New",
        text: "Built-in tracking test tools with test code support and detailed console event logs for easy debugging.",
      },
    ],
  },
];

export default function ChangelogPage() {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="mx-auto max-w-3xl px-4">
        <header className="mb-20 text-center">
          <h1 className="text-4xl font-black tracking-tight text-zinc-950 mb-4">
            Changelog
          </h1>
          <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest">
            The evolution of TrackIt.
          </p>
        </header>

        <div className="space-y-20 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-100 before:to-transparent">
          {releases.map((rel) => (
            <div
              key={rel.version}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-zinc-50 group-hover:bg-blue-600 transition-colors shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <div className="h-2 w-2 rounded-full bg-blue-600 group-hover:bg-white" />
              </div>
              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm transition-all group-hover:border-blue-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="mono text-xs font-bold text-zinc-950">
                    v{rel.version}
                  </span>
                  <time className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                    {rel.date}
                  </time>
                </div>
                <ul className="space-y-4">
                  {rel.entries.map((entry, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span
                        className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest h-fit mt-1 ${
                          entry.type === "New"
                            ? "bg-blue-100 text-blue-700"
                            : entry.type === "Fixed"
                            ? "bg-zinc-100 text-zinc-500"
                            : "bg-zinc-900 text-white"
                        }`}
                      >
                        {entry.type}
                      </span>
                      <p className="text-xs text-zinc-600 font-medium leading-relaxed">
                        {entry.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
