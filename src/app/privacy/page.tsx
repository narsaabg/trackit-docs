import React from "react";

export const metadata = {
  title: "Privacy Policy | TrakIt",
  description: "Learn how we handle your data and ensure your privacy.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen blueprint-grid pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
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
              <h2 className="text-2xl font-black text-zinc-900 mb-4">Google API Services User Data Policy</h2>
              <p>
                When you integrate Google services (such as Google Analytics, Google Tag Manager, or Google Ads) with TrakIt, we access and process certain Google user data to enable and maintain these integrations.
              </p>
              <h3 className="text-lg font-black text-zinc-900 mt-6 mb-2">1. Data Accessed & Collected</h3>
              <p>
                Depending on the permissions you grant during the Google OAuth authentication process, TrakIt may access:
              </p>
              <ul>
                <li>Your Google Account email address and basic profile information (to identify and verify your account connection).</li>
                <li>Google Tag Manager account, container, and publishing data (to create, edit, publish, or read containers on your behalf).</li>
                <li>Google Analytics properties and configuration settings (to read and configure analytics settings for event tracking).</li>
                <li>Google Ads account details (to upload and manage offline conversion events).</li>
              </ul>
              <h3 className="text-lg font-black text-zinc-900 mt-6 mb-2">2. Use & Sharing of Google User Data</h3>
              <p>
                TrakIt uses this data solely to provide, support, and improve the conversion tracking features of the app (such as setting up tracking pixels, publishing tag manager updates, or uploading conversion data to Google Ads).
              </p>
              <p>
                <strong>We do not share, transfer, or disclose your Google user data with any third-party services</strong> except as strictly necessary to execute the core functions of the app as authorized by you, to comply with applicable laws, or as part of a corporate restructure or acquisition. 
              </p>
              <p>
                Furthermore, TrakIt's use and transfer of information received from Google APIs to any other app will adhere to the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="text-primary-500 font-bold underline">Google API Services User Data Policy</a>, including the Limited Use requirements:
              </p>
              <ul>
                <li>We do not sell, lease, or trade Google user data to any third parties.</li>
                <li>We do not use Google user data to target, serve, or personalize advertisements, or to perform behavioral profiling of you or your store's visitors.</li>
                <li>We do not allow human review of Google user data unless required for security, troubleshooting, legal compliance, or aggregate operations where data is anonymized.</li>
              </ul>
              <h3 className="text-lg font-black text-zinc-900 mt-6 mb-2">3. Data Retention & Deletion</h3>
              <p>
                We retain Google user data (such as authorization tokens and account connection details) only for as long as your TrakIt account is active and you remain connected to the Google services.
              </p>
              <ul>
                <li><strong>Service Disconnection:</strong> You can disconnect your Google account from TrakIt at any time through the app dashboard. Disconnection immediately deletes all stored OAuth credentials, refresh tokens, and related connection configuration data from our active databases.</li>
                <li><strong>App Uninstallation:</strong> When you uninstall the TrakIt Shopify App, all stored credentials, connection details, and associated Google user data will be permanently and securely deleted from our databases and backups within 30 days.</li>
                <li><strong>Deletion Request:</strong> You can request the manual deletion of all your stored Google user data at any time by contacting us at <span className="text-primary-500 font-bold">hi@trakit.site</span>. We will process and confirm your request within 7 business days.</li>
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
