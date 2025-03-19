import { redirect } from "next/navigation";
import Head from "next/head";

const redirects = {
  "apex-lawn-company": "/",
  "lawn-care-in-apex": "/lawncare",
  "best-lawn-care-services-in-apex": "/lawncare",
  "landscaping-in-apex": "/landscape",
  "best-landscaping-company-in-apex": "/landscape",
  "mulch-installation-in-apex": "/mulch",
};

export async function generateStaticParams() {
  // All possible slugs for static generation
  const slugs = [
    "apex-lawn-company",
    "lawn-care-in-apex",
    "best-lawn-care-services-in-apex",
    "landscaping-in-apex",
    "best-landscaping-company-in-apex",
    "mulch-installation-in-apex",
  ];

  // Return an array of params objects
  return slugs.map((slug) => ({ slug }));
}

export default function NonCanonicalPage({ params }) {
  const slug = params.slug;

  // Handle redirection on the server side
  if (redirects[slug]) {
    redirect(redirects[slug]);
  } else {
    redirect("/");
  }

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
    </>
  );
}