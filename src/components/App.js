import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../page/Home';
import Article from '../page/Article';
import ErrorPage from '../page/ErrorPage';
import AboutPage from '../page/About';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<Article />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/informations" element={<AboutPage />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
