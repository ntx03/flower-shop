import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './component/App/App';
import reportWebVitals from './reportWebVitals.js';
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux';
//import { createStore, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import navigationReducer from '../src/store/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const store = configureStore({
  reducer: navigationReducer,
});

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

