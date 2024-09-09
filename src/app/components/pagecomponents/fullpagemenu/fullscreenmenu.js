"use client";
import "./fullscreenmenu.css";
import FullScreenMenuHeader from "./fullscreenmenuheader";
import FullPageMenuContainer from "./fullpagemenucomponents/fullpagemenucontents";
import FullPageMenuFooter from "./fullpagemenucomponents/fullpagemenufooter";

export default function FullScreenMenu({ closeMenu }) {
  return (
    <div className="full-screen-menu">
      <FullScreenMenuHeader closeMenu={closeMenu} />
      <nav className="navigation-container">
        <FullPageMenuContainer />
      </nav>
      <FullPageMenuFooter />
    </div>
  );
}
