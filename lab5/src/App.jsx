import { Routes, Route } from "react-router";
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Login from "./components/Login";
import { useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import Config from "./components/Config";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Routes>
      <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated}/>} />

      <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="home" element={<Home />} />
          <Route path="config" element={<Config />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
