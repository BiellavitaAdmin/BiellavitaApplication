// app/club/layout.js

export const metadata = {
  title: "The Club | BiellaVita",
  description:
    "Join BiellaVita, a club for individuals who value excellence, nature, and well-being.",
  openGraph: {
    type: "website",
    url: "https://www.biellavita.com/club",
    title: "The Club | BiellaVita",
    description:
      "Experience the BiellaVita lifestyle through exclusive membership.",
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

export default function ClubLayout({ children }) {
  return <>{children}</>;
}
