import React from "react";

const SocialLogin = () => {
  const handleSocialAuth = (provider) => {
    console.log(`Authenticate with ${provider}`);
  };

  return (
    <div className="social-media">
      {["google", "github"].map((provider) => (
        <button key={provider} className="social-icon" onClick={() => handleSocialAuth(provider)}>
          <i className={`fab fa-${provider}`}></i>
        </button>
      ))}
    </div>
  );
};

export default SocialLogin;
