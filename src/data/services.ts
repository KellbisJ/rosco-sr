// One entry = one page at /services/<slug>/.
// Every claim here traces to PRODUCT.md, the flyer, or a real job photo.
import { Bath, CookingPot, Grid2x2, Hammer, Layers } from "@lucide/astro";
import { SITE, crop, photo } from "../site";

// Before and after cut from the same composite and aligned on fixed
// landmarks (grate and hearth; pot and gate), so the sweep strips back one
// scene instead of swapping two. Only pairs that genuinely line up go here.
export interface Reveal {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  width: number;
  height: number;
}

export const fireplaceReveal: Reveal = {
  before: crop("6.webp", 137, 407, 466, 466),
  after: crop("6.webp", 865, 459, 362, 362),
  beforeAlt: "Timber fireplace mantel with a mirror, before removal, in a Perth home",
  afterAlt: "The same fireplace after the mantel came off, left intact",
  width: 466,
  height: 466,
};

export const pergolaReveal: Reveal = {
  before: crop("1.webp", 7, 150, 246, 369),
  after: crop("1.webp", 461, 150, 311, 467),
  beforeAlt: "Timber pergola over the side path of a Perth home, before removal",
  afterAlt: "The same side path with the pergola taken down, open to the sky",
  width: 246,
  height: 369,
};

export interface ServicePhoto {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  reveal?: Reveal;
}

export interface Service {
  slug: string;
  name: string;
  blurb: string;
  title: string;
  description: string;
  heading: string;
  lead: string;
  listTitle: string;
  list: string[];
  photos: ServicePhoto[];
  icon: typeof Bath;
}

const callOrText = `Call or text ${SITE.phone}.`;

