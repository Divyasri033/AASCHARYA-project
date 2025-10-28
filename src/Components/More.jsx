import React from "react";
import { useNavigate } from "react-router-dom";
import Image from "../assets/morebg.svg";

const More = () => {
  const navigate = useNavigate();
  
  const containerStyle = {
    border: "6px solid #C00000", // Added red border
    boxSizing: "border-box", // Ensures border is included in dimensions
    minHeight: "100vh",
    overflow: "hidden" // Prevents content from spilling over border
  };
  
  const backgroundStyle = {
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: '40px'
  };

  const buttonStyle = {
    padding: '19px 30px',
    borderRadius: '50px',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    backdropFilter: 'blur(5px)',
    width: '180px',
    border: 'none',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white'
  };

  const buttonContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
    marginRight: '-35px'
  };

  const handleBtsClick = () => {
    navigate("/bts");
  };

  const handleFollowUsClick = () => {
    navigate("/followus"); // Navigate to the FollowUs page
  };

  return (
    <div style={containerStyle}>
      <div style={backgroundStyle}>
        {/* Buttons on the right side */}
        <div style={buttonContainerStyle}>
          <button 
            style={buttonStyle}
            onClick={handleBtsClick}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 0, 0, 0.7)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'}
          >
            BTS
          </button>
          <button 
            style={buttonStyle}
            onClick={handleFollowUsClick}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 0, 0, 0.7)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'}
          >
            Follow 
          </button>
        </div>
      </div>
    </div>
  );
};

export default More;