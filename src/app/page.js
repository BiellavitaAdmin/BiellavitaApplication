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
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://www.biellavita.com",
    title: "Connect Through BiellaVita | A Private Social Club",
    description:
      "Join BiellaVita, a club for individuals who value excellence, nature, well-being, and the aesthetic and spiritual aspects of life.",
    images: [
      {
        url: "/favicon.ico",
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
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BiellaVita",
    url: "https://www.biellavita.com",
    logo: "https://www.biellavita.com/favicon.ico", // Use your own hosted logo
    description:
      "BiellaVita is born from the desire to connect like-minded individuals who embrace a lifestyle centered around excellence, reverence for nature, well-being, and a deep appreciation for the artistic, aesthetic, culinary, and spiritual dimensions of life.",
    sameAs: [
      "https://www.facebook.com/BiellaVita",
      "https://www.instagram.com/BiellaVita",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "42 Brook Street",
      addressLocality: "London",
      addressRegion: "Europe",
      postalCode: "W1 5DB",
      addressCountry: "GB", // Use ISO 3166-1 Alpha-2 code
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-800-555-5555",
      contactType: "Customer Service",
    },
  };

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
}
