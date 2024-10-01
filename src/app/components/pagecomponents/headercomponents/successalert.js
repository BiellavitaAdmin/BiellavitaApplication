import React from "react";
import Image from "next/image";

const SuccessAlert = () => {
  return (
    <div className="notification-container">
      <div className="notification-box-green">
        <div className="notification-box-container">
          <div className="icon-container">
            <Image
              src="/success-login.png"
              alt="Members Icon"
              width={48}
              height={48}
              className="tab-icons"
            />
          </div>
          <div className="notification-description">
            Login successfull you are being redirected
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessAlert;
