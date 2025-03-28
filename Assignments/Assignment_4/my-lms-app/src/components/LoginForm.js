// /*
// A. LoginForm Component: 
// 	a. UI Elements: 
// 	  - Username and Password input fields. 
// 	  - Login button. 
// 	  - Forgot Password link (non-functional). 
// 	b. Validate inputs: 
// 	  - Username and password cannot be empty. 
// 	  - Password must be at least 8 characters. 
// 	c. API Integration: 
// 	  - Fetch user data from https://jsonplaceholder.typicode.com/users. 
// 	  - Validate credentials against the API’s username and email fields. 
// 	d. Dynamic Feedback: 
// 	  - Display success/error messages in a styled <div>. 
// 	  - Redirect to /courses on successful login after 2 seconds. 
// 	c. Implementation Details 
// 	  - Use useState for form state management. 
// 	  - Use useEffect to handle API calls and redirects. 
// 	  - Style the form to match the LMS theme (reuse CSS classes from Homepage)

// B. AuthMessage Component: 
// 	a. Implement global state management for user authentication using useContext hook. 
// 	  - Create the context and context provider in LoginForm.js. 
//    - Consume the username and password contexts in AuthMessage.js.  
// 	b. Display styled success/error messages from DisplayStatus.js component. 
// 	c. Use the following props to render the DisplayStatus.js component: 
// 	  - type: "success" or "error". 
// 	  - message: Text to display.
// */

import React, {useState, useEffect, createContext} from 'react';
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
				<CredentialsContext.Provider value={{ enteredUsername,enteredPassword, loginPressed}}>
					<AuthMessage/>
				</CredentialsContext.Provider>
				
			</div>

		</div>
		
	);
}

export default LoginForm;


// import React, { useState, createContext } from 'react';
// import AuthMessage from './AuthMessage';

// export const CredentialsContext = createContext();

// function LoginForm() {
//   const [enteredUsername, setEnteredUsername] = useState("");
//   const [enteredPassword, setEnteredPassword] = useState("");
//   const [loginPressed, setLoginPressed] = useState(0);

//   const setDetails = () => {
//     const enteredUsername = document.getElementById("username").value;
//     const enteredPassword = document.getElementById("password").value;
//     setEnteredUsername(enteredUsername);
//     setEnteredPassword(enteredPassword);
//     setLoginPressed(prev => prev + 1); // Trigger a re-render
//   };

//   return (
//     <div>
//       <h2>LMS Login</h2>
//       <form>
//         <label htmlFor="username">Username:</label>
//         <input type="text" id="username" name="username" required />
//         <br /><br />
//         <label htmlFor="password">Password:</label>
//         <input type="password" id="password" name="password" required />
//         <br />
//       </form>
//       <br /><br />
//       <button onClick={setDetails}>Login</button>
//       <br /><br />
//       <a href="#">Forgot Password?</a>
//       <br />
      
//       <CredentialsContext.Provider value={{ enteredUsername, enteredPassword, loginPressed }}>
//         <AuthMessage />
//       </CredentialsContext.Provider>
//     </div>
//   );
// }

// export default LoginForm;
