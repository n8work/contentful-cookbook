import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/styles.css';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutPage from './components/pages/AboutPage';
import ErrorPage from './components/pages/ErrorPage';
import HomePage from './components/pages/HomePage';
import ImprintPage from './components/pages/ImprintPage';
import RecipePage from './components/pages/RecipePage';
import ResultsPage from './components/pages/ResultsPage';

render(
  <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<ResultsPage />} />
        <Route path="/recipe/:id" element={<RecipePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/imprint" element={<ImprintPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>,
  document.getElementById('root')
);
