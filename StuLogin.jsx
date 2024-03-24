import React, { useState } from 'react';

const StuLogin = ({ onPageChange }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost/studentprofile.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
    
            if (response.ok) {
                const data = await response.json();
                setLoginStatus(data.message);
                if (data.success) {
                    onPageChange('StuInfo'); // Navigate to 'StuInfo' page if login successful
                }
            } else {
                throw new Error('Login failed');
            }
        } catch (error) {
            console.error('Error:', error);
            setLoginStatus('Login failed');
            onPageChange('StuInfo'); // Navigate to 'StuInfo' page even if login fails
        }
    };

    return (
        <div style={styles.loginContainer}>
            <h1 style={styles.header}>Student Login</h1>
            <div style={styles.inputContainer}>
                <label style={styles.label}>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.inputContainer}>
                <label style={styles.label}>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input} />
            </div>
            <button onClick={handleLogin} style={styles.button}>Login</button>
            {loginStatus && <p style={styles.loginStatus}>{loginStatus}</p>}
        </div>
    );
};

const styles = {
    loginContainer: {
        width: '350px',
        height: '350px',
        margin: '50px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
    },
    header: {
        marginBottom: '20px',
        textAlign: 'center',
    },
    inputContainer: {
        marginBottom: '15px',
    },
    label: {
        display: 'block',
        marginBottom: '5px',
    },
    input: {
        width: 'calc(100% - 10px)',
        padding: '5px',
        border: '1px solid #ccc',
        borderRadius: '3px',
    },
    button: {
        display: 'block',
        width: '100%',
        padding: '8px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '3px',
        cursor: 'pointer',
    },
    loginStatus: {
        marginTop: '15px',
        color: '#900',
    }
};

export default StuLogin;
