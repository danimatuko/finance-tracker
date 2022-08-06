import React, { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';
import styles from './signup.module.css';

const Signup = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup, isPending, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName);
  };

  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
      <h1>Signup</h1>

      <label>
        <span>Email:</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label>
        <span>Display Name:</span>
        <input
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </label>

      {isPending ? (
        <button className="btn" disabled>
          Loading
        </button>
      ) : (
        <button type="submit" className="btn">
          Signup
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
};

export default Signup;
