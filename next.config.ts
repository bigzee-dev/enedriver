import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["10.71.50.246"],
  turbopack: {
    // Pin the workspace root: a stray package-lock.json in C:\Users\zimam
    // otherwise makes Turbopack infer the home directory as the root.
    root: import.meta.dirname,
  },
};

export default nextConfig;
