

import React, {useState, useEffect, useContext, createContext} from 'react';
import { CredentialsContext } from './LoginForm';
import DisplayStatus from './DisplayStatus';
import { useNavigate } from 'react-router-dom'; 


export const AuthContext = createContext();

function AuthMessage() {
    const navigate = useNavigate(); 

    const {enteredUsername, enteredPassword, loginPressed }= useContext(CredentialsContext);

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
        console.log("IN USE EFFECTTTT");
        if(loginPressed) {
            fetchData();
        }

    }, 
    [loginPressed]);
    


    return (
        <div>
            <AuthContext.Provider value={{ type, message}}>
                <DisplayStatus />
            </AuthContext.Provider>

        </div>

    );
}

export default AuthMessage;


// import React, { useState, useEffect, useContext } from 'react';
// import { CredentialsContext } from './LoginForm';
// import DisplayStatus from './DisplayStatus';

// function AuthMessage() {
//   const { enteredUsername, enteredPassword, loginPressed } = useContext(CredentialsContext);

//   const [message, setMessage] = useState("");
//   const [type, setType] = useState("");

//   // Perform login validation only when loginPressed changes
//   useEffect(() => {
//     if (loginPressed === 0) return; // Ensure the effect doesn't run on initial render

//     async function verifyLogin() {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const users = await response.json();

//         setType("Error");
//         setMessage("Invalid username or password!");

//         // Check if the username exists and validate the password
//         const user = users.find(user => user.username === enteredUsername);
//         if (user && user.email === enteredPassword) {
//           setMessage("Login Successful! Redirecting...");
//           setType("Success");

//           // Redirect to /courses after 2 seconds
//           setTimeout(() => {
//             window.location.href = "/courses"; // Perform redirect here
//           }, 2000);
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setType("Error");
//         setMessage("Something went wrong. Please try again.");
//       }
//     }

//     verifyLogin();
//   }, [loginPressed]); // Dependency on loginPressed to trigger the effect

//   return (
//     <div>
//       <DisplayStatus type={type} message={message} />
//     </div>
//   );
// }

// export default AuthMessage;
