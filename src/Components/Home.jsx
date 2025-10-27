import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../assets/download.jpeg";

const Home = () => {
  // Separate state variables for each button
  const [listenSparkle, setListenSparkle] = useState(false);
  const [musicVideoSparkle, setMusicVideoSparkle] = useState(false);
  const [lyricalVideoSparkle, setLyricalVideoSparkle] = useState(false);
  
  const navigate = useNavigate();

  const handleListenClick = () => {
    setListenSparkle(true);
    setTimeout(() => navigate("/listen"), 1200);
  };

  const handleMusicVideoClick = () => {
    setMusicVideoSparkle(true);
    setTimeout(() => {
      window.open("https://www.youtube.com/@aascharyamusic", "_blank");
      setMusicVideoSparkle(false);
    }, 1200);
  };

  const handleLyricalVideoClick = () => {
    setLyricalVideoSparkle(true);
    setTimeout(() => {
      window.open("https://www.youtube.com/watch?v=YOUR_LYRICAL_VIDEO_ID", "_blank");
      setLyricalVideoSparkle(false);
    }, 1200);
  };

  const handleInProgressClick = () => {
    alert("This feature is currently in progress. Stay tuned for updates!");
  };

  // Define the sparkle button style for Listen button
  const listenSparkleButton = {
    position: "relative",
    background: "transparent",
    border: "2px solid red",
    color: "white",
    fontSize: "22px",
    fontWeight: "bold",
    padding: "14px 40px",
    borderRadius: "10px",
    cursor: "pointer",
    overflow: "hidden",
    transition: "all 0.3s ease",
    textTransform: "uppercase",
  };

  // Define the sparkle button style for Music Video button
  const musicVideoSparkleButton = {
    position: "relative",
    background: "transparent",
    border: "2px solid #ff0000",
    color: "white",
    fontSize: "22px",
    fontWeight: "bold",
    padding: "14px 40px",
    borderRadius: "10px",
    cursor: "pointer",
    overflow: "hidden",
    transition: "all 0.3s ease",
    textTransform: "uppercase",
  };

  // Define the sparkle button style for Lyrical Video button
  const lyricalVideoSparkleButton = {
    position: "relative",
    background: "transparent",
    border: "2px solid #6a1b9a",
    color: "white",
    fontSize: "22px",
    fontWeight: "bold",
    padding: "14px 40px",
    borderRadius: "10px",
    cursor: "pointer",
    overflow: "hidden",
    transition: "all 0.3s ease",
    textTransform: "uppercase",
  };

  // Function to create sparkle symbol effect for Listen button
  const listenSparkleSymbol = (x, y, delay, size) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) scale(0)",
    opacity: 0,
    fontSize: `${size}px`,
    filter: "brightness(3) invert(1)",
    animation: listenSparkle ? `sparkleEffect 1.8s ease-out ${delay}s forwards` : "none",
    "--x": x,
    "--y": y,
  });

  // Function to create sparkle symbol effect for Music Video button
  const musicVideoSparkleSymbol = (x, y, delay, size) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) scale(0)",
    opacity: 0,
    fontSize: `${size}px`,
    filter: "brightness(3) invert(1)",
    animation: musicVideoSparkle ? `sparkleEffect 1.8s ease-out ${delay}s forwards` : "none",
    "--x": x,
    "--y": y,
  });

  // Function to create sparkle symbol effect for Lyrical Video button
  const lyricalVideoSparkleSymbol = (x, y, delay, size) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) scale(0)",
    opacity: 0,
    fontSize: `${size}px`,
    filter: "brightness(3) invert(1)",
    animation: lyricalVideoSparkle ? `sparkleEffect 1.8s ease-out ${delay}s forwards` : "none",
    "--x": x,
    "--y": y,
  });

  return (
    <div>
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
            {/* Sparkle Button for Listen/Stream */}
            <button style={listenSparkleButton} onClick={handleListenClick}>
             🎧🎶 Listen /Stream
              {/* Sparkle symbols with different sizes for more dynamic effect */}
              <span style={listenSparkleSymbol(-1, 0, 0, 20)}>✧˖°</span>
              <span style={listenSparkleSymbol(1, 0, 0.1, 18)}>✧˖°</span>
              <span style={listenSparkleSymbol(0, -1, 0.2, 22)}>✧˖°</span>
              <span style={listenSparkleSymbol(0, 1, 0.3, 16)}>✧˖°</span>
              <span style={listenSparkleSymbol(-0.7, -0.7, 0.4, 18)}>✧˖°</span>
              <span style={listenSparkleSymbol(0.7, 0.7, 0.5, 20)}>✧˖°</span>
            </button>
            
            {/* Sparkle Button for Music Video */}
            <button style={musicVideoSparkleButton} onClick={handleMusicVideoClick}>
             🎥 ▶️ Watch the Music video
              {/* Sparkle symbols with different sizes for more dynamic effect */}
              <span style={musicVideoSparkleSymbol(-1, 0, 0, 20)}>✧˖°</span>
              <span style={musicVideoSparkleSymbol(1, 0, 0.1, 18)}>✧˖°</span>
              <span style={musicVideoSparkleSymbol(0, -1, 0.2, 22)}>✧˖°</span>
              <span style={musicVideoSparkleSymbol(0, 1, 0.3, 16)}>✧˖°</span>
              <span style={musicVideoSparkleSymbol(-0.7, -0.7, 0.4, 18)}>✧˖°</span>
              <span style={musicVideoSparkleSymbol(0.7, 0.7, 0.5, 20)}>✧˖°</span>
            </button>
            
            {/* Sparkle Button for Lyrical Video */}
            <button style={lyricalVideoSparkleButton} onClick={handleLyricalVideoClick}>
              🎬 Watch the Lyrical Video
              {/* Sparkle symbols with different sizes for more dynamic effect */}
              <span style={lyricalVideoSparkleSymbol(-1, 0, 0, 20)}>✧˖°</span>
              <span style={lyricalVideoSparkleSymbol(1, 0, 0.1, 18)}>✧˖°</span>
              <span style={lyricalVideoSparkleSymbol(0, -1, 0.2, 22)}>✧˖°</span>
              <span style={lyricalVideoSparkleSymbol(0, 1, 0.3, 16)}>✧˖°</span>
              <span style={lyricalVideoSparkleSymbol(-0.7, -0.7, 0.4, 18)}>✧˖°</span>
              <span style={lyricalVideoSparkleSymbol(0.7, 0.7, 0.5, 20)}>✧˖°</span>
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

      {/* Inline keyframes for the sparkle symbol effect */}
      <style>
        {`
        @keyframes sparkleEffect {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(0) rotate(0deg);
            filter: brightness(0) invert(1) drop-shadow(0 0 2px white);
          }
          50% {
            opacity: 1;
            transform: translate(calc(-50% + (var(--x, 0) * 60px)), calc(-50% + (var(--y, 0) * 60px))) scale(1.2) rotate(180deg);
            filter: brightness(0) invert(1) drop-shadow(0 0 8px white);
          }
          100% {
            opacity: 0;
            transform: translate(calc(-50% + (var(--x, 0) * 100px)), calc(-50% + (var(--y, 0) * 100px))) scale(0.5) rotate(360deg);
            filter: brightness(0) invert(1) drop-shadow(0 0 0px white);
          }
        }
        `}
      </style>
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
    bottom: "2%",
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