"use client"; // Mark this component as client-side

import "./header.css";
import HeaderLeftSection from "../pagecomponents/headercomponents/headerleftsection";
import HeaderRightSection from "../pagecomponents/headercomponents/headerrightsection";

export default function Header() {
  return (
    <header className="header">
      <HeaderLeftSection />
      <HeaderRightSection />
    </header>
  );
}
