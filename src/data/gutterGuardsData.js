import Cleaning from "../components/GutterGaurds/cleaning";
import gutterGaurd from "../components/GutterGaurds/gutterGaurds";

const gutterGaurdData = [
  {
    id: "cleaning",
    title: "Cleaning",
    content: [
      {
        description:
          "Gutter cleaning is essential to prevent roof leaks. Over time, leaves, pieces, and other debris can break down into sludge preventing water from evacuating your gutters. The excess weight causes the gutters to gradually bend, worsening the problem.",
      },
      {
        description:
          "This can lead to stagnant water causing permanent damage to your gutters, downspouts, leaks, and molding through the edge of your roof.",
      },
      {
        description:
          "Our quick affordable service safeguards your home from costly problems down the road.",
      },
    ],
    image: "/assets/gutter_gaurds_cleaning.jpg",
    component: Cleaning,
  },

  {
    id: "gutter-gaurds",
    title: "Gutter Gaurds",
    content: [
      {
        description:
          "Gutter guards are a great way to protect your home and greatly reduces the frequency cleaning is required.",
      },
      {
        price: "$5/ linear foot",
        description:
          "Vinyl gutter guards are an affordable option that provide good, lightweight protection for your roof.",
      },
      {
        price: "$10/ linear foot",
        description:
          "Our Amerimax R metal gutter guards are have ridges designed to reduce debris buildup, and we warranty our workmanship for 20 years.",
      },
    ],
    image: "/assets/gutter_gaurds.jpg",
    component: gutterGaurd,
  },
];

export default gutterGaurdData;
