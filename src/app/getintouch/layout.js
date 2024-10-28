// app/club/layout.js

export const metadata = {
  title: "Get In Touch | BiellaVita",
  description:
    "Connect with BiellaVita to learn more about our exclusive club and how to join a community that values excellence, nature, and well-being.",
  openGraph: {
    type: "website",
    url: "https://www.biellavita.com/getintouch",
    title: "Get In Touch | BiellaVita",
    description:
      "Reach out to BiellaVita and discover how you can be part of a club where excellence and shared values unite for unique experiences.",
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

export default function GetInTouchLayout({ children }) {
  return <>{children}</>;
}
