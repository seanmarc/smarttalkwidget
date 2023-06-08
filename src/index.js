import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";

document.addEventListener("DOMContentLoaded", function() {
  // Get the script tag
  const scriptTag = document.currentScript || Array.from(document.getElementsByTagName('script')).pop();

  // Get the user ID from the data attribute
  const userId = scriptTag.getAttribute('data-user-id');

  // Create a new div element
  const root = document.createElement('div');

  // Append it to the body of the document
  document.body.appendChild(root);

  // Now render the App component into the new div, passing the user ID as a prop
  ReactDOM.createRoot(root).render(<App userId={userId} />);
});
