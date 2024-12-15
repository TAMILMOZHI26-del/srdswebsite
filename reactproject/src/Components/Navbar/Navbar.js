import React from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import './Navbar.css'; // Import the CSS file

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Assessment",
    link: "#",
  },
  {
    id: 3,
    title: "Contact Us",
    link: "#",
  },
];

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="navbar-wrapper"
      >
        {/* Logo section */}
        <div>
          <h1 className="navbar-logo">EdueX</h1>
        </div>
        {/* Menu section */}
        <div className="navbar-menu">
          <ul className="navbar-list">
            {NavbarMenu.map((menu) => (
              <li key={menu.id} className="navbar-item">
                <a
                  href={menu.path}
                  className="navbar-link"
                >
                  {menu.title}
                </a>
              </li>
            ))}
            <Link to="/Signup">
              <button className="navbar-button">
                Sign Up
              </button>
            </Link>
          </ul>
        </div>
        {/* Mobile Hamburger menu section */}
        <div className="navbar-hamburger">
          <IoMdMenu className="hamburger-icon" />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
