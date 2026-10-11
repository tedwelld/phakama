import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep the development badge from covering the mobile navigation button.
  devIndicators: false,
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
