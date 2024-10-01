"use client";
import { useState, useEffect } from "react";
import { Dropdown, Menu, Tooltip } from "antd"; // Import Tooltip for tooltips
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import Cookies from "js-cookie"; // Import Cookies
import Image from "next/image"; // Import Image for PNGs

export default function MainButtonContainer({ onMenuClick, menuOpen }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to check if user is logged in
  const router = useRouter(); // Initialize router

  useEffect(() => {
    const token = localStorage.getItem("token"); // Check for token in local storage
    setIsLoggedIn(!!token); // Update login state based on token presence
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear local storage token
    Cookies.remove("token"); // Remove token cookie
    setIsLoggedIn(false); // Update login state
    router.push("/login"); // Redirect to login page
  };

  const handleChangePassword = () => {
    router.push("/changepassword"); // Redirect to change password page
  };

  const handleLogin = () => {
    // Instead of simulating login, redirect to login page
    router.push("/login"); // Redirect to login page
  };

  // Menu items for dropdown when logged in
  const menuItems = (
    <Menu>
      <Menu.Item key="change-password" onClick={handleChangePassword}>
        <Image
          src="/change-password.png"
          alt="Change Password Icon"
          width={24}
          height={24}
        />{" "}
        Change Password
      </Menu.Item>
      <Menu.Item key="logout" onClick={handleLogout}>
        <Image src="/logout.png" alt="Logout Icon" width={24} height={24} />{" "}
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="main-button-group-container">
      {isLoggedIn ? (
        // Dropdown for logged-in user with settings and logout options
        <Dropdown
          overlay={menuItems}
          trigger={["click"]}
          placement="bottomLeft" // Opens dropdown towards the left
        >
          <button className="circular-button">
            <Tooltip title="Settings">
              <Image
                src="/settings.png"
                alt="Settings Icon"
                width={28}
                height={28}
              />
            </Tooltip>
          </button>
        </Dropdown>
      ) : (
        // User icon when not logged in
        <button className="circular-button" onClick={handleLogin}>
          <Tooltip title="Login">
            <Image src="/user.png" alt="User Icon" width={28} height={28} />
          </Tooltip>
        </button>
      )}
      <button className="circular-button" onClick={onMenuClick}>
        <img
          src={menuOpen ? "/cross.png" : "/dots.png"}
          alt={menuOpen ? "Close menu" : "Open menu"}
          width={28}
          height={28}
        />
      </button>
    </div>
  );
}
