import React from "react";
import Button from "../components/ui/Button";
import Input from "../components/ui/input";
import "../styles/container.css";
const RestPass = () => {
  return (
    <div className="RestPass">
      <h1>Reset your Password</h1>
      <Input name="New Password" />
      <Input name="Confirm New Password" />
      <Button textbtn="Submit" />
    </div>
  );
};

export default RestPass;
