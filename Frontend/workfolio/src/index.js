import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {Store} from '../src/Store/Store.js';
import App from './App';
import { Provider } from 'react-redux';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

