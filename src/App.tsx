import React from 'react';
import './App.css';
import { Router, Route, Routes } from 'react-router-dom';
import StreamPage from './pages/StreamPage'; 
import AppHeader from './components/Header/AppHeader';
import MainPage from './pages/MainPage';
import AppFooter from './components/Footer/AppFooter';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import FuturePage from './pages/FuturePage';
import InvestPage from './pages/InvestPage';


function App() {
  return (
    <div className="App">
      <AppHeader />
      <Routes>
        <Route path='/ivris-client' element={<MainPage />} />
        <Route path='/streaming' element={<StreamPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/future' element={<FuturePage />} />
        <Route path='/invest' element={<InvestPage />} />
      </Routes>
      <AppFooter />
    </div>
  );
}

export default App;
