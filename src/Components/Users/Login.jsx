import React, { useState } from 'react';
import { auth } from './firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Successfully logged in!')
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button onClick={ signIn}>Login</button>
      </div>
    </div>
  );
}

export default Login;