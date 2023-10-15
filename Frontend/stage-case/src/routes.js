import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Lobby from './pages/Lobby';


export default function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
            <Route path="/" exact element={<App />}/>
            <Route path="/lobby" element={<Lobby />} />
            </Routes>
        </BrowserRouter>
    );
}