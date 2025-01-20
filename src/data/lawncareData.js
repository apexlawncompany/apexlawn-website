import CutPackages from "@/src/components/LawncareServices/cutPackages";
import FullPackages from "@/src/components/LawncareServices/fullPackages";
import Hedges from "@/src/components/LawncareServices/hedges";
import AeriationSeeding from "@/src/components/LawncareServices/aeriation";
import Maintenance from "@/src/components/LawncareServices/maintenance";
import FertilizatinWeeding from "@/src/components/LawncareServices/fertilization";

const lawncareData = [
  {
    id: "cut-packages",
    title: "Cut Packages",
    description: `The Cut Package includes service on a biweekly or weekly schedule: <br/>
    <strong>Summer:</strong> (Mar-Oct) Mowing, blowing, string-trimming, & edging. <br/>
    <strong>Winter:</strong> (Nov-Dec) Leaf-removal, & string-trimming (Jan): No service (Feb): Spring Prep`,
    component: CutPackages,
    image: "/assets/cut_package.JPG",
    additionalData: {
      pricingDetails: {
        standard: [
          { size: "Small", price: "$89" },
          { size: "Medium", price: "$109" },
          { size: "Medium-Large", price: "$129" },
          { size: "Large", price: "$149" },
          { size: "Very Large", price: "$Variable (Per Month)" },
        ],
        addon: [
          { size: "Small", price: "$59" },
          { size: "Medium", price: "$69" },
          { size: "Medium-Large", price: "$85" },
          { size: "Large", price: "$95" },
          { size: "Custom", price: "$Variable (Per Month)" },
        ],
      },
    },
  },
  {
    id: "full-packages",
    title: "Full Service Packages",
    pricingDetails: {
      residential: [
        { size: "Small", price: "$109" },
        { size: "Medium", price: "$149" },
        { size: "Medium-Large", price: "$169" },
        { size: "Large", price: "$189 (Per Month)" },
      ],
      commercial: [
        {
          size: "Commercial Maintenance as estimated",
          price:
            "$189 / .5 Acre Lot & $189 /Acre after first Acre (Per Month)​​​​​​​​​​",
        },
      ],
    },
    premiumPricingPara:
      "Premium Service · Small $200 · Medium $225 · Medium-Large $255 · Large $285",
    description: {
      fullService:
        "The Full Service package includes applications on a rotational basis biweekly. A cut package add-on is recommended during the summer for weekly cutting.",
      premiumService:
        "Premium Service is our most advanced package: customized specifically for you. Due to the multitude of services provided, we can adjust different factors -- such as grass height, fertilizer, and herbicide -- to create a positive synergy for your yard.",
    },
    seasonalDetails: {
      summer:
        "During the summer, the package includes Lawn Mowing, String-trimming, Edging, Blowing, Bed Maintenance, Hedge Maintenance, Fertilizer, and Weed Killer (beds, lawn, & driveway).",
      winter:
        "During the winter, it includes Pre-Emergent at the beginning and end of the season, Leaf Cleanup, Hedge Maintenance, Soil Balancing, Soil Testing, Dethatching, Vacuuming, and other services based on grass type.",
    },
    premiumSeasonalDetails: {
      summer:
        "From March 1 to October 31 (8 months, 34 weeks), the premium service includes Lawn Mowing, String-trimming, Edging, Blowing, Bed Maintenance, Hedge Maintenance, Fertilizer, Weed Killer, Lawn Cleanup, and Edge Defining.",
      winter:
        "From November 1 to February 28 (4 months, 18 weeks), it includes Aeration and Dethatching at the beginning and end of the season, Fertilizer, Seeding (depending on grass type), Pre-Emergent at the beginning and end of the season, Hedge Maintenance, Pressure Washing, Blowing and winter debris cleanup, Soil Balancing, and Soil Testing.",
    },
    images: [
      {
        src: "/assets/full_service.JPG",
        alt: "Full Service Image 1",
        width: 300,
        height: 200,
      },
      {
        src: "/assets/full_service2.jpg",
        alt: "Full Service Image 2",
        width: 300,
        height: 400,
      },
    ],
    component: FullPackages,
  },

  {
    id: "hedges",
    title: "Hedges",
    content: [
      {
        description:
          "Hedges can be rounded or squared. Hedge trimming is priced per hedge. Hand-pruning and shaping is also available for an hourly fee.​​​",
        price: "Hedge Trimming S $3 · M $6 · L $9 · O $12",
      },
    ],
    component: Hedges,
    image: "/assets/hedge1.JPG",
  },

  {
    id: "aeriation-seeding",
    title: "Aeriation & Seeding",
    content: [
      {
        description:
          "A core aerator will pull dirt plugs for the ground, allowing soil-decompression, nutrient penetration, and moisture to enter the ground.",
        price: "Aeration S $100 · M $125 · ML $150 · L $175",
      },
      {
        description:
          "Nitrogen and phosphate allow for greater, greener, grass-growth when applied properly by a professional.",
        price: "Seeding Starting at $2/100 sqft",
      },
      {
        description:
          "The lawn is prepared by dethatching and vacuuming. Aeration creates plugs in the ground to allow decompression; seed fertilizer, and lime are spread over the plugs. This allows nutrients to enter directly into the root system.",
        price: "Aeration Package S $380 · M $420 · ML $470 · L $520",
      },
    ],
    image: "/assets/aeriation.JPG",
    component: AeriationSeeding,
  },
  {
    id: "fertilization-weeding",
    title: "Fertilization And Weeding",
    content: [
      {
        description:
          "Cleanup your mulch, flower, or any types of beds by getting rid of the weeds; and have the growth in the cracks of your hard-surfaces sprayed and dried away.",
        price: "Hard-surfaces + Beds S-M $99 ML-L $119",
      },
      {
        description:
          "Whenever dealing with chemicals over a large surface, such as your lawn, trust a professional to apply just the correct amount and type of herbicide to control weeds and stay safe. Pre-emergent and post-emergent are available.",
        price: "Lawn S-M $99 ML-L $119",
      },
      {
        description:
          "Apply both sets of spray to prevent weeds from creeping back into your grass. This also includes spot spraying the lawn with non-selective herbicide for certain weeds.",
        price: "All S $130 · M $145 · ML $165 · L $190​​​​​​​​",
      },
    ],
    image: "/assets/fertilization.jpg",
    component: FertilizatinWeeding,
  },
  {
    id: "maintenance",
    title: "Maintenance & Packages",
    content: [
      {
        description:
          "Year-round maintenance is our solution for those who want to mow the lawn themselves. While you worry about getting the perfect stripes, we'll worry about soil-testing: nitrogen levels, pH levels, phosphate levels, and potassium levels, as well as iron and zinc absorption for your lawn and apply different fertilizers accordingly, as well as tackle tough weeds on your lawn, mulch, and driveway. During the fall and spring, depending on your type of grass, we'll dethatch, aerate, seed, and apply pre-emergent to your lawn.",
        price:
          "Total Maintenance S $59 · M $69 · ML $84 · L $104 · C $Variable (Per Month)",
        services:
          "<strong>Services Included:</strong> Aeration, Fertilization, Dethatching, Pre-Emergent, Lawn Vacuuming, Seeding, Soil Testing, Weed Control",
      },
      {
        description:
          "Spring up the new season with a lawn cleanup. Pre-emergent can reduce up to 70% of weeds and preparing the lawn early encourages even, healthy growth.",
        price: "Spring Prep S $195 · M $215 · ML $240 · L $275",
        services:
          "<strong>Services Included:</strong> Cutting, Dethatching, Vacuuming, Fertilizer, Pre-Emergent",
      },
      {
        description:
          "The cultivation is a great and cost-effective choice for lawn-planting and renewal.",
        price: "Cultivation Package S $440 · M $550 · ML $660 · L $770",
        services:
          "<strong>Services Included:</strong> Power-raking & vacuuming, cultivation (double pass), seeding, fertilization & pre-emergent in three months",
      },
    ],
    image: "/assets/maintenance.jpg",
    component: Maintenance,
  },
];

export default lawncareData;
