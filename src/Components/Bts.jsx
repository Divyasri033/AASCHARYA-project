import React, { useEffect, useState } from "react";

const Bts = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#C00000";
    document.body.style.margin = "0";
  }, []);

  // 🎥 Professional-looking dummy images (Unsplash)
  const images = [
    "https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=1600&q=80", // recording studio
    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1600&q=80", // headphones closeup
    "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=1600&q=80", // mic and lights
    "https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=1600&q=80", // mixing board
    "https://images.unsplash.com/photo-1513569771920-c9e1d31714af?auto=format&fit=crop&w=1600&q=80", // BTS aesthetic
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div style={styles.container}>
      {/* ===== Slider Wrapper ===== */}
      <div style={styles.slider}>
        {images.map((img, index) => (
          <div
            key={index}
            style={{
              ...styles.slide,
              opacity: index === currentIndex ? 1 : 0,
              transform:
                index === currentIndex
                  ? "translateX(0)"
                  : index < currentIndex
                  ? "translateX(-100%)"
                  : "translateX(100%)",
            }}
          >
            <img src={img} alt={`Slide ${index + 1}`} style={styles.image} />
          </div>
        ))}
      </div>

      {/* ===== Dots Navigation ===== */}
      <div style={styles.dotsContainer}>
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              ...styles.dot,
              backgroundColor:
                index === currentIndex ? "#FFD700" : "rgba(255,255,255,0.6)",
            }}
          />
        ))}
      </div>
    </div>
  );
};

// ===== Inline Styles =====
const styles = {
  container: {
    backgroundColor: "#C00000",
    height: "100vh",
    width: "100%",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  slider: {
    position: "relative",
    width: "90%",
    maxWidth: "1200px",
    height: "70vh",
    overflow: "hidden",
    borderRadius: "20px",
    boxShadow: "0 0 20px rgba(0,0,0,0.5)",
  },
  slide: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    transition: "opacity 1s ease, transform 1s ease",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "20px",
  },
  dotsContainer: {
    position: "absolute",
    bottom: "20px",
    display: "flex",
    gap: "10px",
    justifyContent: "center",
  },
  dot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default Bts;
