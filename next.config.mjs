/** @type {import('next').NextConfig} */
const nextConfig = {
  // Handle environment variables properly
  env: {
    NEXT_PUBLIC_CONVEX_URL: process.env.NEXT_PUBLIC_CONVEX_URL,
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    NEXT_PUBLIC_STREAM_API_KEY: process.env.NEXT_PUBLIC_STREAM_API_KEY,
  },
  
  // Ensure proper image handling
  images: {
    domains: ['images.clerk.dev', 'img.clerk.com'],
  },
};

export default nextConfig;
