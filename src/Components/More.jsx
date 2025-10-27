import React from "react";
import { useNavigate } from "react-router-dom";
import Image from "../assets/Canva bg_1.jpeg";

const More = () => {
  const navigate = useNavigate();
  
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
    padding: '13px 25px',
    borderRadius: '50px',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    backdropFilter: 'blur(5px)',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
    width: '180px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    border: 'none'
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
          Follow Us
        </button>
      </div>
    </div>
  );
};

export default More;