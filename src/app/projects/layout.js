// app/club/layout.js

export const metadata = {
  title: "Projects | BiellaVita",
  description:
    "Explore BiellaVita’s projects, designed to foster a community centered around excellence, nature, and well-being.",
  openGraph: {
    type: "website",
    url: "https://www.biellavita.com/club",
    title: "Projects | BiellaVita",
    description:
      "Discover BiellaVita's initiatives and projects that contribute to a lifestyle of wellness, sustainability, and shared values.",
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
