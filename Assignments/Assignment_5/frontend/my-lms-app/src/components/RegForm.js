
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';


// function RegForm() {
// 	const navigate = useNavigate();

// 	const [username, setUsername] = useState('');
// 	const [email, setEmail] = useState('');
// 	const [password, setPassword] = useState('');
// 	const [message, setMessage] = useState("");s

// 	const handleUsernameChange = (e) => {
// 		setUsername(e.target.value);
// 	};

// 	const handleEmailChange = (e) => {
// 		setEmail(e.target.value);
// 	};

// 	const handlePasswordChange = (e) => {
// 		setPassword(e.target.value);
// 	};

// 	function register() {
//         fetch('http://localhost:5000/register', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ 'username': username, 'password': password, 'email': email })
//         })
//         .then(response => {
//             if (response.ok) {
//                 return response.json();
//             } else {
//                 throw new Error('Authentication Failed');
//             }
//         })
//         .then(data => {
//             if (data.success) {
//                 setMessage("Login successful!");

         
//                 navigate(`/courses`); 
//             } else {
//                 setMessage(data.message);
   
//             }
//         })
//         .catch(error => {
//             setMessage('Authentication failed. Incorrect username or password.');

//         });
//     }






// 	return (
// 		<div className="container">
// 			<h2>Registration Form</h2>
// 			<form>
// 				<div className="form-group">
// 					<label htmlFor="username">Username:</label>
// 					<input type="text" className="form-control" id="username" onChange={handleUsernameChange} />
// 				</div>
// 				<div className="form-group">
// 					<label htmlFor="email">Email:</label>
// 					<input type="email" className="form-control" id="email"  onChange={handleEmailChange}  />
// 				</div>
// 				<div className="form-group">
// 					<label htmlFor="password">Password:</label>
// 					<input type="password" className="form-control" id="password" onChange={handlePasswordChange} />
// 				</div>
// 				<button type="submit" className="btn btn-primary" onSubmit={register}>Register</button>
// 			</form>
// 		</div>
// 	);
// }

// export default RegForm;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegForm() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
	const [confirm_password, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

	const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    // Register function to call API
    function register(e) {
        e.preventDefault();  // Prevent the form from refreshing

        fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'username': username, 'password': password, 'email': email })
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Registration Failed');
            }
        })
        .then(data => {
            if (data.success) {
                setMessage("Registration successful!");
                navigate(`/courses`); // Redirect to courses after successful registration
            } else {
                setMessage(data.message); // Show error message if registration fails
            }
        })
        .catch(error => {
            setMessage('Registration failed. Please try again.');
        });
    }

    return (
        <div className="container">
            <h2>Registration Form</h2>
            <form > {/* Use onSubmit instead of onClick for form submission */}
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
				<div className="form-group">
                    <label htmlFor="confirm_password">Confirm Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        id="confirm_password"
                        value={confirm_password}
                        onChange={handleConfirmPasswordChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
				
                <button type="submit" className="btn btn-primary" onSubmit={register}>
                    Register
                </button>
            </form>
            {message && <p>{message}</p>} {/* Display registration message or error */}
        </div>
    );
}

export default RegForm;
