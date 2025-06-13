import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Helps prevent issues with Leaflet marker icons
  },
};

export default nextConfig;
