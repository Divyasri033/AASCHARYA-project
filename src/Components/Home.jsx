import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../assets/download.jpeg";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.backgroundColor = "#C00000";
    document.body.style.margin = "0";

    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.margin = "";
    };
  }, []);

  const handleListenClick = () => navigate("/listen");
  const handleMusicVideoClick = () =>
    window.open("https://www.youtube.com/@aascharyamusic", "_blank");
  const handleLyricalVideoClick = () =>
    window.open("https://www.youtube.com/watch?v=YOUR_LYRICAL_VIDEO_ID", "_blank");

  const buttonStyle = {
    padding: "14px 40px",
    borderRadius: "50px",
    fontSize: "22px",
    fontWeight: "bold",
    cursor: "pointer",
    overflow: "hidden",
    transition: "all 0.3s ease",
    textTransform: "uppercase",
    backdropFilter: "blur(5px)",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    position: "relative",
    width: "auto",
  };

  return (
    <div style={styles.container}>
      {/* ====== Video Section ====== */}
      <section style={styles.videoSection}>
        <video
          src="https://www.pexels.com/download/video/8053107.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={styles.video}
        />

        <div style={styles.overlay}>
          <div style={styles.buttons} className="home-buttons">
            <button
              style={buttonStyle}
              onClick={handleListenClick}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "rgba(255, 0, 0, 0.7)")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "rgba(0, 0, 0, 0.5)")}
            >
              Listen/Stream
            </button>

            <button
              style={buttonStyle}
              onClick={handleMusicVideoClick}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "rgba(255, 0, 0, 0.7)")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "rgba(0, 0, 0, 0.5)")}
            >
              Watch The Music Video
            </button>

            <button
              style={buttonStyle}
              onClick={handleLyricalVideoClick}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "rgba(255, 0, 0, 0.7)")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "rgba(0, 0, 0, 0.5)")}
            >
              Watch The Lyrical Video
            </button>
          </div>
        </div>
      </section>

      {/* ====== Image Section ====== */}
      <section style={styles.imageSection}>
        <img src={Image} alt="Aascharya Music Vibe" style={styles.image} />
        <div style={styles.imageOverlay}>
          <h2 style={styles.imageText}></h2>
        </div>
      </section>

      {/* 💡 Collab section removed — handled globally in App.jsx */}

      <style>
        {`
          @media (max-width: 768px) {
            .home-buttons button {
              padding: 10px 25px !important;
              font-size: 16px !important;
              border-radius: 40px !important;
            }
          }
          
          @media (max-width: 480px) {
            .home-buttons button {
              padding: 8px 20px !important;
              font-size: 14px !important;
              border-radius: 35px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

// ====== Inline Styles ======
const styles = {
  container: {
    border: "6px solid #C00000",
    boxSizing: "border-box",
    minHeight: "100vh",
    overflow: "hidden",
  },
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
    bottom: "5%",
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
    color: "#fff",
    zIndex: 1,
    width: "100%",
  },
  buttons: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
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
    marginTop: "0",
  },
};

export default Home;
