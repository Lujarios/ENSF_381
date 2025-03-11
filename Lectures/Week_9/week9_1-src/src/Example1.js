import React, { useState } from 'react';

function Example1() {
    const [count, setCount] = useState(0);
    
    // Define a function to handle incrementing the count
    function handleIncrement() {
        setCount(count + 1);
    };
    
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>
                Increment
            </button>
        </div>
    );
}

export default Example1;
