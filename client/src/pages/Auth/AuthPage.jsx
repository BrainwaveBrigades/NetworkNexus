import React, { useState } from "react";
import AuthForm from "./AuthForm";
import Panel from "./Panel";

const AuthPage = () => {
  const [signUpMode, setSignUpMode] = useState(false);

  return (
    <div className={`container ${signUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <AuthForm type="sign-in" />
          <AuthForm type="sign-up" />
        </div>
      </div>

      <div className="panels-container">
        <Panel
          type="left"
          title="New to our platform?"
          description="Join our alumni network and stay connected with your fellow graduates!"
          buttonText="Sign Up"
          setSignUpMode={() => setSignUpMode(true)}
        />
        <Panel
          type="right"
          title="Already have an account?"
          description="Sign in to access your alumni network and stay updated with the latest events!"
          buttonText="Sign In"
          setSignUpMode={() => setSignUpMode(false)}
        />
      </div>
    </div>
  );
};

export default AuthPage;
