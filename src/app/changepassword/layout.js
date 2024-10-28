// app/club/layout.js

export const metadata = {
  title: "Change Password | BiellaVita",
  description:
    "Securely update your BiellaVita account password to ensure continuous, safe access to our exclusive club community.",
  openGraph: {
    type: "website",
    url: "https://www.biellavita.com/changepassword",
    title: "Change password | BiellaVita",
    description:
      "Easily change your BiellaVita account password and maintain secure access to your private club membership and benefits.",
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

export default function ChangePasswordLayout({ children }) {
  return <>{children}</>;
}
