import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useLogin } from '../../hooks/useLogin';
import styles from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isPending, error } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  const navigate = useNavigate();
  const { user } = useAuthContext();

  useEffect(() => {
    user && navigate('/');
  }, [user]);

  return (
    <form onSubmit={handleSubmit} className={styles['login-form']}>
      <h1>Login</h1>
      <label>
        <span>Email:</span>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type='submit' className='btn'>
        {isPending ? 'Loading' : 'Login'}
      </button>
      {error && <p className='error'>{error}</p>}
    </form>
  );
};

export default Login;
