import MainHeading from "./components/pagecomponents/homepage/mainheading";
import Footer from "./components/sharedcomponents/footer";
import "./page.css";

// Add metadata directly to the page.js
export const metadata = {
  title: "Home | BiellaVita",
  description:
    "BiellaVita is born from the desire to connect like-minded individuals who embrace a lifestyle centered around excellence, reverence for nature, well-being, and a deep appreciation for the artistic, aesthetic, culinary and spiritual dimensions of life.",
  canonical: "https://www.biellavita.com",
  icons: {
    icon: "https://i.imgur.com/5sQQ2bY.png", // Reference your favicon here
    apple: "https://i.imgur.com/5sQQ2bY.png", // Optional, for Apple devices
  },
  openGraph: {
    type: "website",
    url: "https://www.biellavita.com",
    title: "Home | BiellaVita",
    description:
      "BiellaVita is born from the desire to connect like-minded individuals who embrace a lifestyle centered around excellence, reverence for nature, well-being, and a deep appreciation for the artistic, aesthetic, culinary and spiritual dimensions of life.",
    images: [
      {
        url: "https://i.imgur.com/5sQQ2bY.png", // Link to an Imgur-hosted image for social sharing
        width: 1200,
        height: 630,
        alt: "Biella Vita social preview",
      },
    ],

    site_name: "BiellaVita",
    locale: "en_US",
  },
};

export default function Home() {
  return (
    <main className="homepage">
      {/* <video autoPlay muted loop className="background-video">
        <source src="/Slowed background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className="overlay"></div>
      <MainHeading />
      <Footer />
    </main>
  );
}
