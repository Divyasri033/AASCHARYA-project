import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav style={styles.navbar}>
        {/* Left: Brand */}
        <div style={styles.brand}>AASCHARYA</div>

        {/* Desktop Links */}
        {!isMobile && (
          <div style={styles.linksContainer}>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/videos" style={styles.link}>Videos</Link>
            <Link to="/listen" style={styles.link}>Listen</Link>
            <Link to="/more" style={styles.link}>More</Link>
          </div>
        )}

        {/* Hamburger Menu Button */}
        {isMobile && (
          <button
            style={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <div style={{ ...styles.bar, transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
            <div style={{ ...styles.bar, opacity: menuOpen ? 0 : 1 }} />
            <div style={{ ...styles.bar, transform: menuOpen ? "rotate(-45deg) translate(6px,-6px)" : "none" }} />
          </button>
        )}
      </nav>

      {/* Mobile Menu */}
      {isMobile && menuOpen && (
        <div style={styles.mobileMenu}>
          <Link to="/" style={styles.mobileLink} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/videos" style={styles.mobileLink} onClick={() => setMenuOpen(false)}>Videos</Link>
          <Link to="/listen" style={styles.mobileLink} onClick={() => setMenuOpen(false)}>Listen</Link>
          <Link to="/more" style={styles.mobileLink} onClick={() => setMenuOpen(false)}>More</Link>
        </div>
      )}
    </>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
   // backgroundColor: "#f7f5f5ff", // Restored background color
    color: "red",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  brand: {
    fontWeight: "bold",
    fontSize: "30px",
    order: 1,
  },
  linksContainer: {
    display: "flex",
    gap: "20px",
    order: 2,
  },
  link: {
    color: "red",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "20px", // Increased font size for desktop links
  },
  hamburger: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "30px", // Increased width
    height: "25px", // Increased height
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 0,
    order: 2,
    zIndex: 1001, // Ensure it's above other elements
  },
  bar: {
    height: "4px", // Increased height for visibility
    width: "100%",
    backgroundColor: "red", // Changed to red to match navbar text color
    transition: "0.3s",
    borderRadius: "2px", // Added rounded corners
  },
  mobileMenu: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#333",
    position: "absolute",
    top: "60px",
    left: 0,
    width: "100%",
    zIndex: 999,
    padding: "10px 0",
  },
  mobileLink: {
    color: "white",
    textDecoration: "none",
    padding: "10px 20px",
    fontSize: "18px", // Increased font size for mobile links
    fontWeight: "bold",
  },
};

export default Navbar;