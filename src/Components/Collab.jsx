import React from "react";

const CollaborationSection = () => {
  const styles = {
    collabSection: {
      backgroundColor: "#8B0000", // same as footer color
      color: "#fff",
      textAlign: "center",
      padding: "25px 10px",
      borderTop: "1px solid #fff",
      borderBottom: "1px solid #fff",
      width: "100%",
    },
    collabText: {
      fontSize: "1.1rem",
      margin: 0,
      lineHeight: "1.6",
      fontWeight: 400,
    },
    mailLink: {
      color: "#FFD700",
      textDecoration: "none",
      fontWeight: "600",
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
