
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
    async function register(e) {
        e.preventDefault();  // Prevent the form from refreshing
        console.log("IN REGISTER FRONTEND");

        fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'username': username, 'password': password, 'confirm_password': confirm_password, 'email': email })
        })
        .then(response => {
            console.log("AT THE THEN ")
            if (response.ok) {
                console.log("RESPONSE OKAY")
                return response.json();
            } else {
                throw new Error('Registration Failed');
            }

        })
        .then(data => {
            if (data.success) {
                setMessage(data.message);
                setTimeout(() => {
                    navigate(`/courses`);
                }, 2000);
            } else {
                setMessage(data.message.join('\n')); // Show error message if registration fails
            }
            console.log("MESSAGE");
            console.log(message);
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
                    <br></br>
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
                    <br></br>
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
                    <br></br>
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
                    <br></br>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
				
                <button type="submit" className="btn btn-primary" onClick={register}>
                    Register
                </button>
            </form>
            {<pre >{message}</pre>} {/* Display registration message or error */}
        </div>
    );
}

export default RegForm;
