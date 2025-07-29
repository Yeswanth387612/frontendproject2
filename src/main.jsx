import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Page1 from './page1.jsx';
import Page2 from './page2.jsx'; 
import Page3 from './page3.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='frontendproject2'>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/page1" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/page3" element={<Page3 />} />
    </Routes>
  </BrowserRouter>
);
