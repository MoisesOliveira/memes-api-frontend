import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  Routes, BrowserRouter,
  Route
} from "react-router-dom";
import Home from './Components/Home.jsx';
import Content from './Components/Content.jsx';
import './Components/styles/Home.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' exact element={< Home />} />
      <Route path='content' exact element={<Content />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
