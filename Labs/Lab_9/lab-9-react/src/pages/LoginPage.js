// Function to make a fetch request
async function attemptLogin(event) {
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
		if (data.success) {
			// route to /predict
			window.location.href = "/predict";
		}
	}
}

function LoginPage() {


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
				<button className="login-page" type="submit" onClick={attemptLogin}>Login</button>
			</form>
			<div className="message">
			</div>
		</div>
	);
}

export default LoginPage;