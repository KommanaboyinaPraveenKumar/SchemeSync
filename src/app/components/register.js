'use client';
import { Lock } from 'lucide-react';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  }
    return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}