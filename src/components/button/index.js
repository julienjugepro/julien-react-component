import "./button.scss";

import React from "react";

const Button = ({ children }) => {
  return (
    <button style={{ color: "red" }} className="julien-button">
      {children}
    </button>
  );
};

export default Button;
