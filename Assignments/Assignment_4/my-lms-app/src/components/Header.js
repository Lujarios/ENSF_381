import logo from '../images/logo.jpg';

function Header() {
	return (
		<header>
			<img src={logo} alt="LMS Logo" style={{ width: "100px", height: "100px" }} />
			<h1>LMS - Learning Management System</h1>
		</header>
	);
}
export default Header;