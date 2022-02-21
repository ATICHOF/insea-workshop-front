import React from "react";
import Button from "../components/ui/Button";
import Input from "../components/ui/input";
import LinkButton from "../components/ui/LinkButton";
import "../styles/container.css";
const SignUp = () => {
  return (
    <div className="SignUp">
      <h1>Sign up to start uploading</h1>
      <Input name="Name" />
      <Input name="Email" />
      <Input name="Password" />
      <p>
        <LinkButton text="Forgot Password ?" link={"/forgotpass"} />
      </p>
      <Button textbtn="Sign In" />
    </div>
  );
};

export default SignUp;
