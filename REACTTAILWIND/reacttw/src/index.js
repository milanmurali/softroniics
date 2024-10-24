import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Helloo } from './Helloo';
import { Business } from './Business';
import { Educ } from './Educ';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BisLogin } from './BisLogin';
import { BisSignup } from './BisSignup';
import { BisAbout } from './BisAbout';
import { BisContact } from './BisContact';
import { Counter } from './Counter';
import { BgChanger } from './BgChanger';
import { SimluateDataFetch } from './SimluateDataFetch';
import { ApiCallSim } from './ApiCallSim';
import { ApiTodo } from './ApiTodo';
import { MovieList } from './MovieList';
import { Movie } from './Movie';
import { Weather } from './Weather';
import { FormSubmission } from './FormSubmission';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* Business */}
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Business />}> </Route>
        <Route path="/home" element={<Business />}> </Route>
        <Route path="/bisabout" element={<BisAbout />}> </Route>
        <Route path="/biscontact" element={<BisContact />}> </Route>
        <Route path="/bislogin" element={<BisLogin />}> </Route>
        <Route path="/bissignup" element={<BisSignup />}> </Route>
      </Routes> */}
    {/* </BrowserRouter> */}

      {/* MovieDB */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieList/>}> </Route>
          <Route path="/movie/:imdbID" element={<Movie/>}> </Route>
        </Routes>
      </BrowserRouter> */}
    <FormSubmission/>
    {/* <Weather/> */}
    {/* <ApiCallSim/>  */}
    {/* <ApiTodo/>   */}
    {/* <SimluateDataFetch/> */}
    {/* <BgChanger/> */}
    {/* <Counter/> */}
    {/* <Educ/> */}
    {/* <Business /> */}
    {/* <Helloo/> */}
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
