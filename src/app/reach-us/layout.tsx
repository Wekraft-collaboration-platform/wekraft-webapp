import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reach Us — WeKraft",
  description:
    "Have a question, found a bug, or want to collaborate? Reach out to the WeKraft team and we'll get back within 24 hours.",
  openGraph: {
    title: "Reach Us — WeKraft",
    description:
      "Get in touch with WeKraft. We'd love to hear from you — bug reports, feature ideas, or just say hi.",
  },
};

export default function ReachUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
