import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import ErrorPage from './components/ErrorPage';
import { } from 'react-router-dom';

const App = () => {
  const [user, setUser] = useState({ username: '', role: '' });

  const handleLogin = (user) => {
    setUser(user);
  };

  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Use element prop instead of component */}
        <Route path="/dashboard" element={
          user.role === 'admin' ? <Dashboard /> : user.role === 'visitor' ? <Home /> : <Navigate to="/login" replace />
        } />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        {/* Default route for handling undefined paths */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;