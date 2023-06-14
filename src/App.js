import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AboutUs, Header, Services, Footer, Clients, FindUs } from './container';
import { Navbar } from './components';

import './App.css';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<FindUs />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
