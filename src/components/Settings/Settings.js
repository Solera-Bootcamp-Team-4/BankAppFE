import './Settings.css';
const Settings = () => {
    return <div className="Set-form-container">
    <form className="Set-form">
      <div className="Set-form-content">
        <h3 className="Set-form-title">Settings</h3>
        <div className="form-group mt-3">
          <input
            type="text"
            className="form-control mt-1"
            placeholder="First Name"
          />
        </div>
        <div className="form-group mt-3">
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Second Name"
          />
        </div>
        <div className="form-group mt-3">
          <input
            type="email"
            className="form-control mt-1"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group mt-3">
          <input
            type="tel"
            className="form-control mt-1"
            placeholder="123-45-678"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="save" className="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </form>
  </div>
  };
  
  export default Settings;