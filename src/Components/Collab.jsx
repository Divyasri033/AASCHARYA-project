import React from "react";

const CollaborationSection = () => {
  const styles = {
    collabSection: {
      backgroundColor: "#c00000", // ✅ same as footer color
      color: "#fff",
      textAlign: "center",
      padding: "35px 15px", // slightly more padding for balance
      width: "100%",
      margin: 0,
      border: "none",
    },
    collabText: {
      fontSize: "1.3rem", // ✅ increased from 1.1rem
      margin: 0,
      lineHeight: "1.8",
      fontWeight: 500, // slightly bolder
      letterSpacing: "0.3px",
    },
    mailLink: {
      color: "#fffacd", // soft gold-like highlight for better visibility
      textDecoration: "none",
      fontWeight: "700",
    },
  };

  return (
    <section style={styles.collabSection}>
      <p style={styles.collabText}>
        For collaborations or partnerships, mail us at{" "}
        <a
          href="mailto:aascharyamusic@gmail.com?subject=Collaboration Inquiry"
          style={styles.mailLink}
        >
          aascharyamusic@gmail.com
        </a>
      </p>
    </section>
  );
};

export default CollaborationSection;
