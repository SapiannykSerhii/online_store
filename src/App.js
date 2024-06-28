import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import NavBar from './pages/NavBar';
import Footer from './pages/Footer';
import HomePage from './pages/HomePage';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <NavBar />
         <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ProductList />} />
        </Routes>
        <Footer />
      </Box>  
    </Router>
  );
};

export default App;
