import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/store"
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = 'dev-oh6m6lnus4nehfc3.us.auth0.com';
const client = '7OPEDGCbSCTf1GFuqhZwRyE58VngLbwR';

ReactDOM.render(
  <Router>
    <Auth0Provider
    domain={domain}
    clientId={client}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <Provider store={store}>
    <App />
    </Provider>
    </Auth0Provider>
  </Router>,
  document.getElementById('root')
);



reportWebVitals();
