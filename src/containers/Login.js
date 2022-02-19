import { validate } from "email-validator";
import React, { useState, useEffect, useCallback } from "react";
import Button from "../components/ui/Button";
import Input from "../components/ui/input";
import LinkButton from "../components/ui/LinkButton";
import "../styles/container.css";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");
	const [dirty, setDirty] = useState(false);
	const [disabled, setDisabled] = useState(false);

	const handleValidation = useCallback(() => {
		// Test for Alphanumeric password
		const validPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(password);

		// Unable to send form unless fields are valid.
		if (dirty) {
			setDisabled(
				!validate(email) || password.length < 7 || !validPassword
			);
		}
	}, [email, password, dirty]);

	useEffect(() => {
		handleValidation();
	}, [handleValidation]);

	const handleLogin = async (e) => {
		e.preventDefault();

		if (!dirty && !disabled) {
			setDirty(true);
			handleValidation();
		}

		try {
			setLoading(true);
			setMessage("");
			console.log("asd");
			// Call API to log user in
			setLoading(false);
		} catch (e) {
			setMessage(e.message);
			setLoading(false);
			setDisabled(false);
		}
	};

	return (
		<div className="login">
			<h1>Welcome Back to Fastcast</h1>
			<form onSubmit={handleLogin}>
				<Input name="Email" value={email} onChange={setEmail} />
				<Input
					name="Password"
					value={password}
					onChange={setPassword}
					ttype={"password"}
				/>

				<p>
					<LinkButton
						text="Forgot your Password ?"
						link={"/forgotpass"}
					/>
				</p>

				<Button textbtn="Login" ttype={"submit"} />
				<p color="#666666">
					Don't have an Account?{" "}
					<LinkButton text="Sign Up" link={"signup"} />
				</p>
			</form>
		</div>
	);
};

export default Login;
