import "./getintouch.css";
import ContactForm from "../components/pagecomponents/getintouchcomponents/contactform";
export default function GetInTouch() {
  return (
    <>
      <div className="getintouch-container">
        <div className="getintouch-heading-container">
          <h2 className="getintouch-main-heading">Connect With Us</h2>
        </div>
        <div className="getintouch-form-container">
          <div className="getintouch-form">
            {/* <h3 className="form-title">Connect with us. . .</h3> */}
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
