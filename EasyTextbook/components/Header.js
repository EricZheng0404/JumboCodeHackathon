import React from 'react';

const Header = () => {
  // Example click handler function
  const handleButtonClick = (buttonName) => {
    alert(`${buttonName} button clicked!`);
  };

  // Inline styles for the header and buttons
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    color: '#111111',
    padding: '10px 20px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    margin: '0 10px',
    backgroundColor: '#007bff',
    color: 'white',
  };

  return (
    <div style={headerStyle}>
      <h1>EasyTextbook</h1>
      <div>
        <button style={buttonStyle} onClick={() => handleButtonClick('Home')}>Home</button>
        <button style={buttonStyle} onClick={() => handleButtonClick('Resources')}>Resources</button>
        <button style={buttonStyle} onClick={() => handleButtonClick('QA')}>Q&A</button>

      </div>
    </div>
  );
};

export default Header;
