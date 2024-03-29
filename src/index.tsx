import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './component/App/App';
import reportWebVitals from './reportWebVitals.js';
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './store/counterSlise'
import productCardStateReduser from './store/productCardState';
import basketStateSlice from './store/basketStateSlise';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const store: any = configureStore({
  reducer: {
    counter: counterReducer,
    product: productCardStateReduser,
    basket: basketStateSlice
  },
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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

