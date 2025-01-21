// app/club/layout.js

export const metadata = {
  title: "Vision & Mission | BiellaVita",
  description:
    "Explore BiellaVita’s vision and mission—centered on fostering a community of individuals committed to excellence, nature, and personal growth.",
  openGraph: {
    type: "website",
    url: "https://www.biellavita.com/visionandmission",
    title: "Vision & Mission | BiellaVita",
    description:
      "Discover BiellaVita's commitment to a lifestyle rooted in wellness, sustainability, and a deep appreciation for aesthetic, culinary, and spiritual experiences. Join a community dedicated to making a positive impact.",
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

export default function VissionAndMissionLayout({ children }) {
  return <>{children}</>;
}
