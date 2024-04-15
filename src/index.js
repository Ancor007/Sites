import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './pages/App.js';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './pages/store/store.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
      
  </React.StrictMode>
);

reportWebVitals();
