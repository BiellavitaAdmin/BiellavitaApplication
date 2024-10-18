"use client"; // Use client-side rendering

import "./changepassword.css";
import dynamic from "next/dynamic"; // Import dynamic from Next.js

// Dynamically import ContactForm
const ChangePasswordForm = dynamic(
  () =>
    import(
      "../components/pagecomponents/changepasswordcomponents/changepasswordform"
    ),
  {
    ssr: false, // Disable server-side rendering
  }
);

export default function GetInTouch() {
  return (
    <>
      <div className="getintouch-container">
        <div className="getintouch-heading-container">
          <h2 className="getintouch-main-heading">Change Password</h2>
        </div>
        <div className="getintouch-form-container">
          <div className="getintouch-form">
            {/* <h3 className="form-title">Connect with us. . .</h3> */}
            <ChangePasswordForm />
          </div>
        </div>
      </div>
    </>
  );
}
