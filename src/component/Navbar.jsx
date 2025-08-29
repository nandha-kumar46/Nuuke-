import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";  // ✅ Import NavLink
import "./Navbar.css";  // custom CSS file

function Navbar() {
  const [open, setOpen] = useState(false);

  // ✅ Define nav items with routes
  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "NUUKENOMICS", path: "/nuukeconomics" },
    { name: "SOCIAL MEDIA", path: "/socialmedia" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">
          N<span className="makeblack">UU</span>KE
        </div>

        {/* Desktop Menu */}
        <ul className="nav-menu desktop">
          {navItems.map((item) => (
            <li key={item.name} className="nav-item">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "active-link" : ""
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button className="menu-btn" onClick={() => setOpen(!open)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="nav-menu mobile"
        >
          {navItems.map((item) => (
            <motion.li
              key={item.name}
              whileHover={{ scale: 1.2, color: "#e91e63" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="nav-item"
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "active-link" : ""
                }
                onClick={() => setOpen(false)} // close menu on click
              >
                {item.name}
              </NavLink>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
}

export default Navbar;