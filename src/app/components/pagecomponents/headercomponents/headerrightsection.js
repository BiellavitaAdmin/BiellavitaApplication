"use client";
import ButtonContainer from "./buttoncontainer";

export default function HeaderRightSection({ onMenuClick, menuOpen }) {
  return (
    <div className="header-container-right">
      <ButtonContainer onMenuClick={onMenuClick} menuOpen={menuOpen} />
    </div>
  );
}
