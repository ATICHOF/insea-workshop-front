import React from "react";
import "../../styles/component.css";

const Button = ({ textbtn, ttype }) => {
  return (
    <button className="btn" type={ttype}>
      {textbtn}
    </button>
  );
};

export default Button;
