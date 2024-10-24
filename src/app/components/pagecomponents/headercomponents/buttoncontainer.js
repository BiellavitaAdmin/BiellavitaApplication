"use client";
import { useState, useEffect } from "react";
import { Dropdown, Menu, Tooltip } from "antd";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Image from "next/image";

export default function MainButtonContainer({ onMenuClick, menuOpen }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    Cookies.remove("token");
    setIsLoggedIn(false);
    setTimeout(() => {
      window.location.href = "/login"; // Force a full page reload and navigate to login
    }, 100); // Small delay to ensure the menu closes before the redirect
  };

  const handleChangePassword = () => {
    router.push("/changepassword");
  };

  const handleLogin = () => {
    setTimeout(() => {
      window.location.href = "/login"; // Force a full page reload and navigate to login
    }, 100); // Small delay to ensure the menu closes before the redirect
  };

  const menuItems = (
    <Menu>
      <Tooltip
        title="Change your current password"
        placement="left"
        zIndex={20000}
      >
        <Menu.Item key="change-password" onClick={handleChangePassword}>
          <Image
            src="/change-password.png"
            alt="Change Password Icon"
            width={24}
            height={24}
          />{" "}
          Change Password
        </Menu.Item>
      </Tooltip>
      <Tooltip title="Logout of your Account" placement="left" zIndex={20000}>
        <Menu.Item key="logout" onClick={handleLogout}>
          <Image src="/logout.png" alt="Logout Icon" width={24} height={24} />{" "}
          Logout
        </Menu.Item>
      </Tooltip>
    </Menu>
  );

  return (
    <div className="main-button-group-container">
      {isLoggedIn ? (
        <Dropdown
          overlay={menuItems}
          trigger={["click"]}
          placement="bottomLeft"
        >
          <Tooltip title="Settings" placement="left" zIndex={20000}>
            <button className="custom-circular-button">
              <Image
                src="/settingsred.png"
                alt="Settings Icon"
                width={28}
                height={28}
              />
            </button>
          </Tooltip>
        </Dropdown>
      ) : (
        <Tooltip title="Login" placement="bottom" zIndex={20000}>
          <button className="custom-circular-button" onClick={handleLogin}>
            <Image src="/userred.png" alt="User Icon" width={28} height={28} />
          </button>
        </Tooltip>
      )}
      <Tooltip title="Menu" placement="bottom" zIndex={20000}>
        <button className="custom-circular-button" onClick={onMenuClick}>
          <img
            src={menuOpen ? "/closered.png" : "/dotsred.png"}
            alt={menuOpen ? "Close menu" : "Open menu"}
            width={28}
            height={28}
          />
        </button>
      </Tooltip>
    </div>
  );
}
