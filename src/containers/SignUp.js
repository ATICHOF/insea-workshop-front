import React, { useState, useEffect, useCallback } from "react";
import Button from "../components/ui/Button";
import Input from "../components/ui/input";
import LinkButton from "../components/ui/LinkButton";
import "../styles/container.css";
import { useNavigate } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";
import { setAuthToken } from "../utils/auth";
import { validate } from "email-validator";

export const SIGNUP_MUTATION = gql`
	mutation signUp($input: SignUpInput!) {
		signUp(input: $input) {
			success
			message
			token
		}
	}
`;

const SignUp = () => {
	let navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [dirty, setDirty] = useState(false);
	const [disabled, setDisabled] = useState(false);

	const [signUp] = useMutation(SIGNUP_MUTATION);

	const handleSignUp = async (e) => {
		e.preventDefault();

		if (!dirty && !disabled) {
			setDirty(true);
			handleValidation();
		}

		try {
			const {
				data: { signUp: result },
			} = await signUp({
				variables: {
					input: {
						email: email,
						password: password,
						name: name,
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
		const validName = /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(name);

		// Unable to send form unless fields are valid.
		if (dirty) {
			setDisabled(
				!validate(email) ||
					password.length < 7 ||
					!validPassword ||
					!validName ||
					name.length < 3
			);
		}
	}, [email, password, dirty, name]);

	useEffect(() => {
		handleValidation();
	}, [handleValidation]);

	return (
		<div className="SignUp">
			<h1>Sign up to start uploading</h1>
			<form onSubmit={handleSignUp}>
				<Input
					ttype={"name"}
					name="Name"
					valuee={name}
					onchangnt={setName}
				/>
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
					<LinkButton text="Forgot Password ?" link={"/forgotpass"} />
				</p>
				<Button textbtn="Sign In" ttype={"submit"} />
			</form>
		</div>
	);
};

export default SignUp;
