import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER, LOGIN } from '../utils/mutations';

const LoginPage = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  const [addUser, { loading: signupLoading, error: signupError }] = useMutation(ADD_USER);
  const [login, { loading: loginLoading, error: loginError }] = useMutation(LOGIN);

  const handleSignup = async (e) => {
    e.preventDefault();
    
    try {
        const response = await addUser({
            variables: { firstName, lastName, email, password },
          });

          console.log(response.data.addUser);

      localStorage.setItem('token', response.data.addUser.token);
      setIsLoggedIn(true);
      navigate('/');

    } catch (err) {
      console.error(err);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login({
        variables: { email, password },
      });

      localStorage.setItem('token', response.data.login.token);
      setIsLoggedIn(true);
      navigate('/');

    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, User!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" disabled={loginLoading}>
              {loginLoading ? 'Logging in...' : 'Login'}
            </button>
            {loginError && <p>Error: {loginError.message}</p>}
            {isLoggedIn &&<p>Not a user? <Link to="/signup">Signup here</Link></p>}
          </form>

          <h2>Signup</h2>
          <form onSubmit={handleSignup}>
          <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" disabled={signupLoading}>
        {signupLoading ? 'Signing up...' : 'Sign Up'}
      </button>
      {signupError && <p>Error: {signupError.message}</p>}
      {isLoggedIn && <p>Already a user? <Link to="/login">Login here</Link></p>}
          </form>
          {signupError && <p>Error: {signupError.message}</p>}
        </div>
      )}
    </div>
  );
};

export default LoginPage;