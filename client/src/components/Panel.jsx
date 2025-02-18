import React from "react";

const Panel = ({ type, title, description, buttonText, setSignUpMode }) => {
  return (
    <div className={`panel ${type}-panel`}>
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="btn transparent" onClick={setSignUpMode}>
          {buttonText}
        </button>
      </div>
      <img
        src={`https://raw.githubusercontent.com/sefyudem/Sliding-Sign-In-Sign-Up-Form/955c6482aeeb2f0e77c1f3c66354da3bc4d7a72d/img/${type === "left" ? "log" : "register"}.svg`}
        className="image"
        alt=""
      />
    </div>
  );
};

export default Panel;
