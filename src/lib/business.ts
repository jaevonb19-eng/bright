// Single source of truth for the business name, address, phone and email.
// Lenders and Apple Business verify that these match everywhere they appear.
export const BUSINESS = {
  legalName: "Amelia Tech & Auto LLC",
  shortName: "Amelia Tech & Auto",
  owner: "Jaevon Bell",
  foundingYear: "2025",
  street: "220 5th St",
  city: "Elyria",
  region: "OH",
  postalCode: "44035",
  addressLine: "220 5th St, Elyria, OH 44035",
  phoneDisplay: "(440) 453-1371",
  phoneE164: "+14404531371",
  email: "jaevonbell@ameliatechauto.com",
  hours: "Mon–Sat 9:00 AM–6:00 PM",
  facebook: "https://www.facebook.com/AmeliaTechAuto",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=220+5th+St+Elyria+OH+44035",
  mapEmbedUrl: "https://www.google.com/maps?q=220+5th+St,+Elyria,+OH+44035&output=embed",
  serviceArea: [
    "Elyria",
    "Lorain",
    "North Ridgeville",
    "Avon",
    "Avon Lake",
    "Amherst",
    "Sheffield Village",
    "Oberlin",
  ],
} as const;

export function buildLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["AutoRepair", "ComputerStore"],
    name: BUSINESS.legalName,
    legalName: BUSINESS.legalName,
    description:
      "Computer sales and repair, custom gaming desktops, and appointment-based mobile automotive service in Elyria, Ohio.",
    telephone: "+1-440-453-1371",
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.street,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      postalCode: BUSINESS.postalCode,
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    founder: { "@type": "Person", name: BUSINESS.owner },
    foundingDate: BUSINESS.foundingYear,
    hasMap: BUSINESS.mapsUrl,
    areaServed: BUSINESS.serviceArea.map((city) => ({
      "@type": "City",
      name: `${city}, OH`,
    })),
    sameAs: [BUSINESS.facebook],
  };
}
