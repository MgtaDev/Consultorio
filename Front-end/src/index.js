import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/store"
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import UserContext from './context/UserContext';

ReactDOM.render(
  <Router>
   
    <Provider store={store}>
    <UserContext.Provider>
    <App />
    </UserContext.Provider>
    </Provider>
   
  </Router>,
  document.getElementById('root')
);



reportWebVitals();
