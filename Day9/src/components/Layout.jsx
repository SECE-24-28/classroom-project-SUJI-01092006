// components/Layout.jsx
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand">RechargeApp</div>

        <nav className="nav-links">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
          
          <NavLink to="/admin" className={({ isActive }) => (isActive ? "active" : "")}>
            Admin
          </NavLink>
          
          <NavLink to="/plans" className={({ isActive }) => (isActive ? "active" : "")}>
            Plans
          </NavLink>
          <NavLink to="/history" className={({ isActive }) => (isActive ? "active" : "")}>
            History
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            Contact
          </NavLink>
          <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>
            Login
          </NavLink>
        </nav>
      </header>

      <main className="app-main">{children}</main>

      <Footer />
    </div>
  );
}
