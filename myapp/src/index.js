import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
import 'react-calendar/dist/Calendar.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import { configureStore } from './app/store/configureStore';
import ScrollToTop from './app/layout/scrolltoTop';
import { loadEvents } from './app/features/events/eventAction';

const store = configureStore();
// store.dispatch(loadEvents());
console.log(store.getState());
ReactDOM.render(

    <Provider store={store}>
    <BrowserRouter>
    <ScrollToTop/>
    <App />
    </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
