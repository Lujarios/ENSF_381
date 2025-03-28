
function LoginPage() {


	return (
		<div className="login-page" >
				<h1>Login</h1>
				<br />
				<form>
					<label htmlFor="username">Username:</label>
					<input className = "login-page"
					type="text" id="username" name="username" required />
					<br />
					<label htmlFor="password">Password:</label>
					<input className = "login-page" type="password" id="password" name="password" required />
					<br />
					<button className = "login-page" type="submit" >Login</button>
				</form>

				<div className = "message">

				</div>
		</div>
	);
}

export default LoginPage;