import React from 'react';
import ReactDOM from 'react-dom/client';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './index.css';
import HomeIndex from './routers/home/home.index';
import HomeTentang from './routers/home/home.tentang';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<HomeIndex/>}/>
        <Route path='/tentang' element={<HomeTentang/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);