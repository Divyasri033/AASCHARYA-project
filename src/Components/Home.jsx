import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Image from "../assets/download.jpeg"; // Commented out since image section is hidden

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

  // ===== Announcement Box Styles =====
  const boxStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: "20px",
    padding: "40px 30px",
    maxWidth: "850px",
    textAlign: "center",
    boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
    backdropFilter: "blur(10px)",
  };

  const headingStyle = {
    fontSize: "2rem",
    fontWeight: "700",
    color: "#C00000",
    marginBottom: "20px",
    letterSpacing: "1px",
    fontFamily: "'Georgia', serif",
    textTransform: "uppercase", // 🔺 Ensures AASCHARYA is all caps
  };

  const paragraphStyle = {
    fontSize: "1.2rem",
    lineHeight: "1.7",
    color: "#222",
    fontFamily: "'Georgia', serif",
  };

  const noteStyle = {
    marginTop: "25px",
    fontSize: "1rem",
    color: "#444",
    fontStyle: "italic",
    opacity: 0.9,
  };

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

  const handleListenClick = () => navigate("/listen");
  const handleMusicVideoClick = () =>
    window.open("https://www.youtube.com/@aascharyamusic", "_blank");
  const handleLyricalVideoClick = () =>
    window.open("https://www.youtube.com/watch?v=YOUR_LYRICAL_VIDEO_ID", "_blank");

  return (
    <div style={styles.container}>
      {/* ====== Announcement Box ====== */}
      <div style={boxStyle}>
        <h1 style={headingStyle}>AASCHARYA — Coming December 2025</h1>
        <p style={paragraphStyle}>
          This platform is still in creation. The original release was planned for November, but
          the project has expanded. New visuals, writings, and works are being developed to reflect
          the full vision. The official unveiling is now scheduled for December 2025. Thank you for
          your patience as every element is being refined with precision and purpose. What’s coming
          next will tell the story as it was meant to be told.
        </p>
        <p style={noteStyle}>
          Note: This website link has been shared with the Clive Davis Institute as evidence of
          ongoing creative development, not as a full working site. We are currently in the process
          of launching our first release and experimenting with new design concepts.
        </p>
      </div>

      {/* ====== Commented Out Video Section ======
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
      ============================================ */}

      {/* ====== Commented Out Image Section ======
      <section style={styles.imageSection}>
        <img src={Image} alt="Aascharya Music Vibe" style={styles.image} />
        <div style={styles.imageOverlay}>
          <h2 style={styles.imageText}></h2>
        </div>
      </section>
      ============================================ */}

      <style>
        {`
          @media (max-width: 768px) {
            div[style*="padding: 40px 30px"] {
              padding: 25px 20px !important;
            }
            h1 {
              font-size: 1.6rem !important;
            }
            p {
              font-size: 1rem !important;
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
    background: "linear-gradient(135deg, #8B0000, #C00000)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
};

export default Home;
