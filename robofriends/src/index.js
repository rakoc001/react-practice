import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Hello from './Hello';
// import reportWebVitals from './reportWebVitals';
import 'tachyons';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Hello greeting={'Good Morning Lifeform'}/>
  </React.StrictMode>
);

// reportWebVitals();
