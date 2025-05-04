import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const login = localStorage.getItem('login');
    if (login) {
      navigate('/');
    }
  }, [navigate]);

  function loginForm(e) {
    e.preventDefault();

    const validationErrors = {};
    if (!email) validationErrors.email = 'Email is required';
    if (!password) validationErrors.password = 'Password is required';

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      localStorage.setItem('login', true);
      navigate('/cart');
    }
  }

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form className="login-form" onSubmit={loginForm}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrors((prev) => ({ ...prev, email: '' }));
          }}
        />
        <label>{errors.email && <p style={{ color: 'red' }}>*{errors.email}</p>}</label>

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setErrors((prev) => ({ ...prev, password: '' }));
          }}
        />
        <label>{errors.password && <p style={{ color: 'red' }}>*{errors.password}</p>}</label>

        <Button variant="dark" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
