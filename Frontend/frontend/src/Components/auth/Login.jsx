import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
   try {
    console.log("Logging in with:", username, password)
  const res = await axios.post('http://localhost:10000/auth/login', {
    username,
    password,
  });

  localStorage.setItem('token', res.data.token);
  window.location.href = '/dashboard';
} catch (error) {
  alert(error.response?.data?.msg || 'Login failed!');
}
  }

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /><br/>
      <input
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      /><br/>
      <button onClick={handleLogin}>Login</button>
      <p>Don't have an account? <a href="/signup">Sign Up</a></p>
    </div>
  );
}
