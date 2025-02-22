import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/Auth/AuthPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AlumniDashboard from "./pages/alumni/AlumniDashboard";
import StudentDashboard from "./pages/student/StudentDashboard";
import PrivateRoute from "./routes/PrivateRoute"; // Import Protected Route
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AuthPage />} />

        {/* Protected Routes */}
        <Route
          path="/admin"
          element={
            <PrivateRoute allowedRoles={["admin"]}>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/alumni"
          element={
            <PrivateRoute allowedRoles={["alumni"]}>
              <AlumniDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/student"
          element={
            <PrivateRoute allowedRoles={["student"]}>
              <StudentDashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
