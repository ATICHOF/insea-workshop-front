import React from "react";

import "../../styles/component.css";
const Input = ({ name, ttype, valuee, onchangnt }) => {
  const handleOnChange = (e) => {
    if (onchangnt) {
      onchangnt(e.target.value);
    }
    return null;
  };
  return (
    <div className="input">
      <label>{name}</label>
      <input
        className="txtinput"
        type={ttype}
        value={valuee}
        onChange={handleOnChange}
      ></input>
    </div>
  );
};

export default Input;
