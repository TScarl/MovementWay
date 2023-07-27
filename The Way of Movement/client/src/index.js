import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';

// ReactDOM.render is a method used to render the root React component into the HTML DOM.

ReactDOM.render(
  <React.StrictMode>
    {/* The root component of the application, <App />, is rendered inside <React.StrictMode>. */}
    {/* <React.StrictMode> is a development mode that performs additional checks and warnings for potential problems in the application. */}
    <App />
  </React.StrictMode>,
  document.getElementById('root') // The root component is rendered into the HTML element with the 'root' id.
);