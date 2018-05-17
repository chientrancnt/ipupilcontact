import React from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
   
        <Router>
            <Route component={App} />
        </Router>,
   
    document.getElementById('root')
);
registerServiceWorker();

