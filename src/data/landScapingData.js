import MulchSection from "@/src/components/LandScapingServices/mulchSection";
import SoddingSeedingSection from "../components/LandScapingServices/soddingSeedingSection";
import DrainageSection from "../components/LandScapingServices/drainageSection";
import SoilSection from "../components/LandScapingServices/soilSection";
import HardScapingSection from "../components/LandScapingServices/hardScapingSection";

const landscapingdata = [
  {
    id: "mulch",
    title: "Mulch & Ground Cover",
    details: [
      {
        price: "$67 per cy starting and $94 for designer mulches",
        description:
          'We make sure your mulch beds are thick, even, and well defined. Purchase, delivery, and cleanup of the mulch are included in the service. Each cy covers ~100sqft @3" Call for pricing on larger projects.',
      },
      {
        price: "$12.50 per bale for pine straw",
        description:
          "We supply long-leaf pinestraw from farms that preserve the endangered long-leaf pine. Long-leaf needles last longer and are more vibrant. 5 bales cover 200sqft.",
      },
      {
        price: "$198 per cy starting aggregate",
        description:
          'We offer 1" gravel for driveways and 1" ABC stone for areas requiring less permiation, decorative gravel for walkways and garden beds, and aggregates such as sand for a variety of applications.',
      },
    ],
    image: "/assets/mulch.JPG",
    link: "/mulch",
    component: MulchSection,
  },

  {
    id: "sodding",
    title: "Sodding & New Lawns",
    details: [
      {
        price: "For over-seeding, please refer to lawncare page​​​​​",
        description:
          "Time for a new lawn fast? Prep, leveling, sod, and placement are all you need from Apex Lawn Company. We also plant lawns from seed! Sod removal is also availible. Contact for pricing and more information.",
      },
    ],
    image: "/assets/sodding.jpg",
    link: "/sod",
    component: SoddingSeedingSection,
  },

  {
    id: "drainage",
    title: "Drainage",
    details: [
      {
        price: "C​orrugated​​​​​",
        description:
          "Corrigated drains are hidden and serated, absorbing both exess soil moisture and runoff from small green grates placed in low areas. Our drains are sleeved to resist sediment accumulation with the pipes.",
      },
      {
        price: "French​​​​​",
        description:
          "We offer a vaireity of aesthetically pleasing natural drainage solutions that can channel water from or to a specific area.",
      },
    ],
    image: "/assets/drainage.JPG",
    link: "/drainage",
    component: DrainageSection,
  },

  {
    id: "soil",
    title: "Soil Delivery & Spreading",
    details: [
      {
        price: "Uses and Benefits of TopDressing",
        description:
          "We provide a variety of soil mixes for different applications. Adding soil to your lawn, especially clay soils, introduces organic matter provides nutrients and reduces stress on grass. This increases blade density, brightness, and texture.",
      },
      {
        price: "$92 per cubic yard of topsoil​​​​​​​​​​ or compost",
        description:
          "Includes purhchase, delivery, spreading, and cleanup.​​​​​ Our standard, eco-friendly, topsoil is made from a combination of manure, soil, and recyled organic matter.",
      },
      {
        price: "$102 per cubic yard for ALC70/30®",
        description:
          "Our certified compost is heated to 150° F to fully cure. This reduces fungal spores, pathogens, and weeds. The fine texture of our compost sifts through grass smoothly for top-dressing applications.​​​​ ALC70/30 is a custom blend of coarse sand and compost to improve soil drainage as well as fertility.",
      },
    ],
    image: "/assets/soil.JPG",
    link: "/soil",
    component: SoilSection,
  },

  {
    id: "hardScaping",
    title: "H​ardscaping",
    details: [
      {
        price: "General Labor",
        description:
          "General labor is $79 an hour per person. Our equipment allows our technicians to delivery high productivity in limited time.",
      },
      {
        price: "Patios & Walkways",
        description:
          "Hard-surfaces generally cost $15/sqft. We offer a variety of materials. Our project quotes include base layer and drainage to ensure a stable, long-lasting surface.",
      },
      {
        price: "B​orders",
        description:
          "Wood, Synthetich, & Stone, starting at $6/linear ft. Pleae contact for more information​.",
      },
    ],
    image: "/assets/hardScaping.JPG",
    link: "/hardscape",
    component: HardScapingSection,
  },
];

export default landscapingdata;
