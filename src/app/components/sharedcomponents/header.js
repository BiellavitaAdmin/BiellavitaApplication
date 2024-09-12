"use client";
import "./header.css";
import MainHeaderLeftSection from "../pagecomponents/headercomponents/headerleftsection";
import MainHeaderRightSection from "../pagecomponents/headercomponents/headerrightsection";

export default function Header({ onMenuClick, menuOpen }) {
  return (
    <header className="main-header">
      <MainHeaderLeftSection />
      <MainHeaderRightSection onMenuClick={onMenuClick} menuOpen={menuOpen} />
    </header>
  );
}
