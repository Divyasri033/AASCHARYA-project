import React, { useEffect } from "react";
import bomma from "../assets/Bomma-1.svg"; // Import the SVG file

const FollowUs = () => {
  // ✅ Apply red background and remove margins when this page loads
  useEffect(() => {
    document.body.style.backgroundColor = "#C00000";
    document.body.style.margin = "0";

    // Cleanup when leaving this page (optional)
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.margin = "";
    };
  }, []);

  // Button style that matches the BTS and Follow buttons
  const buttonStyle = {
    padding: "19px 30px",
    borderRadius: "50px",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
    textTransform: "uppercase",
    backdropFilter: "blur(5px)",
    width: "180px",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    textDecoration: "none",
    display: "inline-block",
    textAlign: "center",
  };

  // Title button style (slightly different)
  const titleButtonStyle = {
    ...buttonStyle,
    backgroundColor: "rgba(192, 0, 0, 0.7)", // Red background
    cursor: "default",
    border: "2px solid rgba(255, 255, 255, 0.5)",
    marginBottom: "10px",
  };

  // Button container style
  const buttonContainerStyle = {
    position: "absolute",
    bottom: "10%",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
    zIndex: 2,
  };

  return (
    <>
      <div style={styles.container} className="follow-us-container">
        {/* Social Media Buttons Container */}
        <div style={buttonContainerStyle}>
          {/* Follow Us On Title */}
          <div style={titleButtonStyle}>Follow AASCHARYÁ</div>

          {/* Instagram */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={buttonStyle}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor = "rgba(255, 0, 0, 0.7)")
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "rgba(0, 0, 0, 0.5)")
            }
          >
            Instagram
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            style={buttonStyle}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor = "rgba(255, 0, 0, 0.7)")
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "rgba(0, 0, 0, 0.5)")
            }
          >
            YouTube
          </a>

          {/* X (Twitter) */}
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            style={buttonStyle}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor = "rgba(255, 0, 0, 0.7)")
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "rgba(0, 0, 0, 0.5)")
            }
          >
            X
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={buttonStyle}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor = "rgba(255, 0, 0, 0.7)")
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "rgba(0, 0, 0, 0.5)")
            }
          >
            Facebook
          </a>
        </div>
      </div>

      {/* Add responsive styles for mobile view */}
      <style>
        {`
          @media (max-width: 768px) {
            .follow-us-container {
              /* Increased zoom level */
              background-size: 250% auto !important;
              /* Adjusted position to keep left doodle centered */
              background-position: -10% center !important;
            }
          }
          
          @media (max-width: 480px) {
            .follow-us-container {
              /* Even more zoom for smaller screens */
              background-size: 300% auto !important;
              /* Adjusted position to keep left doodle centered */
              background-position: 8% center !important;
            }
          }
        `}
      </style>
    </>
  );
};

const styles = {
  container: {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${bomma})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    margin: 0,
    padding: 0,
    overflow: "hidden",
    position: "relative",
    border: "6px solid #C00000", // 🔴 Added red border for consistency
    boxSizing: "border-box",
  },
};

export default FollowUs;