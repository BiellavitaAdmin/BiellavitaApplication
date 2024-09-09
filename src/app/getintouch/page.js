import "./getintouch.css";
export default function GetInTouch() {
  return (
    <>
      <div className="getintouch-container">
        <div className="getintouch-heading-container">
          <h2 className="getintouch-main-heading">Get In Touch</h2>
        </div>
        <div className="getintouch-form-container">
          <div className="getintouch-form">
            <h3 className="form-title">Connect with us. . .</h3>
            <form>
              <div className="inputfield-group">
                <div className="left-input">
                  <label className="form-labels">Firstname</label>
                  <input className="input-fields"></input>
                </div>
                <div className="right-input">
                  <label className="form-labels">Lastname</label>
                  <input className="input-fields"></input>
                </div>
              </div>

              <div className="address-field-container">
                <label className="form-labels">Email Address</label>
                <input className="input-fields"></input>
              </div>

              <div className="message-field-container">
                <label className="form-labels">Message</label>
                <input className="input-fields"></input>
              </div>
              <div className="button-container">
                <button className="contact-button">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
