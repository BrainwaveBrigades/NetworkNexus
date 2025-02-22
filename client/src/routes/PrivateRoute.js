import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { getUserRole } from "../firebase/authService";

const PrivateRoute = ({ children, allowedRoles }) => {
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRole = async () => {
      const userRole = await getUserRole();
      setRole(userRole);
      setLoading(false);
    };

    fetchRole();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!auth.currentUser || !allowedRoles.includes(role)) return <Navigate to="/" />;

  return children;
};

export default PrivateRoute;
