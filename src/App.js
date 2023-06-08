import React from 'react';
import './App.css';
import Header from './components/Header';
import AddStudent from './components/AddStudent';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllStudent from './components/AllStudent';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<AllStudent/>} />
          <Route path="/add" element={<AddStudent />} />
        </Routes>
          
      </div>
    </Router>
  );
}

export default App;
