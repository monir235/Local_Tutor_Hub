import React, { useState } from 'react';
import axios from 'axios';

const SignInWithEmail = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [registrationMessage, setRegistrationMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== retypePassword) {
      setRegistrationMessage('Passwords do not match.');
      return;
    }
    try {
      const response = await axios.post('http://localhost/prof.php', {
        name, // Make sure to include name here
        email,
        password,
        retypePassword
      });
      console.log(response.data);
      setRegistrationMessage('Registration successful!');
      // Reset all states
      setName('');
      setEmail('');
      setPassword('');
      setRetypePassword('');
    } catch (error) {
      console.error(error);
      setRegistrationMessage('');
    }
  };

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f4f4f4',
      margin: '0',
      padding: '0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <div style={{
        width: '300px',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
      }}>
        <h2 style={{ textAlign: 'center', color: '#0000ff' }}>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              margin: '8px 0',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box'
            }}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              margin: '8px 0',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box'
            }}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              margin: '8px 0',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box'
            }}
            required
          />
          <input
            type="password"
            placeholder="Retype Password"
            value={retypePassword}
            onChange={(e) => setRetypePassword(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              margin: '8px 0',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box'
            }}
            required
          />
          <button
            type="submit"
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
            Register
          </button>
        </form>
        {registrationMessage && (
          <p style={{ textAlign: 'center', color: registrationMessage.includes('successful') ? 'green' : 'red' }}>
            {registrationMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default SignInWithEmail;
