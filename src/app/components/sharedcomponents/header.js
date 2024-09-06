"use client";
import "./header.css";
import HeaderLeftSection from "../pagecomponents/headercomponents/headerleftsection";
import HeaderRightSection from "../pagecomponents/headercomponents/headerrightsection";

export default function Header({ onMenuClick }) {
  return (
    <header className="header">
      <HeaderLeftSection />
      <HeaderRightSection onMenuClick={onMenuClick} />
    </header>
  );
}
