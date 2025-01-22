import Deicing from "../components/DeIcing/deicingService";
import SnowRemoval from "../components/DeIcing/snowRemovalService";

const deicingData = [
  {
    id: "de-icing",
    title: "De-Icing",
    content: [
      {
        description:
          "Say goodbye to icy hazards and ensure your driveway is safe and accessible with our professional de-icing services. We provide high-quality de-icing solutions to protect surfaces from damage.",
        price: "Residential Drive & Path · S $45 · L $90",
      },
      {
        description:
          "We offer scalable services for commercial and large residential estates.<br> <strong>Coverage Areas :</strong>Driveways, walkways, parking lots, and more.<br> Calcium Chloride 100% biodegradable road salt is used.",
        price: "Commercial & Estate $3/100 sqft",
      },
    ],
    image: "/assets/de_icing.jpg",
    component: Deicing,
  },

  {
    id: "snow-removal",
    title: "Snow Removal",
    content: [
      {
        description:
          "Winter weather can be tough, but clearing your driveway doesn’t have to be! We offer reliable and affordable snow removal services to make your life easier. We’re ready to keep your driveway snow-free and safe.",
        price: 'Residential Drive & Path  · S $75 · L $150 @ 2"',
      },
      {
        description:
          "Keep your commercial property or estate safe and accessible this winter with our professional snow removal services.</br> Overnight and same day removal service availabe for commercial and estate. <strong>Coverage Areas :</strong>Driveways, walkways, parking lots, and more.<br> Reliable Service: Prompt snow clearing to minimize disruptions",
        price: "Commercial & Estate Contact us for Pricing",
      },
    ],
    image: "/assets/snow_removal.webp",
    component: SnowRemoval,
  },
];

export default deicingData;
