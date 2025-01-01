import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  // Optimizing for production builds
  swcMinify: true,
  poweredByHeader: false,
};

export default withContentlayer(nextConfig);
