import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Create a new div element
const root = document.createElement('div');

// Append it to the body of the document
document.body.appendChild(root);

// Now render the App component into the new div
ReactDOM.createRoot(root).render(<App />);