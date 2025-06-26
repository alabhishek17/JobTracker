import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Components/auth/Login';
import Signup from './Components/auth/Signup';
import Dashboard from './Components/Dashboard/Dashboard';
import './App.css';

export default function App() {
  const token = localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={token ? <Navigate to="/dashboard" /> : <Login />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={token ? <Dashboard /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}
