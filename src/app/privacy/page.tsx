import React from "react";

export const metadata = {
  title: "Privacy Policy | TrakIt",
  description: "Learn how we handle your data and ensure your privacy.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen blueprint-grid pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-10 md:p-16">
          <div className="mb-12">
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-500 mb-4">Legal</div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-6">Privacy Policy</h1>
            <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest">Last updated: April 25, 2026</p>
          </div>

          <div className="prose prose-zinc max-w-none prose-headings:text-zinc-900 prose-headings:font-black prose-p:text-zinc-500 prose-p:font-medium prose-p:leading-relaxed prose-li:text-zinc-500 prose-li:font-medium">
            <section className="mb-12">
              <h2 className="text-2xl font-black text-zinc-900 mb-4">Introduction</h2>
              <p>
                TrakIt ("we", "us", or "our") operates the TrakIt Shopify App. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-zinc-900 mb-4">Data Collection</h2>
              <p>
                We collect several different types of information for various purposes to provide and improve our Service to you.
              </p>
              <ul>
                <li>Shopify Shop Data (Domain, Plan, Email)</li>
                <li>Order Information (Order ID, Amount, Items)</li>
                <li>Tracking Event Data (UTM parameters, IP addresses for attribution)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-zinc-900 mb-4">Use of Data</h2>
              <p>
                TrakIt uses the collected data for various purposes:
              </p>
              <ul>
                <li>To provide and maintain the Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve the Service</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-zinc-900 mb-4">Security of Data</h2>
              <p>
                The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </section>

            <section className="mt-16 pt-10 border-t border-zinc-100 text-center">
              <h3 className="text-xl font-black text-zinc-900 mb-4">Contact Us</h3>
              <p>
                If you have any questions about this Privacy Policy, please contact us at <span className="text-primary-500 font-bold">hi@trakit.site</span>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
