import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/Auth/AuthPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AlumniDashboard from "./pages/alumni/AlumniDashboard";
import StudentDashboard from "./pages/student/StudentDashboard";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/alumni" element={<AlumniDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
