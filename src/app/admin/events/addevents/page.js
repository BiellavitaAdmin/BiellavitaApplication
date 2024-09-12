import "./addevents.css";
export default function AddEvents() {
  return (
    <>
      <div className="form-container">
        <div className="form-section">
          <form className="dash-form">
            <div className="dash-inputfield-group-column">
              <label className="dash-form-label">Firstname</label>
              <input className="dash-form-input"></input>
            </div>
            <div className="dash-inputfield-group-column">
              <label className="dash-form-label">Lastname</label>
              <input className="dash-form-input"></input>
            </div>
            <div className="dash-inputfield-group-column">
              <label className="dash-form-label">Address</label>
              <input className="dash-form-input"></input>
            </div>
            <div className="dash-inputfield-group-column">
              <label className="dash-form-label">Cell Phone</label>
              <input className="dash-form-input"></input>
            </div>
            <div className="dash-inputfield-group-column">
              <label className="dash-form-label">Email</label>
              <input className="dash-form-input"></input>
            </div>
            <div className="dash-form-conatiner">
              <button className="dash-form-button">Add Member</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
