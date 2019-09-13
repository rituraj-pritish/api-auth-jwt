import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import {composeWithDevTools} from 'redux-devtools-extension'

import reducers from './reducers';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

//alert setup
const options = {
  position: 'bottom right',
  timeout: 4000,
  offset: '30px',
  transition: 'fade'

};


const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(reduxThunk)));

ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...options} >
    <Provider store={store}>
      <App />
    </Provider>
  </AlertProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
