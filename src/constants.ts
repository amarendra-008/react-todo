export const DEFAULT_TODOS = [
  {
    id: 1,
    title: "Hydrogen",
    description:
      "The lightest and most abundant element in the universe, essential for water and organic compounds",
    isChecked: true,
  },
  {
    id: 2,
    title: "Helium",
    description:
      "A noble gas used in balloons and as a cooling medium for superconducting magnets",
    isChecked: false,
  },
  {
    id: 3,
    title: "Lithium",
    description:
      "A soft alkali metal used in rechargeable batteries and mood-stabilizing medications",
    isChecked: true,
  },
  {
    id: 4,
    title: "Beryllium",
    description:
      "A lightweight metal used in aerospace applications and X-ray windows",
    isChecked: false,
  },
  {
    id: 5,
    title: "Carbon",
    description:
      "The basis of all organic life, forms diamonds, graphite, and is key to all living organisms",
    isChecked: true,
  },
  {
    id: 6,
    title: "Nitrogen",
    description:
      "Makes up 78% of Earth's atmosphere and is essential for proteins and DNA",
    isChecked: false,
  },
  {
    id: 7,
    title: "Oxygen",
    description:
      "Essential for respiration and combustion, makes up 21% of Earth's atmosphere",
    isChecked: true,
  },
  {
    id: 8,
    title: "Fluorine",
    description:
      "The most reactive element, used in toothpaste and non-stick coatings",
    isChecked: false,
  },
  {
    id: 9,
    title: "Neon",
    description:
      "A noble gas famous for its use in bright, colorful advertising signs",
    isChecked: true,
  },
  {
    id: 10,
    title: "Sodium",
    description:
      "A soft, reactive metal essential for nerve function and part of table salt",
    isChecked: false,
  },
];
export type Todo = (typeof DEFAULT_TODOS)[0];
