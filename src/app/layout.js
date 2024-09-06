import { Playfair_Display } from "next/font/google";
import "./styles/globals.css";

// Import Playfair Display font with italic style
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"], // Add italic style
  weight: ["400", "500", "600", "700", "800", "900"], // You can add regular and bold weights
});

export const metadata = {
  title: "BiellaVita",
  description: "Private social club",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={playfairDisplay.className}>{children}</body>
    </html>
  );
}
