// ErrorAlert.js
import React from "react";
import Image from "next/image";

const ErrorAlert = () => {
  return (
    <div className="notification-container">
      <div className="notification-box-red">
        <div className="notification-box-container">
          <div className="icon-container">
            <Image
              src="/failure-login.png"
              alt="Members Icon"
              width={48}
              height={48}
              className="tab-icons"
            />
          </div>
          <div className="notification-description">
            Unable to login please check your credentials
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorAlert;
