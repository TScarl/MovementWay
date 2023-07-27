import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER, LOGIN } from '../utils/mutations';

const LoginPage = () => {
  // Initialize the 'navigate' function from the 'useNavigate' hook
  const navigate = useNavigate();

  // Define state variables for form inputs and user login status
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  // Define GraphQL mutations and handle loading and error states
  const [addUser, { loading: signupLoading, error: signupError }] = useMutation(ADD_USER);
  const [login, { loading: loginLoading, error: loginError }] = useMutation(LOGIN);

  // Function to handle user signup
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // Call the 'addUser' mutation with user signup data
      const response = await addUser({
        variables: { firstName, lastName, email, password },
      });

      console.log(response.data.addUser);

      // Save the user token to local storage and set the logged-in state to true
      localStorage.setItem('token', response.data.addUser.token);
      setIsLoggedIn(true);
      navigate('/');

    } catch (err) {
      console.error(err);
    }
  };

  // Function to handle user login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Call the 'login' mutation with user login data
      const response = await login({
        variables: { email, password },
      });

      // Save the user token to local storage and set the logged-in state to true
      localStorage.setItem('token', response.data.login.token);
      setIsLoggedIn(true);
      navigate('/');

    } catch (err) {
      console.error(err);
    }
  };

  // Function to handle user logout
  const handleLogout = () => {
    // Remove the user token from local storage and set the logged-in state to false
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  // Render the login and signup forms conditionally based on the user login status
  return (
    <div>
      {isLoggedIn ? (
        // If the user is logged in, display a welcome message and logout button
        <div>
          <h2>Welcome, User!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        // If the user is not logged in, display the login and signup forms
        <div>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            {/* Input fields for email and password */}
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
            {/* Button for user login */}
            <button type="submit" disabled={loginLoading}>
              {loginLoading ? 'Logging in...' : 'Login'}
            </button>
            {/* Display login error if login fails */}
            {loginError && <p>Error: {loginError.message}</p>}
            {/* Display a link to the signup page if not logged in */}
            {isLoggedIn && <p>Not a user? <Link to="/signup">Signup here</Link></p>}
          </form>

          <h2>Signup</h2>
          <form onSubmit={handleSignup}>
            {/* Input fields for first name, last name, email, and password */}
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
            {/* Button for user signup */}
            <button type="submit" disabled={signupLoading}>
              {signupLoading ? 'Signing up...' : 'Sign Up'}
            </button>
            {/* Display signup error if signup fails */}
          {signupError && <p>Error: {signupError.message}</p>}
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginPage;