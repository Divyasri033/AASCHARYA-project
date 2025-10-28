import React from "react";
import bomma from "../assets/Bomma-1.svg"; // Import the SVG file

const FollowUs = () => {
  return (
    <>
      <div style={styles.container}></div>
      <style>
        {`
          @keyframes moveBackground {
            0% {
              background-position: 0% 0%;
            }
            25% {
              background-position: 100% 0%;
            }
            50% {
              background-position: 100% 100%;
            }
            75% {
              background-position: 0% 100%;
            }
            100% {
              background-position: 0% 0%;
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
    backgroundImage: `url(${bomma})`, // Use the imported SVG
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    margin: 0,
    padding: 0,
    overflow: "hidden",
    animation: "moveBackground 30s linear infinite", // Add the animation
  },
};

export default FollowUs;