/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  assetPrefix: '.', // This helps with relative asset paths
  trailingSlash: true,
  distDir: "../portfolio_build"
};

export default nextConfig;
