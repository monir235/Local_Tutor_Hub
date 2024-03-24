// Login.js

import React from 'react';


const Login = ({ onPageChange }) => {
  const handleLoginClick = () => {
    onPageChange('Admin'); // Navigate to Home page (Admin) when the Login button is clicked
  };
  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif',
      margin: '0',
      padding: '0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundImage: 'url("/tutor.jpeg")', // Adjust the path to your image
      backgroundSize: 'cover',
    }}>
      <div style={{ 
        width: '300px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Adjust the opacity as needed
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        marginTop: '50px' // Adjust the margin-top to move the box down
      }}>
        <h2 style={{ textAlign: 'center', color: '#0000ff' }}>Admin Login</h2>
        <form>
          <input
            type="text"
            placeholder="Username"
            style={{ 
              width: '100%',
              padding: '10px',
              margin: '8px 0',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box'
            }}
          />
          <input
            type="password"
            placeholder="Password"
            style={{ 
              width: '100%',
              padding: '10px',
              margin: '8px 0',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box'
            }}
          />
          <button
            onClick={handleLoginClick} // Trigger handleLoginClick function when the button is clicked
            style={{ 
              width: '100%',
              backgroundColor: '#0000ff',
              color: 'white',
              padding: '10px 0',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Login
          </button>
        </form>
      </div>
      <h1 style={{ fontSize:'100px',color: 'black', marginTop: '150px' }}>Local-Tutor-Hub</h1>
    </div>
  );
};

export default Login;
