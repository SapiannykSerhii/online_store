import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import NavBar from './pages/NavBar';
import Footer from './pages/Footer';
import HomePage from './pages/HomePage';
import ProductList from './components/ProductList';
import SinglePost from './components/SingleProduct';

const App = () => {
  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <NavBar />
        <Box sx={{flex: 1}}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ProductList />} />
            <Route path='/product/:productId' element={<SinglePost />} />
          </Routes>
        </Box>  
        <Footer />
      </Box>  
    </Router>
  );
};

export default App;
