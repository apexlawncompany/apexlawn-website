const landScapingServices = [
  {
    id: "mulch",
    title: "Mulch & Ground Cover",
    description: [
      "We make sure your mulch beds are thick, even, and well defined. Purchase, delivery, and cleanup of the mulch are included in the service.",
      'Each cy covers ~100sqft @3" Call for pricing on larger projects.',
    ],
    prices: [
      { label: "$67 per cy starting and $94 for designer mulches", value: 67 },
      { label: "$12.50 per bale for pine straw", value: 12.5 },
      { label: "$198 per cy starting aggregate", value: 198 },
    ],
    image: "/assets/mulch.JPG",
    link: "/mulch",
  },
  {
    id: "sodding",
    title: "Sodding & Seeding",
    description: [
      "We offer premium sodding services for your lawn, ensuring healthy, lush grass.",
    ],
    prices: [{ label: "$150 per pallet for Bermuda grass", value: 150 }],
    image: "/assets/sodding.JPG",
    link: "/sodding",
  },
  {
    id: "drainage",
    title: "Drainage",
    description: [
      "Corrigated drains are hidden and serated, absorbing both excess soil moisture and runoff from small green grates placed in low areas. Our drains are sleeved to resist sediment accumulation within the pipes.",
      "We offer a variety of aesthetically pleasing natural drainage solutions that can channel water from or to a specific area.",
    ],
    prices: [
      { label: "Corrugated", value: null },
      { label: "French", value: null },
    ],
    image: "/assets/drainage.JPG",
    link: "/drainage",
  },
];

export default landScapingServices;
