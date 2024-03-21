/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  trailingSlash: true,
  compiler: {
    emotion: true
  }
};

export default nextConfig;
