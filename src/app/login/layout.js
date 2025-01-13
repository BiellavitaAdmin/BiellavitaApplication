// app/club/layout.js

export const metadata = {
  title: "Login | BiellaVita",
  description:
    "Log in to your BiellaVita account to access exclusive membership benefits and stay connected with our vibrant community.",
  openGraph: {
    type: "website",
    url: "https://www.biellavita.com/login",
    title: "Login | BiellaVita",
    description:
      "Sign in to BiellaVita and enjoy access to our private club, where excellence, wellness, and shared values come together in a unique experience.",
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

export default function LoginLayout({ children }) {
  return <>{children}</>;
}
