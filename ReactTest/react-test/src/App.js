import React, { useState } from 'react';
function App() {
  // State to hold the username
  const [username, setUsername] = useState('');

  // Function to handle form submission
  async function handleSubmit(event) {
    event.preventDefault();

    const backendEndpoint = 'http://127.0.0.1:5000';
    try {
      const response = await fetch(backendEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 'username': username }), //Converts a JavaScript object or value into a JSON string.
      });
      console.log('Response:', response);

      // const data = await response.text();
      const data = await response.json();

      if (response.ok) {
        console.log(data);
        console.log(data['msg']);
        console.log('Form submitted successfully!');
      } else {
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('Error during form submission:', error);
    }
  };
  return (
    <div>
      <h1>My Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
        </label>
        <input
          name='username'
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;