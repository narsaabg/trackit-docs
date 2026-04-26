import React from "react";

export const metadata = {
  title: "Terms of Service | TrakIt",
  description: "Terms and conditions for using the TrakIt Shopify App.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen blueprint-grid pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-10 md:p-16">
          <div className="mb-12">
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-500 mb-4">Legal</div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-6">Terms of Service</h1>
            <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest">Last updated: April 25, 2026</p>
          </div>

          <div className="prose prose-zinc max-w-none prose-headings:text-zinc-900 prose-headings:font-black prose-p:text-zinc-500 prose-p:font-medium prose-p:leading-relaxed prose-li:text-zinc-500 prose-li:font-medium">
            <section className="mb-12">
              <h2 className="text-2xl font-black text-zinc-900 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the TrakIt Shopify App, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the Service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-zinc-900 mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily use the Service for personal or commercial use on your Shopify store. This is the grant of a license, not a transfer of title.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-zinc-900 mb-4">3. Subscription and Billing</h2>
              <p>
                Our Service is billed on a subscription basis. You will be billed in advance on a recurring and periodic basis. Billing cycles are set on a monthly basis through the Shopify Billing API.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-zinc-900 mb-4">4. Limitations</h2>
              <p>
                In no event shall TrakIt or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the Service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-zinc-900 mb-4">5. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which our company is established, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mt-16 pt-10 border-t border-zinc-100 text-center">
              <h3 className="text-xl font-black text-zinc-900 mb-4">Contact</h3>
              <p>
                If you have any questions about these Terms, please reach out to <span className="text-primary-500 font-bold">hi@trakit.site</span>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
