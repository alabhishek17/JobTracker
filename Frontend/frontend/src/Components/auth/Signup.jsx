import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignup() {
    try {
      await axios.post('http://localhost:10000/auth/signup', {
        username,
        password,
      });
//     const token = localStorage.getItem("token");
// const res = await axios.post("http://localhost:10000/auth/signup", 
//   { username: "yourUsername", password: "yourPassword" },
//   {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//   }
// );

      alert('Account Created! Now Login');
      window.location.href = '/';
    } catch (error) {
      alert(error.response?.data?.msg || 'Signup failed!');
    }
  }

  return (
    <div className="auth-container">
      <h2>Signup</h2>
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
      <button onClick={handleSignup}>Sign Up</button>
      <p>Already have an account? <a href="/">Login</a></p>
    </div>
  );
}
