import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const ProtectedRoute = ({ element, allowedRoles }) => {
  const [user, loading] = useAuthState(auth);
  const [role, setRole] = React.useState(null);

  React.useEffect(() => {
    if (user) {
      const fetchRole = async () => {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setRole(userDoc.data().role);
        }
      };
      fetchRole();
    }
  }, [user]);

  if (loading) return <p>Loading...</p>;
  if (!user) return <Navigate to="/" replace />;
  if (!allowedRoles.includes(role)) return <Navigate to="/" replace />;

  return element;
};

export default ProtectedRoute;