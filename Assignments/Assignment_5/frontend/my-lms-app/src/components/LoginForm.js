import React, { useState, createContext } from 'react';
import AuthMessage from './AuthMessage';

export const CredentialsContext = createContext();

function LoginForm() {

	const [enteredUsername, setEnteredUsername] = useState("");
	const [enteredPassword, setEnteredPassword] = useState("");

	const [loginPressed, setLoginPressed] = useState(0);

	function setDetails() {
		let enteredUsername = document.getElementById("username").value;
		let enteredPassword = document.getElementById("password").value;
		setEnteredUsername(enteredUsername);
		setEnteredPassword(enteredPassword);
		setLoginPressed((old) => old + 1);
		console.log(loginPressed);
		console.log(enteredUsername);
		console.log(enteredPassword);

	}

	return (
		<div>
			<div>
				<h2>LMS Login</h2>
				<form>
					<label for="username">Username:</label>
					<input type="text" id="username" name="username" required />
					<br /><br />

					<label for="password">Password:</label>
					<input type="password" id="password" name="password" required />
					<br />
				</form>
				<br /><br />

				<button onClick={setDetails}>Login</button>
				<br /><br />
				<a href="#">Forgot Password?</a>
				<br />
			</div>
			<div>
				<CredentialsContext.Provider value={{ enteredUsername, enteredPassword, loginPressed }}>
					<AuthMessage />
				</CredentialsContext.Provider>

			</div>

		</div>

	);
}

export default LoginForm;

