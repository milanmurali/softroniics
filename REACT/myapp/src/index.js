import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Coffee } from './Coffee';
// import { Demo } from './Demo';
// import { Parent } from './Parent';
// import { Profilecards } from './Profilecards';
// import { Profile } from './Profile';
// import { Map } from './Map';
// import TaskList from './TaskList';
// import Todoo from './Todoo';
// import { Bootstrap1 } from './Bootstrap1';
import { Bootstrap2 } from './Bootstrap2';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Coffee/> */}
    <Bootstrap2/>
    {/* <Bootstrap1/> */}
    {/* <Todoo/> */}
    {/* <TaskList /> */}
    {/* <Map/> */}
    {/* <Profile/> */}
    {/* <Parent/> */}
    {/* <App />     */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
