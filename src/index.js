import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import Home from './pages/Home/Home';
import Construction from './pages/Construction/Construction';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Construction />} />
                <Route path="/dino" element={<Construction />} />
                <Route path="/shop" element={<Construction />} />
                <Route path="/house-committee" element={<Construction />} />
                <Route path="/tkc" element={<Construction />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
