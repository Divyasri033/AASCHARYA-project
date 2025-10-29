import React, { useEffect } from "react";

const Bts = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#C00000";
    document.body.style.margin = "0";
  }, []);

  const containerStyle = {
    backgroundColor: '#C00000',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100%',
    margin: 0,
    padding: 0,
    display: 'block',
  };

  return <div style={containerStyle}></div>;
};

export default Bts;
