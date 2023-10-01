import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import your main App component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Render the App component into an HTML element with id 'root'
);
