import localFont from "next/font/local";
import "./globals.css";
import Header from "@/src/sections/Header";
import Footer from "@/src/sections/Footer";
import Script from "next/script";
import IMAGES from "@/src/images";

const OpenSans = localFont({
  src: "./fonts/OpenSans.woff",
  variable: "--font-open-sans",
  weight: "400 600 900",
});

export const generateMetadata = () => {
  return {
    title: "Apex Lawn Company",
    description:
      "apex lawn company, lawncare, lawn care, Grass Fertilization, residential lawn maintenance, leaf removal companies, lawn, maintenance service, turf lawn care, Lawn Fertilizer And Weed Control Company, leaf removal services, residential lawn service, Grass Fertilization Service, landscaping companies near me, landscape maintenance contractor, best lawn mowing, fall leaf cleanup, lawn aeration company, lawn aeration costs, lawn services, grass cutting service, lawn maintenance.",
    openGraph: {
      title: "Apex Lawn Company",
      description:
        "apex lawn company, lawncare, lawn care, Grass Fertilization, residential lawn maintenance, leaf removal companies, lawn, maintenance service, turf lawn care, Lawn Fertilizer And Weed Control Company, leaf removal services, residential lawn service, Grass Fertilization Service, landscaping companies near me, landscape maintenance contractor, best lawn mowing, fall leaf cleanup, lawn aeration company, lawn aeration costs, lawn services, grass cutting service, lawn maintenance",
      url: "https://apexlawncompany.com", // Your website URL
      siteName: "Apex Lawn Company",
      type: "website",
      locale: "en_US",
    },
    alternates: {
      canonical: "https://apexlawncompany.com",
    },
    keywords:
      "apex lawn company, lawncare, lawn care, Grass Fertilization, residential lawn maintenance, leaf removal companies, lawn, maintenance service, turf lawn care, Lawn Fertilizer And Weed Control Company, leaf removal services, residential lawn service, Grass Fertilization Service, landscaping companies near me, landscape maintenance contractor, best lawn mowing, fall leaf cleanup, lawn aeration company, lawn aeration costs, lawn services, grass cutting service, lawn maintenance",
    robots: {
      index: true, // Allow search engines to index
      follow: true, // Allow search engines to follow links
      googleBot: "index, follow", // Specific instructions for Google
    },
  };
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-755275043"
        />
        <Script
          id="google-ads"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-755275043');
    `,
          }}
        />

        {/* End Google Tag Manager */}
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-TBW9HHVH');
    `,
          }}
        />

        {/* Fraud Blocker */}
        <Script
          id="fraud-blocker"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      (function () {
        var s = document.createElement("script"),
          h = document.head;
        s.async = 1;
        s.src = "https://monitor.fraudblocker.com/fbt.js?sid=foZzqTgYKvkBW87Or4EhU";
        h.appendChild(s);
      })();
    `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                "@context": "https://schema.org",
              "@type": "LocalBusiness",
                name: "Apex Lawn Company",
                url: "https://apexlawncompany.com/",
                telephone: "+1 919-939-4665",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "501 W Williams St Box 1012",
                  addressLocality: "Apex",
                  addressRegion: "NC",
                  postalCode: "27502",
                  addressCountry: "US",
                },
                areaServed: [
                  { "@type": "City", name: "Apex" },
                  { "@type": "City", name: "Cary" },
                  { "@type": "City", name: "Morrisville" },
                  { "@type": "City", name: "Holly Springs" },
                  { "@type": "City", name: "Raleigh" },
                  { "@type": "City", name: "Chapel Hill" },
                  { "@type": "City", name: "Sanford" },
                  { "@type": "City", name: "Garner" },
                  { "@type": "City", name: "Pittsboro" },
                  { "@type": "City", name: "Moncure" },
                  { "@type": "City", name: "New Hill" },
                  { "@type": "City", name: "Spring Lake" },
                  { "@type": "City", name: "Hope Mills" },
                  { "@type": "City", name: "Fayetteville" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.5",
                  reviewCount: "123",
                },
              },
              null,
              2
            ),
          }}
        />

        <meta
          name="google-site-verification"
          content="4dUl9t48EWmeEmFKFSRvm145FIrZP0ROLTbzHWxMVdk"
        />
        <meta name="description" content="Quality Affordable Lawncare" />
        <meta
          name="keywords"
          content="apex lawn company, lawncare, lawn care, Grass Fertilization, residential lawn maintenance, leaf removal companies, lawn, maintenance service, turf lawn care, Lawn Fertilizer And Weed Control Company, leaf removal services, residential lawn service, Grass Fertilization Service, landscaping companies near me, landscape maintenance contractor, best lawn mowing, fall leaf cleanup, lawn aeration company, lawn aeration costs, lawn services, grass cutting service, lawn maintenance"
        ></meta>
        {IMAGES.map((src, index) => (
          <link key={index} rel="preload" href={src} as="image" />
        ))}
      </head>

      <body className={`${OpenSans.className}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TBW9HHVH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* Fraud Blocker (noscript) */}
        <noscript>
          <a href="https://fraudblocker.com" rel="nofollow">
            <img
              src="https://monitor.fraudblocker.com/fbt.gif?sid=foZzqTgYKvkBW87Or4EhU"
              alt="Fraud Blocker"
            />
          </a>
        </noscript>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
