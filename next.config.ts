import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "i.pravatar.cc" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/web",
        destination: "/",
        permanent: true,
      },
      {
        source: "/web/pricing",
        destination: "/pricing",
        permanent: true,
      },
      {
        source: "/web/reach-us",
        destination: "/reach-us",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;