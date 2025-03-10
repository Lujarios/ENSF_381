import React from 'react';
import {useNavigate} from 'react-router-dom';

function ContactUs() {

    /*
    return( 
        <h1>
            For any question, please contact us at: info@info.com
        </h1>
    );
    */

    const navigate = useNavigate(); // This hook is used for programmatic navigation in a React application
    
    function handleButtonClick(){
        navigate("/")
    }
    
    return (
        <div>
            <h1>For any question, please contact us at: info@info.com</h1>
            <button onClick={handleButtonClick}>Go to Home page!</button>
        </div>
    );
}

export default ContactUs;
