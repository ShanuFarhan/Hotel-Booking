import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from "../../Firebase/config";
import "./LoginGoogle.css";

const LoginGoogle = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleClick = async () => {
    signInWithPopup(auth,provider).then((data)=>{
      console.log(data.user.email);
      setValue(data.user.email)
      localStorage.getItem("email",data.user.email)
    })
  };
  useEffect(() => {
    setValue(localStorage.getItem('email'));
  });
  const handleEmailAuth = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    
    setIsLoading(true);
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      navigate("/home");
    } catch (error) {
      console.error("Auth error:", error);
      if (error.code === 'auth/email-already-in-use') {
        setError('Email already in use. Please sign in instead.');
      } else if (error.code === 'auth/weak-password') {
        setError('Password should be at least 6 characters.');
      } else if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        setError('Invalid email or password.');
      } else {
        setError('An error occurred. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (value) {
    navigate("/home");
    return null;
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>{isSignUp ? 'Create Account' : 'Welcome Back'}</h2>
          <p>{isSignUp ? 'Sign up to get started' : 'Sign in to continue'}</p>
        </div>

        <form onSubmit={handleEmailAuth}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              required
              minLength="6"
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button 
            type="submit" 
            className="login-button"
            disabled={isLoading}
          >
            {isLoading ? 'Please wait...' : (isSignUp ? 'Sign Up' : 'Sign In')}
          </button>
        </form>

        <div className="divider">
          <span>or continue with</span>
        </div>

        <button 
          className="google-button" 
          onClick={handleClick}
          disabled={isLoading}
        >
          <img 
            src="https://static.vecteezy.com/system/resources/previews/012/871/371/original/google-search-icon-google-product-illustration-free-png.png" 
            alt="Google" 
            className="google-icon"
          />
          Sign in with Google
        </button>

        <div className="divider">
          <span>{isSignUp ? 'Already have an account?' : "Don't have an account?"}</span>
        </div>

        <button 
          className="google-button"
          onClick={() => {
            setIsSignUp(!isSignUp);
            setError("");
            setEmail("");
            setPassword("");
          }}
          style={{ marginTop: '10px' }}
        >
          {isSignUp ? 'Sign In Instead' : 'Create Account'}
        </button>
      </div>
    </div>
  );
};

export default LoginGoogle;

