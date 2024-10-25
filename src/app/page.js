import MainHeading from "./components/pagecomponents/homepage/mainheading";
import Footer from "./components/sharedcomponents/footer";
import "./page.css";

// Add metadata directly to the page.js
export const metadata = {
  title: "BiellaVita",
  description: "Private social club",
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
