

import React, { useState, useEffect, useContext, createContext } from 'react';
import { CredentialsContext } from './LoginForm';
import DisplayStatus from './DisplayStatus';
import { useNavigate } from 'react-router-dom';


export const AuthContext = createContext();

function AuthMessage() {
    const navigate = useNavigate();

    const { enteredUsername, enteredPassword, loginPressed } = useContext(CredentialsContext);

    console.log("IN AUTH MESSAGE");
    console.log(enteredUsername);
    console.log(loginPressed);
    const [message, setMessage] = useState("");
    const [type, setType] = useState("");


    let response;
    let users;

    async function fetchData() {

        console.log("IN ASYNC");
        try {
            response = await fetch('https://jsonplaceholder.typicode.com/users');
            users = await response.json();

            console.log("FETCHED");
            setType("Error");
            setMessage("Invalid username or password!");
            users.forEach((user) => {
                if (user.username == enteredUsername) {
                    console.log(" this is the entered username");
                    console.log(enteredUsername);
                    console.log(" this is the entered pw");
                    console.log(enteredPassword);
                    if (user.email == enteredPassword) {
                        console.log("SUCCESSFUL LOGIN");
                        setMessage("Login Successful! Redirecting...");
                        console.log("MESSAGE:");
                        console.log(message);
                        setType("Success");
                        console.log(type);

                        setTimeout(() => {
                            navigate('/courses');
                        }, 2000);

                    }


                }
            }
            );

        }
        catch (error) {
            console.error('Error fetching data:', error);
        }

        console.log("MESSAGE:");
        console.log(message);
        console.log(type);

    }

    useEffect(() => {
        if (loginPressed) {
            fetchData();
        }
    }, [loginPressed]);

    return (
        <div>
            <AuthContext.Provider value={{ type, message }}>
                <DisplayStatus />
            </AuthContext.Provider>

        </div>

    );
}

export default AuthMessage;
