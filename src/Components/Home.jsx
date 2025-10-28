import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../assets/download.jpeg";

const Home = () => {
  const navigate = useNavigate();

  const handleListenClick = () => {
    navigate("/listen");
  };

  const handleMusicVideoClick = () => {
    window.open("https://www.youtube.com/@aascharyamusic", "_blank");
  };

  const handleLyricalVideoClick = () => {
    window.open("https://www.youtube.com/watch?v=YOUR_LYRICAL_VIDEO_ID", "_blank");
  };

  // Updated button style with 50px border radius
  const buttonStyle = {
    padding: "14px 40px", // Original padding
    borderRadius: "50px", // Changed from 10px to 50px for pill shape
    fontSize: "22px", // Original font size
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
    width: "auto" // Changed from fixed width to auto to accommodate text
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

        {/* Overlay Buttons */}
        <div style={styles.overlay}>
          <div style={styles.buttons}>
            {/* Listen Button */}
            <button 
              style={buttonStyle}
              onClick={handleListenClick}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 0, 0, 0.7)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'}
            >
              Listen/Stream
            </button>
            
            {/* Music Video Button */}
            <button 
              style={buttonStyle}
              onClick={handleMusicVideoClick}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 0, 0, 0.7)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'}
            >
              Watch The Music Video
            </button>
            
            {/* Lyrical Video Button */}
            <button 
              style={buttonStyle}
              onClick={handleLyricalVideoClick}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 0, 0, 0.7)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'}
            >
              Watch The Lyrical Video
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
          <h2 style={styles.imageText}></h2>
        </div>
      </section>
    </div>
  );
};

// ====== Inline Styles ======
const styles = {
  container: {
    border: "6px solid #C00000", // Added red border around the entire content
    boxSizing: "border-box", // Ensures border is included in dimensions
    minHeight: "100vh",
    overflow: "hidden" // Prevents content from spilling over border
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
    bottom: "5%", // Adjusted for better positioning
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
    color: "#fff",
    zIndex: 1,
    width: "100%"
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
    marginTop: "0", // Removed large margin
  },
};

export default Home;