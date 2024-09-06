"use client";
import ButtonContainer from "./buttoncontainer";

export default function HeaderRightSection({ onMenuClick }) {
  return (
    <div className="header-container-right">
      <ButtonContainer onMenuClick={onMenuClick} />
    </div>
  );
}
