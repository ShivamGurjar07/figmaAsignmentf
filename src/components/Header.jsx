import user from "../assets/user.png";

export const Header = () => (
  <nav className="navbar navbar-light bg-white border-bottom px-4 py-3 d-flex justify-content-between">
    <span className="navbar-brand ms-5 h4 fw-bold">KPI Tracker</span>

    <div className="d-flex align-items-center gap-3">
      <img
        src={user}
        alt="User avatar"
        className="rounded-circle"
        style={{ width: "40px", height: "40px", objectFit: "cover" }}
      />
      <select style={{ cursor: "pointer", border: "none" }}>
        <option>Shivam</option>
      </select>
    </div>
  </nav>
);
