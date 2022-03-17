import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/styles.css';
import App from './App';
import About from './components/pages/AboutPage';
import Imprint from './components/pages/ImprintPage';

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/imprint" element={<ImprintPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
