import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — WeKraft",
  description:
    "Meet the team behind WeKraft. We're building the future of developer collaboration — AI-powered project management, real-time sync, and intelligent team matching.",
  openGraph: {
    title: "About Us — WeKraft",
    description:
      "Meet the team behind WeKraft. Built by developers, for the future of work.",
  },
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
