"use client";
import MainButtonContainer from "./buttoncontainer";

export default function MainHeaderRightSection({ onMenuClick, menuOpen }) {
  return (
    <div className="main-header-container-right">
      <MainButtonContainer onMenuClick={onMenuClick} menuOpen={menuOpen} />
    </div>
  );
}