export const services: Service[] = [
  {
    slug: "bathroom-strip-out",
    name: "Bathroom Strip Outs",
    blurb: "Fixtures and tiles out, walls back to render, rubbish gone.",
    title: `Bathroom Strip Outs Perth | ${SITE.name}`,
    description: `Bathroom strip outs across Perth. Fixtures and tiles out, rubbish taken away, room left clean for the next trade. ${callOrText}`,
    heading: "Bathroom Strip Outs in Perth",
    lead: "Your old bathroom comes out, right back to bare walls and floor. The rubbish goes with us, and the room is left clean and ready for the next trade.",
    listTitle: "What comes out",
    list: [
      "Vanity, toilet, bath and shower",
      "Shower screens, mirrors and towel rails",
      "Wall and floor tiles",
      "Tile adhesive, with walls taken back to render",
      "All the rubbish, carted away",
    ],
    photos: [
      {
        src: photo("2.webp"),
        width: 1280,
        height: 1280,
        alt: "Bathroom walls before and after tile removal, taken back to render in a Perth home",
        caption: "Tiles and adhesive off, walls back to render",
      },
    ],
    icon: Bath,
  },
  {
    slug: "kitchen-removal",
    name: "Kitchen Removal",
    blurb: "Cabinets, benchtops and tiles out so the new kitchen can go in.",
    title: `Kitchen Removal Perth | ${SITE.name}`,
    description: `Kitchen removal in Perth. Cabinets, benchtops and tiles out, rubbish taken away, space left clean for the new kitchen. ${callOrText}`,
    heading: "Kitchen Removal in Perth",
    lead: "The old kitchen comes out so the new one can go straight in. Cabinets, benchtops and tiles out, the rubbish goes with us, and the space is left clean.",
    listTitle: "What comes out",
    list: [
      "Base and overhead cabinets",
      "Benchtops and sink",
      "Splashback tiles",
      "Floor tiles, if they're going too",
      "All the rubbish, carted away",
    ],
    photos: [
      {
        src: photo("Renovations/6257921321014595423.jpg"),
        width: 720,
        height: 1280,
        alt: "Old Perth kitchen with cream cabinets and an electric stove, before renovation",
        caption: "Before: the old kitchen",
      },
      {
        src: photo("Renovations/6257921321014595405.jpg"),
        width: 810,
        height: 1280,
        alt: "The same Perth kitchen after renovation, with new cabinets and a marble-look splashback",
        caption: "After: same kitchen, renovated",
      },
    ],
    icon: CookingPot,
  },
  {
    slug: "floor-tile-removal",
    name: "Floor & Tile Removal",
    blurb: "Tiles and old flooring up, glue scraped back, slab left clean.",
    title: `Floor & Tile Removal Perth | ${SITE.name}`,
    description: `Floor and tile removal across Perth. Tiles and old flooring up, adhesive scraped back, slab left clean for your new floor. ${callOrText}`,
    heading: "Floor & Tile Removal in Perth",
    lead: "Tiles and old flooring come up, the glue gets scraped back, and the slab is left clean and ready for your new floor.",
    listTitle: "What comes up",
    list: [
      "Floor tiles",
      "Old flooring and underlay",
      "Glue and adhesive, scraped back",
      "All the rubbish, carted away",
    ],
    photos: [
      {
        src: photo("4.webp"),
        width: 960,
        height: 1280,
        alt: "Worker scraping the remains of an old floor off a concrete slab in a Perth home",
        caption: "Scraping back what's left of the old floor",
      },
      {
        src: photo("11.webp"),
        width: 591,
        height: 1280,
        alt: "Empty room stripped back to a clean concrete slab, Perth",
        caption: "Slab left clean, ready for the new floor",
      },
    ],
    icon: Grid2x2,
  },
  {
    slug: "non-structural-demolition",
    name: "Non-Structural Demolition",
    blurb: "Pergolas, fireplace surrounds, shelving: down and carted away.",
    title: `Non-Structural Demolition Perth | ${SITE.name}`,
    description: `Light, non-structural demolition in Perth. Pergolas, fireplace surrounds and shelving taken down carefully and carted away. ${callOrText}`,
    heading: "Non-Structural Demolition in Perth",
    lead: "The small demo jobs that come before a reno. Taken down carefully, without wrecking what's staying, and carted away.",
    listTitle: "What we take down",
    list: [
      "Pergolas",
      "Fireplace mantels and surrounds",
      "Shelving and brackets",
      "All the rubbish, carted away",
    ],
    photos: [
      {
        src: photo("6.webp"),
        width: 1280,
        height: 1280,
        alt: "Before and after of a timber fireplace mantel removed with the fireplace left intact, Perth",
        caption: "Mantel off, fireplace left intact",
        reveal: fireplaceReveal,
      },
      {
        src: photo("1.webp"),
        width: 800,
        height: 800,
        alt: "Before and after of a pergola taken down beside a Perth home",
        caption: "Pergola down and gone",
        reveal: pergolaReveal,
      },
      {
        src: photo("3.webp"),
        width: 1280,
        height: 960,
        alt: "Wall shelving and brackets being removed on a Perth job",
        caption: "Wall shelving coming down",
      },
    ],
    icon: Hammer,
  },
  {
    slug: "floor-grinding",
    name: "Floor Grinding & Surface Prep",
    blurb: "Slab ground back and cracks repaired, ready for the next trade.",
    title: `Floor Grinding & Surface Prep Perth | ${SITE.name}`,
    description: `Concrete floor grinding, crack repair and surface prep in Perth, so new tiles or flooring go down on a clean, flat base. ${callOrText}`,
    heading: "Floor Grinding & Surface Prep in Perth",
    lead: "New tiles or flooring are only as good as what's under them. We grind the slab back, repair cracks and leave a clean surface for the next trade.",
    listTitle: "What we do",
    list: [
      "Concrete floor grinding",
      "Crack repair",
      "Old adhesive ground off",
      "Walls taken back to render",
      "Concrete cutting and core drilling",
    ],
    photos: [
      {
        src: photo("12.webp"),
        width: 960,
        height: 1280,
        alt: "Worker preparing a bare concrete floor on a Perth job",
        caption: "Surface prep on a bare slab",
      },
      {
        src: photo("10.webp"),
        width: 591,
        height: 1280,
        alt: "Room with a clean, bare concrete floor ready for the next trade, Perth",
        caption: "Ready for the next trade",
      },
    ],
    icon: Layers,
  },
];
