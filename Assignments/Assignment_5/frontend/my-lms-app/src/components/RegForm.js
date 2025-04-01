

function RegForm() {
	return (
		<div className="container">
			<h2>Registration Form</h2>
			<form>
				<div className="form-group">
					<label htmlFor="username">Username:</label>
					<input type="text" className="form-control" id="username" />
				</div>
				<div className="form-group">
					<label htmlFor="email">Email:</label>
					<input type="email" className="form-control" id="email" />
				</div>
				<div className="form-group">
					<label htmlFor="password">Password:</label>
					<input type="password" className="form-control" id="password" />
				</div>
				<button type="submit" className="btn btn-primary">Register</button>
			</form>
		</div>
	);
}

export default RegForm;