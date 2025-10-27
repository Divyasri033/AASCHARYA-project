import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.socialLinks}>
          <a
            href="https://www.instagram.com/aascharyaaa?igsh=MTBxazk2eTBiZGx6Mg=="
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
            aria-label="Instagram"
          >
            <svg style={styles.icon} viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
            </svg>
          </a>
          
          <a
            href="https://youtube.com/@aascharyaaa?si=2ZMJOSNKasVBuap_"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
            aria-label="YouTube"
          >
            <svg style={styles.icon} viewBox="0 0 24 24">
              <path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
          
          <a
            href="https://x.com/aascharyaaa?t=gZ-g6Ib1RSdlob6TXN81cw&s=09"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
            aria-label="X (formerly Twitter)"
          >
            <svg style={styles.icon} viewBox="0 0 24 24">
              <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          
          <a
            href="https://www.facebook.com/share/17TNNFLjBU/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
            aria-label="Facebook"
          >
            <svg style={styles.icon} viewBox="0 0 24 24">
              <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>
        <div style={styles.copyright}>
          © {new Date().getFullYear()} AASCHARYÁ. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    width: "100%",
    backgroundColor: "rgba(190, 24, 24, 0.8)",
    backdropFilter: "blur(10px)",
    padding: "15px 0",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
  socialLinks: {
    display: "flex",
    gap: "25px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    transition: "transform 0.3s ease, color 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: "24px",
    height: "24px",
    transition: "transform 0.3s ease",
  },
  copyright: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "14px",
    textAlign: "center",
  },
};

export default Footer;