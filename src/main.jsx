import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/animate.css';
import './styles/swiper-bundle.min.css';
import './styles/tailwind.css';
import './styles/main.js';
// import './styles/swiper-bundle.min.js';
// import './styles/wow.min.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
);
