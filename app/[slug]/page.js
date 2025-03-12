"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
const redirects = {
  "apex-lawn-company": "/",
  "lawn-care-in-apex": "/lawncare",
  "best-lawn-care-services-in-apex": "/lawncare",
  "landscaping-in-apex": "/landscape",
  "best-landscaping-company-in-apex": "/landscape",
  "mulch-installation-in-apex": "/mulch",
};
export default function NonCanonicalPage({ params }) {
  const router = useRouter();
  const [slug, setSlug] = useState(null);
  useEffect(() => {
    params.then((unwrappedParams) => {
      setSlug(unwrappedParams.slug);
    });
  }, [params]);
  useEffect(() => {
    if (slug) {
      if (redirects[slug]) {
        router.replace(redirects[slug]);
      } else {
        router.replace("/");
      }
    }
  }, [slug, router]);
  return (
    <>
      <Head>
        <title>
          {slug ? slug.replace("-", " ") : "Redirecting"} — Apex Lawn Company
        </title>
        <meta name="robots" content="noindex, nofollow" />
        {slug && redirects[slug] && (
          <link
            rel="canonical"
            href={`https://apexlawncompany.com${redirects[slug]}`}
          />
        )}
      </Head>
      {/* <p>Redirecting...</p> */}
    </>
  );
}
