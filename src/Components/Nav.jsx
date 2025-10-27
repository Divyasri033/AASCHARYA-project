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
        {/* Brand */}
        <div style={styles.brand}>AASCHARYÁ</div>

        {/* Desktop Links */}
        {!isMobile && (
          <div style={styles.linksContainer}>
            <Link to="/" style={styles.link}></Link>
            <Link to="/videos" style={styles.link}>Videos</Link>
            <Link to="/listen" style={styles.link}>Listen</Link>
            <Link to="/more" style={styles.link}>More</Link>
          </div>
        )}

        {/* Hamburger Menu (for Mobile) */}
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

      {/* Mobile Dropdown Menu */}
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
    padding: "12px 40px",
    position: "fixed", // ✅ stays at top
    top: 0,
    left: "-80px",
    width: "100%",
    zIndex: 1000,
    background: "transparent", // ✅ no white background
    boxShadow: "none", // ✅ removes shadow
    color: "red",
  },
  brand: {
    fontWeight: "bold",
    fontSize: "30px",
    position:"relative",
    left:"50px",
  },
  linksContainer: {
    display: "flex",
    gap: "25px",
  },
  link: {
    color: "red",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "20px",
    transition: "color 0.3s",
  },
  hamburger: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "30px",
    height: "25px",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 0,
    zIndex: 1001,
  },
  bar: {
    height: "4px",
    width: "100%",
    backgroundColor: "red",
    transition: "0.3s",
    borderRadius: "2px",
  },
  mobileMenu: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgba(0,0,0,0.9)", // ✅ darker overlay for readability
    position: "fixed",
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
    fontSize: "18px",
    fontWeight: "bold",
  },
};

export default Navbar;