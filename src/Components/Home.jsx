import React from "react";
import Image from "../assets/download.jpeg";

const Home = () => {
  const handleInProgressClick = () => {
    alert("This feature is currently in progress. Stay tuned for updates!");
  };

  return (
    <div>
      {/* ====== Video Section ====== */}
      <section style={styles.videoSection}>
        <video
          src="https://www.pexels.com/download/video/8053107.mp4" // ✅ Use a real MP4 file placed in public/videos/
          autoPlay
          loop
          muted
          playsInline
          style={styles.video}
        />

        {/* Overlay Buttons */}
        <div style={styles.overlay}>
          <div style={styles.buttons}>
            <a
              href="#listen"
              style={{
                ...styles.button,
                backgroundColor: "rgba(255,255,255,0.85)",
                color: "#000",
              }}
            >
              🎧 Listen
            </a>
            <a
              href="https://www.youtube.com/@aascharyamusic"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...styles.button,
                backgroundColor: "#ff0000",
                color: "#fff",
              }}
            >
              ▶️ Watch AASCHARYA YouTube Music
            </a>
            <button
              onClick={handleInProgressClick}
              style={{
                ...styles.button,
                backgroundColor: "#ff9800",
                color: "#fff",
                cursor: "pointer",
                border: "none",
              }}
            >
              🚧 In Progress
            </button>
          </div>
        </div>
      </section>

      {/* ====== Image Section ====== */}
      <section style={styles.imageSection}>
        <img
          src={Image}
          alt="Aascharya Music Vibe"
          style={styles.image}
        />
        <div style={styles.imageOverlay}>
          <h2 style={styles.imageText}>Feel the Rhythm. Embrace the Magic.</h2>
        </div>
      </section>
    </div>
  );
};

// ====== Inline Styles ======
const styles = {
  videoSection: {
    position: "relative",
    height: "100vh",
    width: "100%",
    overflow: "hidden",
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -1,
  },
  overlay: {
    position: "absolute",
    bottom: "15%", // ✅ moves buttons lower for better spacing
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
    color: "#fff",
  },
  buttons: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  button: {
    padding: "14px 28px",
    borderRadius: "50px",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: 600,
    transition: "all 0.3s ease",
    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
  },
  imageSection: {
    position: "relative",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -1,
  },
  imageOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "rgba(0, 0, 0, 0.4)", // Semi-transparent overlay
    padding: "40px 20px",
  },
  imageText: {
    color: "#0c0909ff",
    fontSize: "2.5rem",
    fontWeight: 700,
    textAlign: "center",
    letterSpacing: "2px",
    textShadow: "0 2px 10px rgba(0,0,0,0.5)",
    maxWidth: "800px",
    marginTop: "600px",
  },
};

export default Home;