// app/club/layout.js

export const metadata = {
  title: "Partnerships | BiellaVita",
  description:
    "Explore partnership opportunities with BiellaVita, where we connect with organizations that share our values of excellence, nature, and well-being.",
  openGraph: {
    type: "website",
    url: "https://www.biellavita.com/partnership",
    title: "Partnerships | BiellaVita",
    description:
      "Partner with BiellaVita and join us in promoting a lifestyle of wellness, sustainability, and shared values for a positive impact.",
    images: [
      {
        url: "https://i.postimg.cc/90f7Sqxg/Biellavita-red.webp",
        width: 1200,
        height: 630,
        alt: "Biella Vita - A Private Social Club",
      },
    ],
    site_name: "BiellaVita",
    locale: "en_US",
    "article:section": "Lifestyle",
    "article:tag": ["Social Club", "Well-being", "Lifestyle"],
  },
};

export default function PartnershipLayout({ children }) {
  return <>{children}</>;
}
