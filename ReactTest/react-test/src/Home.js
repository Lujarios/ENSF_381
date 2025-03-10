import React from 'react';

function Home(props) {
    return (
        <div>
            <h1>Welcome to the home page {props.name}!</h1>
            <a href='/'> Home </a>
            <a href='/About'> About Us</a>
            <a href='/ContactUs'> Contact Us</a>
        </div>
    );
};
export default Home;
