import React, { useState, createContext } from 'react';


// Function to make a fetch request
async function attemptLogin(event, setMessage) {
	event.preventDefault();

	// get username and password from the form
	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;

	console.log("Attempting login:", username, password);

	const response = await fetch("http://localhost:5000/validate_login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ username: username, password: password }),
	});

	if (response.ok) {
		const data = await response.json();
		console.log(data.message);
		setMessage(data.message);

		if (data.success) {
			// Wait 2s
			await new Promise(resolve => setTimeout(resolve, 2000));
			window.location.href = "/predict";
		}
	}
}


function LoginPage() {

	const [message, setMessage] = useState("");


	return (
		<div className="login-page" >
			<h1>Login</h1>
			<br />
			<form>
				<label htmlFor="username">Username:</label>
				<input className="login-page"
					type="text" id="username" name="username" required />
				<br />
				<label htmlFor="password">Password:</label>
				<input className="login-page" type="password" id="password" name="password" required />
				<br />
				<button className="login-page" type="submit" onClick={(event) => attemptLogin(event, setMessage)}>Login</button>
			</form>
			<div className="message">
				{message}
			</div>
		</div>
	);
}

export default LoginPage;