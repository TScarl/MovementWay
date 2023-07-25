import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';

export default function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [login, { loading, error }] = useMutation(LOGIN);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login({
        variables: { email, password },
      });

      console.log(response.data.login);

      localStorage.setItem('token', response.data.login.token);
      setIsLoggedIn(true);
      navigate('/');

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
      {error && <p>Error: {error.message}</p>}
      {isLoggedIn &&<p>Not a user? <Link to="/signup">Signup here</Link></p>}
    </form>
  );
};