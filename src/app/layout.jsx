import "./globals.css";
import { Poppins } from 'next/font/google';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "SatvikSugandh",
  description: "Discover divine fragrances at SatvikSugandh - your trusted online store for premium dhoop, agarbatti, and natural incense sticks. Perfect for pooja, meditation, and creating a peaceful ambiance. Shop pure aromas today!",
  verification: {
    google: "google-site-verification=t5_rwvubrQGzJVOHwhAFGq7IOhvxahE4C3-SLpc3uFk",
  },
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
        {/* <!-- Google tag (gtag.js) --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1L8S2FLZS8"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'G-1L8S2FLZS8');
        </script>
      </head>
      <body className={`${poppins.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
