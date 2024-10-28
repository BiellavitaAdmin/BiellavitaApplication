// app/club/layout.js

export const metadata = {
  title: "PrivateEvents | BiellaVita",
  description:
    "Discover exclusive private events at BiellaVita, designed for individuals who appreciate a lifestyle of excellence, nature, and well-being.",
  openGraph: {
    type: "website",
    url: "https://www.biellavita.com/club",
    title: "PrivateEvents | BiellaVita",
    description:
      "Join BiellaVita’s private events, crafted for a community that values exclusivity, wellness, and unique experiences.",
    images: [
      {
        url: "https://i.imgur.com/5sQQ2bY.png",
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

export default function ClubLayout({ children }) {
  return <>{children}</>;
}
