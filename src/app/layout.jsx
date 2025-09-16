import "./globals.css";
import { Poppins } from 'next/font/google';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "SatvikSugandh",
  description: "Discover divine fragrances at SatvikSugandh - your trusted online store for premium dhoop, agarbatti, and natural incense sticks. Perfect for pooja, meditation, and creating a peaceful ambiance. Shop pure aromas today!",
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
    ],
    apple: '/apple-touch-icon.png',
  },

};

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
  variable: '--font-poppins',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <meta
          httpEquiv="Content-Security-Policy"
          content="
            default-src 'self' https://satvik-sugandh.vercel.app/ http://localhost:3000;
            img-src 'self' data: https://satvik-sugandh.vercel.app/ http://localhost:3000;
            script-src 'self' 'unsafe-inline' 'unsafe-eval' https://satvik-sugandh.vercel.app/ http://localhost:3000;
            style-src 'self' 'unsafe-inline' https://satvik-sugandh.vercel.app/ http://localhost:3000;
            font-src 'self' data: https://satvik-sugandh.vercel.app/ http://localhost:3000;
            connect-src 'self' https://satvik-sugandh.vercel.app/ http://localhost:3000;"
        />
    </head>
      <body className={`${poppins.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
