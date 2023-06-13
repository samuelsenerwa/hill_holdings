import React from 'react';

import { AboutUs, Header, Services, Footer, Clients, FindUs } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
    <div>
        <Navbar />
        <Header />
        <AboutUs />
        <Services />
        <Clients />
        <FindUs />
        {/* <Footer /> */}

    </div>
);

export default App;