// Business facts in one place — a rename or new number is a one-line change.
// Keep in lockstep with PRODUCT.md: nothing here is invented.
export const SITE = {
  name: "ROSCO S&R",
  url: "https://rosco-sr.com",
  logo: "https://ik.imagekit.io/137/rosco-sr/rosco-sr.png",
  phone: "0406 917 864",
  phoneTel: "+61406917864",
  email: "rosco.s.r.service@gmail.com",
  // Google Analytics 4 measurement ID ("G-XXXXXXXXXX"). Empty = no tracking.
  gaId: "",
};

// Real job photos on ImageKit.
export const photo = (path: string) =>
  `https://ik.imagekit.io/137/rosco-sr/${path}`;

// A region cut out of a photo — splits the before/after composites into
// separate, aligned layers for the strip-back reveal.
export const crop = (path: string, x: number, y: number, w: number, h: number) =>
  `${photo(path)}?tr=cm-extract,x-${x},y-${y},w-${w},h-${h}`;
