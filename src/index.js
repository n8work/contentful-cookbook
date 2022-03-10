import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './assets/styles.css';
import App from './App';
import './i18n';

ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>,
  document.getElementById('root')
);
