import React from 'react';
import './App.css';
import { Router, Route, Routes } from 'react-router-dom';
import StreamPage from './pages/StreamPage/StreamPage';
import AppHeader from './components/Header/AppHeader';
import MainPage from './pages/MainPage/MainPage';


function App() {
  return (
    <div className="App">
      <AppHeader />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/streaming' element={<StreamPage />} />
      </Routes>
    </div>
  );
}

export default App;
