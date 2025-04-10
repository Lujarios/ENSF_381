

import React, { useState, useEffect, useContext, createContext } from 'react';
import { CredentialsContext } from './LoginForm';
import { useNavigate } from 'react-router-dom';


export const AuthContext = createContext();

function AuthMessage() {
    const navigate = useNavigate();

    const [showMessage, setShowMessage] = useState(false);

    const { enteredUsername, enteredPassword, loginPressed } = useContext(CredentialsContext);

    console.log("IN AUTH MESSAGE");
    console.log(enteredUsername);
    console.log(loginPressed);
    const [message, setMessage] = useState("");
    const [type, setType] = useState("");
    const [student_id, setStudent_id] = useState("");



    function handleAuthentication() {

        
        setShowMessage(false);

        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'username': enteredUsername, 'password': enteredPassword })
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Authentication Failed');
            }
        })
        .then(data => {
            if (data.success) {
                setMessage(data.message);
                setType("Success:");
                setStudent_id(data.student_id);
                setShowMessage(true);
         
                setTimeout(() => {
                    navigate(`/courses`); 
                }, 2000);
            } else {
                setMessage(data.message);
                setType("Error:");
                setShowMessage(true);
            }
        })
        .catch(error => {
            setMessage('Authentication failed. Please try again');
            setType("Error:");
        });
    }



    useEffect(() => {
        if (loginPressed) {
            handleAuthentication();
        }
    }, [loginPressed]);

    return (
        <>
            {showMessage && (
                <>
                    <br />
                    <div className="message-box">
                        <p>{type} {message}</p>
                    </div>
                </>
            )}
        </>
    );
}

export default AuthMessage;
