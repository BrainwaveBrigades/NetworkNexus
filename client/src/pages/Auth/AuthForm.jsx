import React from "react";
import SocialLogin from "./SocialLogin";

const AuthForm = ({ type }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(`${type === "sign-in" ? "Sign In" : "Sign Up"}:`, data);
  };

  return (
    <form onSubmit={handleSubmit} className={`${type}-form`}>
      <h2 className="title">{type === "sign-in" ? "Sign In" : "Sign Up"}</h2>

      {type === "sign-up" && (
        <div className="input-field">
          <i className="fas fa-user"></i>
          <input type="text" name="name" placeholder="Full Name" required />
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
