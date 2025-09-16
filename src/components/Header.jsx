
import React, { useState } from "react";

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible((prev) => !prev);
  };

  const handleLinkClick = (id) => {
    const target = document.querySelector(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70, // header ke neeche space
        behavior: "smooth",
      });
    }
    // menu ko smooth scroll ke baad close karna hai
    setTimeout(() => setIsMenuVisible(false), 400);
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <a href="#" className="nav-logo">
          AASRA CLEANING
        </a>

        <div className={`nav-menu ${isMenuVisible ? "nav-menu--visible" : ""}`}>
          <a href="#services" onClick={() => handleLinkClick("#services")}>
            SERVICES
          </a>
          <a href="#contact" onClick={() => handleLinkClick("#contact")}>
            CONTACT
          </a>
        </div>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation menu"
          onClick={toggleMenu}
        >
          {isMenuVisible ? (
            <i className="ri-close-line"></i>
          ) : (
            <i className="ri-menu-line"></i>
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;
