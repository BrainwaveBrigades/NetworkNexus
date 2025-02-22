import React, { useState } from "react";
import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import SocialLogin from "./SocialLogin";

const AuthForm = ({ type }) => {
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const { email, password, role } = data;

    try {
      if (type === "sign-up") {
        await createUserWithEmailAndPassword(auth, email, password);
        alert(`Account created successfully as ${role}!`);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`${type}-form`}>
      <h2 className="title">{type === "sign-in" ? "Sign In" : "Sign Up"}</h2>

      {error && <p className="error-text">{error}</p>}

      {type === "sign-up" && (
        <div className="input-field">
          <i className="fas fa-user"></i>
          <select name="role" required>
            <option value="" disabled selected>Select Your Role</option>
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
