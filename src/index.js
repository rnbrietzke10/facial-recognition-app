import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <p className="icon">
      <a
        target="_blank"
        href="https://icons8.com/icon/GIIxoRALwHyG/recognition"
      >
        Recognition{' '}
      </a>{' '}
      icon by{' '}
      <a target="_blank" href="https://icons8.com">
        {' '}
        Icons8
      </a>
    </p>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
