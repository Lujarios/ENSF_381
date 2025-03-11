import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from './App';

function Example5() {
    const { theme } = useContext(ThemeContext);
    
    return (
        <div style={{ background: theme === 'light' ? '#f0f0f0' : '#333', padding: '20px' }}>
            <p style={{ color: theme === 'light' ? '#333' : '#f0f0f0' }}>
                Themed Component with {theme} theme
            </p>
        </div>
    );
}

export default Example5;
