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
    router.push("/login");
  };

  const handleChangePassword = () => {
    router.push("/changepassword");
  };

  const handleLogin = () => {
    router.push("/login");
  };

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
        <Dropdown
          overlay={menuItems}
          trigger={["click"]}
          placement="bottomLeft"
        >
          <button className="custom-circular-button">
            <Tooltip title="Settings">
              <Image
                src="/settingsred.png"
                alt="Settings Icon"
                width={28}
                height={28}
              />
            </Tooltip>
          </button>
        </Dropdown>
      ) : (
        <button className="custom-circular-button" onClick={handleLogin}>
          <Tooltip title="Login">
            <Image src="/userred.png" alt="User Icon" width={28} height={28} />
          </Tooltip>
        </button>
      )}
      <button className="custom-circular-button" onClick={onMenuClick}>
        <img
          src={menuOpen ? "/closered.png" : "/dotsred.png"}
          alt={menuOpen ? "Close menu" : "Open menu"}
          width={28}
          height={28}
        />
      </button>
    </div>
  );
}
