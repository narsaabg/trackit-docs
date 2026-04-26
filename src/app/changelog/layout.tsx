import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog | TrakIt",
  description: "Latest updates, features, and fixes for TrakIt Shopify App.",
};

export default function ChangelogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
