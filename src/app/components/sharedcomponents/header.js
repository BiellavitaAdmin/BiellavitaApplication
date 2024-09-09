"use client";
import "./header.css";
import HeaderLeftSection from "../pagecomponents/headercomponents/headerleftsection";
import HeaderRightSection from "../pagecomponents/headercomponents/headerrightsection";

export default function Header({ onMenuClick, menuOpen }) {
  return (
    <header className="header">
      <HeaderLeftSection />
      <HeaderRightSection onMenuClick={onMenuClick} menuOpen={menuOpen} />
    </header>
  );
}
