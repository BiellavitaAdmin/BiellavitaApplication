import "./login.css";

export default function Login() {
  return (
    <>
      <div className="login-container">
        <div className="login-heading-container">
          <h2 className="login-main-heading">Welcome Back</h2>
        </div>
        <div className="login-form-container">
          <div className="login-form">
            <h3 className="form-title">Enter Your Credentials</h3>
            <form>
              <div className="address-field-container">
                <label className="form-labels">Email Address</label>
                <input className="input-fields"></input>
              </div>

              <div className="message-field-container">
                <label className="form-labels">Password</label>
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
