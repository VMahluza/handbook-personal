import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",          // 👈 tells Next.js to generate /out instead of /.next
  trailingSlash: true,
  images: { unoptimized: true }  // 👈 needed if you use <Image> component
};

export default nextConfig;
