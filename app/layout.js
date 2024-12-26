import localFont from "next/font/local";
// import { Open_Sans } from 'next/font/google';
import "./globals.css";
import Header from "@/src/sections/Header";
import Footer from "@/src/sections/Footer";
import { basePath } from "@/next.config";

const OpenSans = localFont({
  src: "./fonts/OpenSans.woff",
  variable: "--font-open-sans",
  weight: "400 600 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Apex Lawn Company</title>
        <meta name="description" content="Quality Affordable Lawncare" />
        <link rel="icon" href={`${basePath}/apex-lawn-icon.png`} />
      </head>
      <body className={`${OpenSans.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
