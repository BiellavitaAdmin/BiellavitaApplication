// app/club/layout.js

export const metadata = {
  title: "Membership | BiellaVita",
  description:
    "Discover membership opportunities at BiellaVita, a club for those who value excellence, nature, well-being, and a unique community experience.",
  openGraph: {
    type: "website",
    url: "https://www.biellavita.com/club",
    title: "Membership | BiellaVita",
    description:
      "Join BiellaVita and access exclusive benefits tailored to a lifestyle of excellence, well-being, and shared values.",
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

export default function MembershipLayout({ children }) {
  return <>{children}</>;
}
