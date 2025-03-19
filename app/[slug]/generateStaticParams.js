export async function generateStaticParams() {
  // all possible slugs for static generation
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