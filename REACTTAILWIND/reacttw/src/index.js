import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Helloo } from './Helloo';
import { Educ } from './Educ';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Business } from './Bizness/Business';
import { BisLogin } from './Bizness//BisLogin';
import { BisSignup } from './Bizness//BisSignup';
import { BisAbout } from './Bizness//BisAbout';
import { BisContact } from './Bizness//BisContact';
import { Counter } from './Counter';
import { BgChanger } from './BgChanger';
import { SimluateDataFetch } from './SimluateDataFetch';
import { ApiCallSim } from './ApiCallSim';
import { ApiTodo } from './ApiTodo';
import { MovieList } from './MovieList';
import { Movie } from './Movie';
import { Weather } from './Weather';
import { FormSubmission } from './FormSubmission';
import { Keys } from './Keys';
import { Todo } from './Todo';
import { Main } from './CR/Main';
import { UPCMain } from './UserPermissionChecker/UPCMain';
import { ThemeProvider } from './UCTheme/ThemeProvider';
import { TestTheme } from './UCTheme/TestTheme';
import { LanguageProvider } from './UCTheme/LanguageProvider';
import { MultiLang } from './UCTheme/MultiLang';
import { Calculator } from './Calculator';
import { UserInputTodo } from './UserInputTodo';
import { CounterTest } from './CounterTest';
import { CounterRedux } from './Redux/CounterRedux';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
import { CartHome, Fcart } from './Redux/Cart/Fcart';
import { AddtoCart, Cart } from './Redux/Cart/Cart';
import { NHome } from './nodetest/NHome';
import { NodeLogin } from './nodetest/NodeLogin';
import { NodeProfile } from './nodetest/NodeProfile';
import NodeRegister from './nodetest/NodeRegister';

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
        </Routes>
        </BrowserRouter> */}

    {/* MovieDB */}
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList />}> </Route>
        <Route path="/movie/:imdbID" element={<Movie />}> </Route>
        </Routes>
        </BrowserRouter> */}

    {/* <LanguageProvider>
      <MultiLang/>
      </LanguageProvider> */}

    {/* <ThemeProvider>
      <TestTheme />
      </ThemeProvider> */}
    {/* <Provider store={Store}>
      <CounterRedux/>
      </Provider> */}

    {/* Flipkart */}
    {/* <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Fcart />}> </Route>
            <Route path="/cart" element={<Cart />}> </Route>
            </Route>
            </Routes>
            </BrowserRouter>
            </Provider> */}




    {/* node */}
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/profile" element={<NodeProfile />}> </Route>
          <Route path="/login" element={<NodeLogin />}> </Route>
          <Route path="/home" element={<NHome />}> </Route>
          <Route path="/" element={<NodeRegister />}> </Route>
        </Route>
      </Routes>
    </BrowserRouter>


    {/* <UserInputTodo/>   */}
    {/* <CounterTest/> */}
    {/* <Calculator/> */}
    {/* <UPCMain /> */}
    {/* <Main/> */}
    {/* <Todo /> */}
    {/* <Keys/> */}
    {/* <FormSubmission/> */}
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
