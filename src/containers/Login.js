import { validate } from "email-validator";
import React, { useState, useEffect, useCallback } from "react";
import Button from "../components/ui/Button";
import Input from "../components/ui/input";
import LinkButton from "../components/ui/LinkButton";
import "../styles/container.css";
import { useMutation, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { setAuthToken } from "../utils/auth";

export const LOGIN_MUTATION = gql`
	mutation login($input: LoginInput!) {
		login(input: $input) {
			success
			message
			token
		}
	}
`;

const Login = () => {
	let navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [dirty, setDirty] = useState(false);
	const [disabled, setDisabled] = useState(false);

	const [login] = useMutation(LOGIN_MUTATION);

	const handleLogin = async (e) => {
		e.preventDefault();

		if (!dirty && !disabled) {
			setDirty(true);
			handleValidation();
		}

		try {
			const {
				data: { login: result },
			} = await login({
				variables: {
					input: {
						email: email,
						password: password,
					},
				},
			});
			if (result.success) {
				setAuthToken(result.token);

				navigate("/home");
			}

			throw result;
		} catch (e) {
			console.log(e);
			setDisabled(false);
		}
	};

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

	return (
		<div className="login">
			<h1>Welcome Back to Fastcast</h1>
			<form onSubmit={handleLogin}>
				<Input
					ttype={"email"}
					name="Email"
					valuee={email}
					onchangnt={setEmail}
				/>
				<Input
					name="Password"
					valuee={password}
					onchangnt={setPassword}
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
