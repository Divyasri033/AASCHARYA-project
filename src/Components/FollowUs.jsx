import React from "react";
import bomma from "../assets/Bomma-1.svg"; // Import the SVG file

const FollowUs = () => {
  return (
    <div style={styles.container}></div>
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
  },
};

export default FollowUs;