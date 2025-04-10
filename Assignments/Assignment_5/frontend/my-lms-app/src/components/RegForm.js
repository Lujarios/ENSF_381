
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegForm() {
    const navigate = useNavigate();
    

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
	const [confirm_password, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false);

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

    async function register(e) {

        e.preventDefault();  // Prevent the form from refreshing

        setShowMessage(false);


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
                setShowMessage(true);
                setTimeout(() => {
                    navigate(`/login`);
                }, 2000);
            } else {
                setMessage(data.message.join('\n')); 
                setShowMessage(true);
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
            <form > 
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
                        type="text"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
				
                <button type="submit" class="signup" onClick={register}>
                    Signup
                </button>
            </form>
            <br></br>
            {showMessage && (
                <div class="message-box">
                    <p>{message}</p>
                </div>
            )}
        </div>
    );
}

export default RegForm;
