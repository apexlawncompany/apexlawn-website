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
        <meta
          name="keywords"
          content="apex lawn company, lawncare, lawn care, Grass Fertilization, residential lawn maintenance, leaf removal companies, lawn, maintenance service, turf lawn care, Lawn Fertilizer And Weed Control Company, leaf removal services, residential lawn service, Grass Fertilization Service, landscaping companies near me, landscape maintenance contractor, best lawn mowing, fall leaf cleanup, lawn aeration company, lawn aeration costs, lawn services, grass cutting service, lawn maintenance"
        ></meta>
      </head>
      <body className={`${OpenSans.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
