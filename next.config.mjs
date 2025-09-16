/** @type {import('next').NextConfig} */

const securityHeaders = [
    {
      key: "Content-Security-Policy",
      value: "default-src 'self' https://satvik-sugandh.vercel.app; img-src 'self' data: https://satvik-sugandh.vercel.app; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://satvik-sugandh.vercel.app; style-src 'self' 'unsafe-inline' https://satvik-sugandh.vercel.app; font-src 'self' data: https://satvik-sugandh.vercel.app; connect-src 'self' https://satvik-sugandh.vercel.app;",
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
