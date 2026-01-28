import React, { useState } from 'react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const styles = {
    body: {
      margin: 0,
      padding: 0,
      backgroundColor: '#f4f6f9',
      fontFamily: "'Poppins', sans-serif",
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container: {
      backgroundColor: 'white',
      width: '30vw',
      minWidth: '350px',
      minHeight: '60vh',
      borderRadius: '3rem',
      border: '2px solid transparent',
      boxShadow: '0 0 15px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      animation: 'fadeInScale 0.8s ease forwards',
      transition: 'all 0.4s ease',
      padding: '20px',
    },
    h2: {
      marginTop: '3rem',
      marginBottom: '0.5rem',
      color: '#000',
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    h3: {
      color: 'grey',
      marginBottom: '2rem',
      fontWeight: 'normal',
      fontSize: '1rem',
    },
    h4: {
      color: 'grey',
      fontWeight: 'normal',
      marginBottom: '1rem',
      marginTop: '1rem',
      fontSize: '0.9rem',
    },
    field: {
      position: 'relative',
      width: '80%',
      marginBottom: '1.2rem',
    },
    icon: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'grey',
      left: '1rem',
      fontSize: '1rem',
    },
    toggleEye: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      right: '1rem',
      cursor: 'pointer',
      color: 'grey',
      fontSize: '1rem',
    },
    input: {
      width: '100%',
      height: '2.8rem',
      borderRadius: '2rem',
      border: 'none',
      outline: 'none',
      backgroundColor: 'lightgrey',
      paddingLeft: '2.8rem',
      paddingRight: '2.8rem',
      fontSize: '0.95rem',
      transition: 'all 0.3s ease',
      boxSizing: 'border-box',
    },
    forgot: {
      marginTop: '0.5rem',
      fontSize: '0.9rem',
      color: '#000080',
      textDecoration: 'none',
      cursor: 'pointer',
    },
    button: {
      marginTop: '1.8rem',
      width: '45%',
      minWidth: '150px',
      height: '2.8rem',
      borderRadius: '2rem',
      border: 'none',
      backgroundColor: 'red',
      color: 'white',
      fontSize: '0.95rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.4rem',
    },
    createBtn: {
      marginTop: '1rem',
      marginBottom: '2rem',
      width: '45%',
      minWidth: '150px',
      height: '2.8rem',
      borderRadius: '2rem',
      border: 'none',
      backgroundColor: 'red',
      color: 'white',
      fontSize: '0.95rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.4rem',
    },
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    
    if (!username.trim() || !password.trim()) {
      alert('Enter both username and password!');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      alert(`Welcome back, ${username}!`);
      // Add navigation logic here
    } else {
      alert('Invalid username or password!');
    }
  };

  const handleCreateAccount = () => {
    // Add navigation to create account page
    // window.location.href = '/register';
    console.log('Navigate to create account page');
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    alert('Password reset functionality will be implemented');
  };

  return (
    <div style={styles.body}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
          
          @keyframes fadeInScale {
            0% {
              opacity: 0;
              transform: translateY(30px) scale(0.95);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          .login-container:hover {
            transform: scale(1.03);
            border: 2px solid #000097 !important;
            box-shadow: 0 0 25px rgba(255,0,0,0.25) !important;
          }

          .login-container:focus-within {
            transform: scale(1.05);
            border: 2px solid #000097 !important;
            box-shadow: 0 0 30px rgba(255,0,0,0.35) !important;
          }

          .login-input:hover {
            background-color: #e0e0e0 !important;
          }

          .login-input:focus {
            background-color: white !important;
            box-shadow: 0 0 10px rgba(255,0,0,0.4) !important;
          }

          .login-forgot:hover {
            text-decoration: underline;
          }

          .login-button:hover {
            background-color: darkred !important;
            transform: scale(1.08) !important;
            box-shadow: 0 0 10px rgba(255,0,0,0.5) !important;
          }

          @media (max-width: 768px) {
            .login-container {
              width: 85vw !important;
              min-width: 280px !important;
            }
          }
        `}
      </style>

      <div className="login-container" style={styles.container}>
        <h2 style={styles.h2}>Sign In</h2>
        <h3 style={styles.h3}>or use your account</h3>

        <form onSubmit={handleSignIn} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Username Field */}
          <div style={styles.field}>
            <i className="fa-solid fa-user-shield" style={styles.icon}></i>
            <input
              className="login-input"
              type="text"
              placeholder="Username"
              required
              autoComplete="off"
              style={styles.input}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Password Field */}
          <div style={styles.field}>
            <i className="fa-solid fa-lock" style={styles.icon}></i>
            <input
              className="login-input"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              required
              autoComplete="off"
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i
              className={`fa-regular ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
              style={styles.toggleEye}
              onClick={togglePasswordVisibility}
            ></i>
          </div>

          <a
            href="https://profile.broadcom.com/web/forgot-password"
            className="login-forgot"
            style={styles.forgot}
            onClick={handleForgotPassword}
          >
            Forgot your password?
          </a>

          <button
            type="submit"
            className="login-button"
            style={styles.button}
          >
            <i className="fa-solid fa-arrow-right-to-bracket"></i>
            Sign In
          </button>
        </form>

        <h4 style={styles.h4}>Don't have an account? Create one now</h4>

        <button
          className="login-button"
          style={styles.createBtn}
          onClick={handleCreateAccount}
        >
          <i className="fa-solid fa-user-plus"></i>
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Login;