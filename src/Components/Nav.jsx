import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Top Navbar with Links */}
      <nav style={isMobile ? styles.navbarMobile : styles.navbar}>
        <div
          style={isMobile ? styles.linksContainerMobile : styles.linksContainer}
        >
          <Link to="/videos" style={styles.link}>
            VIDEOS
          </Link>
          <Link to="/listen" style={styles.link}>
            LISTEN
          </Link>
          <Link to="/more" style={styles.link}>
            MORE
          </Link>
         
        </div>
      </nav>

      {/* Brand Title Below Navbar */}
      <div
        style={isMobile ? styles.brandContainerMobile : styles.brandContainer}
      >
        <div style={styles.brand}>AASCHARYÁ</div>
      </div>
    </>
  );
};

const styles = {
  /* === Navbar Styles === */
  navbar: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "20px 60px",
    position: "fixed",
    top: 0,
    width: "100%",
    background: "transparent",
    color: "red",
    zIndex: 1000,
  },

  navbarMobile: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "15px 0",
    position: "fixed",
    top: 0,
    width: "100%",
    background: "transparent",
    color: "red",
    zIndex: 1000,
  },

  /* === Links Container === */
  linksContainer: {
    display: "flex",
    gap: "35px",
    marginRight: "120px",
  },

  linksContainerMobile: {
    display: "flex",
    gap: "25px",
  },

  link: {
    color: "red",
    textDecoration: "none",
    fontFamily: "serif",
    fontWeight: "400",
    fontSize: "20px",
    letterSpacing: "1px",
    transition: "color 0.3s ease",
  },

  /* === Brand === */
  brandContainer: {
    position: "absolute",
    top: "15px",
    left: "60px",
  },

  brandContainerMobile: {
    position: "absolute",
    top: "70px",
    left: "50%",
    transform: "translateX(-50%)",
  },

  brand: {
    fontWeight: "bold",
    fontSize: "46px",
    fontFamily: "'SuperShiny', cursive",
    color: "white",
    letterSpacing: "1px",
  },
};

export default Navbar;
