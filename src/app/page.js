import MainHeading from "./components/pagecomponents/homepage/mainheading";
import Footer from "./components/sharedcomponents/footer";
import "./page.css";
import Head from "next/head";

// Add metadata directly to the page.js
export const metadata = {
  title: "Home | BiellaVita",
  description:
    "BiellaVita is born from the desire to connect like-minded individuals who embrace a lifestyle centered around excellence, reverence for nature, well-being, and a deep appreciation for the artistic, aesthetic, culinary and spiritual dimensions of life.",
  canonical: "https://www.biellavita.com",
  icons: {
    icon: "https://i.imgur.com/5sQQ2bY.png",
    apple: "https://i.imgur.com/5sQQ2bY.png",
  },
  openGraph: {
    type: "website",
    url: "https://www.biellavita.com",
    title: "Connect Through BiellaVita | A Private Social Club",
    description:
      "Join BiellaVita, a club for individuals who value excellence, nature, well-being, and the aesthetic and spiritual aspects of life.",
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

export default function Home() {
  return (
    <>
      {/* <Head>
        <title>Home | BiellaVita</title>
        <meta
          name="description"
          content="Join BiellaVita, a club for individuals who value excellence, nature, and well-being."
        />
        <meta property="og:title" content="The Club | BiellaVita" />
        <meta
          property="og:description"
          content="Experience the BiellaVita lifestyle through exclusive membership."
        />
        <meta property="og:image" content="https://i.imgur.com/5sQQ2bY.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://www.biellavita.com/club" />
      </Head> */}
      <main className="homepage">
        {/* <video autoPlay muted loop className="background-video">
        <source src="/Slowed background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
        <div className="overlay"></div>
        <MainHeading />
        <Footer />
      </main>
    </>
  );
}
