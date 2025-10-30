import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.socialLinks}>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/aascharyaaa"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
            aria-label="Instagram"
          >
            <i className="fab fa-instagram" style={styles.icon}></i>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com/@aascharyaaa"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
            aria-label="YouTube"
          >
            <i className="fab fa-youtube" style={styles.icon}></i>
          </a>

          {/* Spotify */}
          <a
            href="https://open.spotify.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
            aria-label="Spotify"
          >
            <i className="fab fa-spotify" style={styles.icon}></i>
          </a>

          {/* Apple Music */}
          <a
            href="https://music.apple.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
            aria-label="Apple Music"
          >
            <i className="fab fa-apple" style={styles.icon}></i>
          </a>

          {/* X */}
          <a
            href="https://x.com/aascharyaaa"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
            aria-label="X"
          >
            <i className="fab fa-x-twitter" style={styles.icon}></i>
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
            aria-label="Facebook"
          >
            <i className="fab fa-facebook" style={styles.icon}></i>
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
    backgroundColor: "#c00000",
    padding: "20px 0",
    textAlign: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
  },
  socialLinks: {
    display: "flex",
    gap: "30px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  link: {
    color: "white",
    transition: "transform 0.3s ease, color 0.3s ease",
  },
  icon: {
    fontSize: "26px",
  },
  copyright: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: "14px",
  },
};

export default Footer;
