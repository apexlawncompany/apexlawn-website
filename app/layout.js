import localFont from "next/font/local";
// import { Open_Sans } from 'next/font/google';
import "./globals.css";
import Header from "@/src/sections/Header";
import Footer from "@/src/sections/Footer";

const OpenSans = localFont({
  src: "./fonts/OpenSans.woff",
  variable: "--font-open-sans",
  weight: "400 600 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${OpenSans.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
