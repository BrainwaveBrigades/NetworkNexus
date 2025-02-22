import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import SocialLogin from "./SocialLogin";

const AuthForm = ({ type }) => {
  const [error, setError] = useState("");
  const [role, setRole] = useState(""); // Added state for role selection
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const { email, password } = data;

    try {
      if (type === "sign-up") {
        if (!role) {
          setError("Please select a role.");
          return;
        }

        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Store role in Firestore under "users" collection
        await setDoc(doc(collection(db, "users"), user.uid), { email, role });

        alert(`Account created successfully as ${role}!`);
        redirectUser(role);
      } else {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Fetch user role from Firestore
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          redirectUser(userData.role);
        } else {
          throw new Error("User role not found.");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const redirectUser = (role) => {
    if (role === "admin") navigate("/admin");
    else if (role === "alumni") navigate("/alumni");
    else if (role === "student") navigate("/student");
    else navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className={`${type}-form`}>
      <h2 className="title">{type === "sign-in" ? "Sign In" : "Sign Up"}</h2>

      {error && <p className="error-text">{error}</p>}

      {type === "sign-up" && (
        <div className="input-field">
          <i className="fas fa-user"></i>
          <select name="role" value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="" disabled>Select Your Role</option>
            <option value="alumni">Alumni</option>
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>
        </div>
      )}

      <div className="input-field">
        <i className="fas fa-envelope"></i>
        <input type="email" name="email" placeholder="Email" required />
      </div>

      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input type="password" name="password" placeholder="Password" required />
      </div>

      <button type="submit" className="btn solid">
        {type === "sign-in" ? "Login" : "Sign Up"}
      </button>

      <p className="social-text">Or {type === "sign-in" ? "Sign in" : "Sign up"} with</p>
      <SocialLogin />
    </form>
  );
};

export default AuthForm;
