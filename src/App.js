import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './pages/NavBar';
import Footer from './pages/Footer';
import HomePage from './pages/HomePage';


const App = () => {
  return (
    <Router>
        <NavBar />
         <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
    </Router>
  );
};

export default App;
