import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div
      style={{
        height: "50px",
        width: "100%",
        backgroundColor: "black",
        display: "flex"
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          HOME
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/login">
          LOGIN
        </Link>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to="/dashboard"
        >
          DASHBOARD
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/dashboard/settings">
          SETTINGS
        </Link>
      </div>
    </div>
  );
}
