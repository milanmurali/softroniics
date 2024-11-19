import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Test } from './Test';
import { Home } from './Cryptify/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashBoard from './Cryptify/DashBoard';
// import { CoinDetails } from './Cryptify/CoinDetails';
import CoinDetails from './Cryptify/CoinDetails';

import { Provider } from 'react-redux';
import { store } from './Cryptify/Store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/coins/:id" element={<CoinDetails />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </Provider>
    {/* <App /> */}
    {/* <Test/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
