import logo from '../images/logo.jpg';

function Header() {

	return (
		<a>
			<header>
				<img src={logo} alt="LMS Logo" style={{ width: '100px', height: '100px' }} />
				<h1>LMS - Learning Management System</h1>
			</header>
			<div>
				<nav>
					<a href="/">Home</a>
					<a href="/courses">Courses</a>
					<a href="/login">Login</a>
				</nav>
			</div>
		</a>
	);
}

export default Header;