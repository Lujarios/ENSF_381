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
		<div className="login-page">
			<h1>Login Page</h1>
			<form>
				<label htmlFor="username">Username:</label>
				<input type="text" id="username" name="username" required />

				<label htmlFor="password">Password:</label>
				<input type="password" id="password" name="password" required />
				<button onClick={attemptLogin}>Login</button>
			</form>
		</div>
	);
}

export default LoginPage;