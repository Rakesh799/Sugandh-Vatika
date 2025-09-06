import "./globals.css";

export const metadata = {
  title: "Sugandh Vatika",
  description: "sugandh vatika",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
