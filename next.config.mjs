/** @type {import('next').NextConfig} */

const securityHeaders = [
    {
      key: "Content-Security-Policy",
      value: "default-src 'self' https://satvik-sugandh.vercel.app; img-src 'self' data: https://satvik-sugandh.vercel.app; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://satvik-sugandh.vercel.app; style-src 'self' 'unsafe-inline' https://satvik-sugandh.vercel.app; font-src 'self' data: https://satvik-sugandh.vercel.app; connect-src 'self' https://satvik-sugandh.vercel.app;",
    },
    {
        key: "X-Frame-Options",
        value: "DENY", // Prevents clickjacking
      },
      {
        key: "X-Content-Type-Options",
        value: "nosniff", // Blocks MIME sniffing
      },
      {
        key: "Referrer-Policy",
        value: "strict-origin-when-cross-origin", 
        // Safe balance between privacy + analytics
      },
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=()", 
        // Disables these APIs unless you explicitly need them
      },
  ];
const nextConfig = {

    async headers() {
        return [
          {
            source: "/(.*)", // apply to all routes
            headers: securityHeaders,
          },
        ];
      },
};

export default nextConfig;
