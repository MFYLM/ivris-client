import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StreamPage from './pages/StreamPage/StreamPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' Component={StreamPage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
