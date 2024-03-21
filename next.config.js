/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  compiler: {
    emotion: true
  }
};

export default nextConfig;